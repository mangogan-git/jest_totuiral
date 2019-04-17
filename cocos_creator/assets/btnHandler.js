cc.Class({
    extends: cc.Component,
    properties: {
        text: {
            default: 'click',
        },

        ccLabel: {
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onClick(event, data) {
        cc.log(event, data);
        if (this.ccLabel) {
            this.ccLabel.string = typeof data === 'string' ? data : this.text;
        }
    },

    // update (dt) {},
});
