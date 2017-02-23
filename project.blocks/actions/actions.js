modules.define('actions', ['i-bem-dom'/*,'i-bem'*/, 'modal', 'BEMHTML', 'jquery'], function(provide, bemDom/*,iBem*/, Modal, bemHtml, $) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    // console.log(Modal);
                    // console.log(iBem);
                    // console.log(modules.getState('modal'));
                    this._domEvents('button').on('click', function() {
                        // debugger;
                        // act = this;
                        // console.log(this.findChildElem('modal'));
                        // console.log(this.findParentBlock(Modal));
                        // console.log(this.findChildBlock(Modal) === null);
                        console.log(this.domElem);
                        if( !this._modalWindow) {
                            var modal = bemHtml.apply({
                                block: 'modal',
                                // mix: { block: 'actions', js: { id: act.params.id } },
                                mods : { visible: false, theme : 'life-light', autoclosable: true },
                                content: {
                                    block: 'button',
                                    mods: { view: 'main' },
                                    text: 'Закрыть'
                                },
                            });
                            this._modalWindow = bemDom.append(this.findChildElem('inner').domElem, modal);
                        }
                        this._modalWindow.bem(Modal).setMod('visible');
                        // Modal(mod)
                        // console.log(this.findChildBlock(Modal));

                        // var modalWindow = this.findChildBlock(Modal);
                        // modalWindow.toggleMod('visible');
                        // modalWindow.toggleMod('visible');
                        debugger;
                    });
                }
            }
        }
    }));

});
