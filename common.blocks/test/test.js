modules.define('test', ['i-bem-dom', 'modal'], function(provide, bemDom, Modal) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function(ev) {
                var modal = this.findChildBlock(Modal);
                this._domEvents('link').on('click', function(e) {
                    modal.setMod('visible');

                });

            }
        }
    },
}));

});
