module.exports = {
    block: 'page',
    title: 'Page test-modal',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'test-modal.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'test-modal.min.js' }],
    mods: { theme: 'islands' },
    content: [{
        block: 'tarif',
        mods: { view: 'action' },
        content: [{
            block: 'modal', mods: { theme: 'life-light', autoclosable: true }
        }, {
            elem: 'wrapper',
            content: [{
                elem: 'head',
                content: [{
                    elem: 'icon',
                    cls: 'icon-SMP1'
                }, {
                    elem: 'head-desc',
                    content: 'Семья 1'
                }]
            }, {
                elem: 'info',
                content: {
                    block: 'menu',
                    mix: { block: 'tarif', elem: 'menu' },
                    content: [{
                        elem: 'item',
                        val: 1,
                        content: [{
                            block: 'tarif',
                            elem: 'property',
                            content: [{
                                block: 'icon',
                                mods: { std: true, 'SMP1-lev1': true }
                            }, {
                                block: 'tarif',
                                elem: 'property-desc',
                                content: [{
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { price: true },
                                    content: '14,90'
                                }, {
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { curr: true },
                                    content: 'руб/мес'
                                }]
                            }]
                        }]
                    }, {
                        elem: 'item',
                        val: 1,
                        content: [{
                            block: 'tarif',
                            elem: 'property',
                            content: [{
                                block: 'icon',
                                mods: { std: true, 'SMP1-lev2': true }
                            }, {
                                block: 'tarif',
                                elem: 'property-desc',
                                content: [{
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { time: true },
                                    content: '400 мин'
                                }, {
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { info: true },
                                    content: 'на все сети'
                                }]
                            }]
                        }]
                    }, {
                        elem: 'item',
                        val: 1,
                        content: [{
                            block: 'tarif',
                            elem: 'property',
                            content: [{
                                block: 'icon',
                                mods: { std: true, 'SMP1-lev3': true }
                            }, {
                                block: 'tarif',
                                elem: 'property-desc',
                                content: [{
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { network: true },
                                    content: '4 Гб'
                                }, {
                                    block: 'tarif',
                                    elem: 'property-desc',
                                    elemMods: { info: true },
                                    content: 'Безлимит для BiP, Viber, WhatsApp'
                                }]
                            }, {
                                block: 'icon',
                                mods: { smile: true }
                            }]
                        }]
                    }, {
                        elem: 'item',
                        val: 3,
                        content: [{
                            block: 'tarif',
                            elem: 'property',
                            content: [{
                                block: 'icon',
                                mods: { std: true, 'SMP1-lev4': true }
                            }, {
                                block: 'tarif',
                                elem: 'property-desc',
                                elemMods: { info: true },
                                content: 'Безлимит звонков и SMS внутри группы'
                            }]
                        }]
                    }]
                }
            }, {
                elem: 'actions',
                content: [{
                    block: 'link',
                    url: '#',
                    target: '_blank',
                    content: 'Подробнее'
                }, {
                    block: 'button',
                    mix: { block: 'tarif', elem: 'action', js: { actionId: 'tarif-1'}},
                    type: 'button',
                    mods: { action: true },
                    text: 'Подключить'
                }]
            }]
        }]
    }]
};
