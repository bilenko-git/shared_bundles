modules.define('panel', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents(bemDom.win).on('scroll', function() {
                    this._onWinResize(bemDom.win);
                });
            }
        }
    },
    _onWinResize: function(e) {
        // debugger;
        // console.log(e.scrollTop);
        var panel = this;
        var scrollPos = e.scrollTop();
        var panelTop = this.domElem;
        var panelTopHeight = panelTop.height() === 0 ? 90 : panelTop.height();
        var tm1 = setTimeout(function (e) {
            clearTimeout(tm1);
            if (panel.hasMod("closed") && scrollPos > panelTopHeight) {
                panel.toggleMod("closed")
            } else if (!panel.hasMod("closed") && scrollPos < panelTopHeight) {
                panel.toggleMod("closed");
            }
        }, 300);
    }
}));

});
