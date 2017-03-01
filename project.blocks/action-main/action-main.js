modules.define('action-main', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input'], function(provide, bemDom,  Popup, bemHtml, $, InfoModal, input) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents().on('click', function(e) {
                        this[this.params.action]();
                    });
                }
            }
        },
        method: function() {
   
        }
    }));
});
