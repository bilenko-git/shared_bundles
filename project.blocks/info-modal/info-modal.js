modules.define('info-modal', ['i-bem-dom', 'modal', 'next-tick'], function(provide, bemDom, Modal, nextTick) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    if (this.__self.getModal()) return;

                    this.__self._modal = this.findChildBlock(Modal);
                }
            }
        }
    }, {
        _show: function(content) {
            return this.getModal()
                .setContent(content)
                .setMod('visible');

            console.log('_show');
            return this;
        },
        show: function(content) {
            if (this.getModal()) return this._show(content);

            var _this = this;
            nextTick(function() {
                _this._show(content);
            });
            console.log('show');
            return this;
        },
        hide: function() {
            this.getModal().delMod('visible');
            console.log('hide');
            return this;
        },
        toggle: function() {
            this.getModal().toggleMod('visible');
            console.log('toggle');
            return this;
        },
        getModal: function() {
            console.log('getModal');
            return this._modal;
        },
        clear: function() {
            console.log('clear');
            return this.getModal()
                .setContent('')
        }
    }));

});
