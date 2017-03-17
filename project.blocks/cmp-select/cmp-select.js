modules.define('cmp-select', ['i-bem-dom', 'button', 'menu', 'popup'], function(provide, bemDom, Button, Menu, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents().on('click', function(e) {
                    // debugger;
                    // this.findChildElem('head-info').toggleMod('closed');
                    // this.findChildElem('content').toggleMod('closed');
                    // this.findChildElem('content').toggleMod('closed');
                    // debugger;
                    // var innerPopup = this.findChildBlock(Popup),
                    var innerContent = this.findChildElem('content');
                    var toggleButton = this.findChildElem('button');

                    // innerPopup.toggleMod('visible');
                    innerContent.toggleMod('closed');
                    toggleButton.toggleMod('open');
                });
            }
        }
    }
}));

});
