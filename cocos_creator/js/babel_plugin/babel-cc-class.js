module.exports = (babel) => {
    const { types: t } = babel;
    return {
        visitor: {
            AssignmentExpression(path) {
                // 直接跳過有 module.exports 的 path
                path.skip();
            },
            CallExpression(path) {
                /* 判斷是不是 cc.Class 形式 */
                // 檢查是呼叫某類別裡面的 member method
                if (!t.isMemberExpression(path.node.callee)) return;
                // 檢查是 .cc 物件
                if (!t.isIdentifier(path.node.callee.object, { name: 'cc' })) return;
                // 檢查是 Class
                if (!t.isIdentifier(path.node.callee.property, { name: 'Class' })) return;

                // 建立 MemberExpression modules.exports
                const moduleExports = t.memberExpression(t.identifier('module'), t.identifier('exports'));
                const assignment = t.assignmentExpression('=', moduleExports, path.node);


                path.replaceWith(assignment);
                // 避免 traverse children 造成 infinite loop
                path.skip();
            },
        },
    };
};
