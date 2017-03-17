modules.define('pc-block', ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    this._domEvents('head').on('click', function(e) {
                        this.toggleMod('opened');

                        $('.pc-block__content-text.question-main span:even').on('click', function (e) {
                            var _this = $(this).next();
                            if( _this.css('overflow') === 'hidden') {
                                _this.css({'max-height':'100px', 'overflow':'auto'});
                            } else {
                                _this.css({'max-height':'0px', 'overflow':'hidden'});
                            }
                        });
                    });
                }
            }
        }
    }));
});
