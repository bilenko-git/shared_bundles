modules.define('actions', ['i-bem-dom', 'modal', 'BEMHTML', 'jquery'], function(provide, bemDom, Modal, bemHtml, $) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('button').on('click', function() {
                        debugger;

                        // console.log(Modal);
                        console.log(this.findChildBlock(Modal) === null);
                        if( this.findChildBlock(Modal) === null) {
                            var modal = bemHtml.apply({
                                block: 'modal',
                                mods : { visible: false, theme : 'life-light', autoclosable: true },
                                content: 'test',
                            });
                            var mod = bemDom.append(this.domElem, modal);
                        }
                        // console.log(this.findChildBlock(Modal));

                        var modalWindow = this.findChildBlock(Modal);
                        modalWindow.toggleMod('visible');
                        debugger;
                    });
                }
            }
        }
    }));

});
