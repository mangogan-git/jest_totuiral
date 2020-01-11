import btnHandler from '../../assets/btnHandler';

cc.js.setClassName('btnHandler', btnHandler);

const node = new cc.Node();
const ccBtn = node.addComponent(cc.Button);
const ccLabel = node.addComponent(cc.Label);
const buttonComponent = node.addComponent(btnHandler);
buttonComponent.ccLabel = ccLabel;

const eventHandler = new cc.Component.EventHandler();
eventHandler.target = node;
eventHandler.component = 'btnHandler';
eventHandler.handler = 'onClick';

// https://forum.cocos.com/t/button/47376/7
ccBtn.clickEvents.push(eventHandler);
test('check label text', () => {
    ccBtn.clickEvents[0].emit([new cc.Event.EventTouch([], true), 'hello jest']);
    expect(ccLabel.string).toBe('hello jest');
});
