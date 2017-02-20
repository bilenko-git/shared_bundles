modules.define('content', ['i-bem-dom'/*, 'BEMHTML', 'jquery'*/], function(provide, bemDom/*, bemHtml, $*/) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
/*                    this._domEvents().on('click', function() {
                        this.domElem.append(bemHtml.apply({
                                block: 'actions',
                                mods: { view: 'simple' },
                                content: [{
                                    elem: 'group',
                                    content: [{
                                        block: 'userinfo',
                                        content: [{
                                            block: 'button',
                                            mods: { view: 'toggle' },
                                            icon: {
                                                block: 'icon',
                                                url: '/assets/img/icon_toggle.svg'
                                            }
                                        }, {
                                            block: 'icon',
                                            mix: { block: 'userinfo', elem: 'avatar' },
                                            url: '/assets/img/user-avatar.png'
                                        }, {
                                            elem: 'group',
                                            content: [{
                                                block: 'button',
                                                mods: { view: 'main' },
                                                text: 'Пригласить пользователя'
                                            }]
                                        }]
                                    }]
                                }, {
                                    elem: 'group',
                                    content: [{
                                        block: 'c-chart',
                                        content: {
                                            elem: 'item',
                                            elemMods: { view: 'simple' },
                                            content: {
                                                tag: 'canvas',
                                                attrs: { id: 'chartMin104', width: '280', height: '50' }
                                            }
                                        }
                                    }, {
                                        block: 'c-chart',
                                        content: {
                                            elem: 'item',
                                            elemMods: { view: 'simple' },
                                            content: {
                                                tag: 'canvas',
                                                attrs: { id: 'chartMin105', width: '280', height: '50' }
                                            }
                                        }
                                    }]
                                }]
                            }

                        ));
                    });*/
                }
            }
        }
    }));

});
