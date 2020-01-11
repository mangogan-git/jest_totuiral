const {ccclass, property} = cc._decorator;

@ccclass
export default class BtnHandler extends cc.Component {

    @property(cc.Label)
    ccLabel: cc.Label = null;

    @property
    text: string = 'click';

    onClick(event, data) {
        cc.log(event, data);
        if (this.ccLabel) {
            this.ccLabel.string = typeof data === 'string' ? data : this.text;
        }
    }
}
