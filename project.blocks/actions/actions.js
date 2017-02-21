modules.define('actions', ['i-bem-dom', 'modal', 'BEMHTML', 'jquery'], function(provide, bemDom, Modal, bemHtml, $) {

    // debugger;
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    // debugger;
                    this._domEvents('button').on('click', this._onClick);
                }
            }
        },
        _onClick: function() {

                        debugger;
                        // console.log(Modal);
                        console.log(this.findChildBlock(Modal) === null);
                        // console.log(this.findChildBlock(Page).findChildBlock(Modal));

                        if( this.findChildBlock(Modal) === null) {
                            var modal = bemHtml.apply({
                                block: 'modal',
                                mods : { visible: false, theme : 'life-light', autoclosable: true },
                                content: 'test',
                            });
                            var mod = bemDom.append(this.domElem, modal);
                        }
                        console.log(mod);

                        var modalWindow = this.findChildBlock(Modal);

                        modalWindow.toggleMod('visible');
                    
        }
    }));

});
