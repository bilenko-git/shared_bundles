modules.define('toggle-block', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                // debugger;
                this._domEvents('head').on('click', function(e) {
                    this.toggleMod('closed');
                });
            }
        }
    }
}));

});
