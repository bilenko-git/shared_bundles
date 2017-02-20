modules.define('pc-block', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                // debugger;
                this._domEvents('head-info').on('click', function(e) {
                    // debugger;
                    this.findChildElem('head-info').toggleMod('closed');
                    // this.findChildElem('content').toggleMod('closed');
                    this.findChildElem('content').toggleMod('closed');
                    this.findChildElem('button').toggleMod('toggle',true,'closed');
                });
            }
        }
    }
}));

});
