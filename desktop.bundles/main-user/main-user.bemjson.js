module.exports = {
    block: 'page',
    title: '[[*pagetitle]]',
    favicon: '/favicon.ico',
    head: [
        { tag: 'base', attrs: { href: '[[!++site_url]]' } },
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'main-user.min.css', attrs: { type: 'text/css' } }
    ],
    scripts: [{ elem: 'js', url: 'main-user.min.js' }],
    mods: { theme: 'life-light' },
    content: [{
        block: 'layout',
        content: [{
            block: 'header',
            content: [{
                block: 'panel',
                js: true,
                mods: { closed: true },
                content: {
                    elem: 'wrapper',
                    content: {
                        elem: 'content',
                        content: [{
                            elem: 'group',
                            content: {
                                block: 'balance',
                                content: [{
                                    elem: 'title',
                                    content: 'баланс'
                                }, {
                                    elem: 'info',
                                    content: [{
                                        elem: 'info-icon',
                                        content: {
                                            block: 'icon',
                                            url: '/assets/img/icon_wallet_alt.png'
                                        }
                                    }, {
                                        elem: 'info-value',
                                        content: [
                                            '32,45', {
                                                elem: 'info-desc',
                                                content: 'руб'
                                            }
                                        ]
                                    }]
                                }]
                            }
                        }, {
                            elem: 'group',
                            content: [{
                                block: 'balance',
                                content: [{
                                    elem: 'title',
                                    content: 'общий остаток трафика'
                                }, {
                                    elem: 'info',
                                    content: [{
                                        elem: 'info-icon',
                                        content: {
                                            block: 'icon',
                                            url: '/assets/img/icon_phone_alt.png'
                                        }
                                    }, {
                                        elem: 'info-value',
                                        content: [
                                            '1 000', {
                                                elem: 'info-desc',
                                                content: 'мин'
                                            }
                                        ]
                                    }, {
                                        elem: 'info',
                                        content: [{
                                            elem: 'info-icon',
                                            content: {
                                                block: 'icon',
                                                url: '/assets/img/icon_network_alt.png'
                                            }
                                        }, {
                                            elem: 'info-value',
                                            content: [
                                                '9 000', {
                                                    elem: 'info-desc',
                                                    content: 'МБ'
                                                }
                                            ]
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'group',
                            content: {
                                block: 'c-chart',
                                js: true,
                                content: [{
                                    elem: 'item',
                                    content: {
                                        tag: 'canvas',
                                        attrs: { id: 'chartMin98', width: '280', height: '50' }
                                    }
                                }, {
                                    elem: 'item',
                                    content: {
                                        tag: 'canvas',
                                        attrs: { id: 'chartMin99', width: '280', height: '50' }
                                    }
                                }]
                            }
                        }]
                    }
                }
            }]
        }, {
            block: 'content',
            js: true,
            content: [{
                block: 'c-info',
                content: [{
                    elem: 'group',
                    content: {
                        block: 'c-tarif',
                        content: [{
                            elem: 'group',
                            content: [{
                                block: 'balance',
                                mods: { view: 'c-tarif' },
                                content: [{
                                    elem: 'title',
                                    content: 'тариф'
                                }, {
                                    elem: 'info',
                                    content: [{
                                        elem: 'info-value',
                                        content: ['семья']
                                    }]
                                }]
                            }, {
                                block: 'balance',
                                mods: { view: 'c-tarif' },
                                content: [{
                                    elem: 'title',
                                    content: 'платеж в месяц'
                                }, {
                                    elem: 'info',
                                    content: [{
                                        elem: 'info-value',
                                        content: ['35,90 руб']
                                    }]
                                }]
                            }]
                        }, {
                            elem: 'group',
                            content: [{
                                elem: 'info',
                                content: [{
                                    elem: 'info-title',
                                    content: 'в тариф входит'
                                }, {
                                    elem: 'info-list',
                                    tag: 'ul',
                                    content: ['1200 мин', '12 ГБ', 'Безлимит для BiP, Viber, WhatsApp', 'Безлимит звонков и SMS внутри группы'].map(function(item) {
                                        return {
                                            elem: 'info-item',
                                            tag: 'li',
                                            content: item
                                        };
                                    })
                                }]
                            }]
                        }]
                    }
                }, {
                    elem: 'group',
                    content: {
                        block: 'c-balance',
                        content: [{
                            block: 'balance',
                            content: [{
                                elem: 'title',
                                content: 'баланс'
                            }, {
                                elem: 'info',
                                content: [{
                                    elem: 'info-value',
                                    mix: { block: 'c-balance', elem: 'info-value' },
                                    content: [
                                        '32,45', {
                                            elem: 'info-desc',
                                            content: 'руб'
                                        }
                                    ]
                                }]
                            }, {
                                block: 'button',
                                mods: { view: 'main' },
                                mix: { block: 'c-balance', elem: 'button' },
                                content: 'Пополнить'
                            }]
                        }, {
                            elem: 'info',
                            content: [{
                                elem: 'info-text',
                                content: 'Абонентская плата списывается 1 числа. Ваш баланс должен составлять не менее 35,90 руб, чтобы трафик по тарифу был начислен на следующий месяц.'
                            }, {
                                block: 'button',
                                mods: { 'icon-only': true },
                                content: {
                                    block: 'icon',
                                    mods: { 'tooltip': true }
                                }
                            }]
                        }]
                    }
                }, {
                    elem: 'group',
                    content: {
                        elem: 'actions',
                        content: [{
                            block: 'c-info',
                            elem: 'action-group',
                            content: [{
                                block: 'link',
                                mix: { block: 'c-info', elem: 'action-link' },
                                url: '#',
                                content: ['Все мои услуги', {
                                    block: 'button',
                                    mods: { 'icon-only': true },
                                    content: {
                                        block: 'icon',
                                        mods: { 'tooltip': true }
                                    }
                                }]
                            }, {
                                block: 'link',
                                mix: { block: 'c-info', elem: 'action-link' },
                                url: '#',
                                content: ['Сменить тариф', {
                                    block: 'button',
                                    mods: { 'icon-only': true },
                                    content: {
                                        block: 'icon',
                                        mods: { 'tooltip': true }
                                    }
                                }]
                            }, {
                                block: 'link',
                                mix: { block: 'c-info', elem: 'action-text' },
                                mods: { pseudo: true },
                                content: '1 уведомление'
                            }, {
                                block: 'button',
                                mods: {
                                    view: 'logout'
                                },
                                text: 'Выход'
                            }]
                        }]
                    }
                }]
            }, {
                block: 'actions',
                content: [{
                    elem: 'group',
                    content: {
                        block: 'button',
                        mix: { block: 'actions', elem: 'button' },
                        mods: { view: 'main' },
                        type: 'submit',
                        text: 'Докупить мин/Мб'
                    }
                }, {
                    elem: 'group',
                    content: [{
                        block: 'c-chart',
                        content: {
                            elem: 'item',
                            elemMods: { view: 'simple' },
                            content: {
                                tag: 'canvas',
                                attrs: { id: 'chartMin100', width: '280', height: '50' }
                            }
                        }
                    }, {
                        block: 'c-chart',
                        content: {
                            elem: 'item',
                            elemMods: { view: 'simple' },
                            content: {
                                tag: 'canvas',
                                attrs: { id: 'chartMin101', width: '280', height: '50' }
                            }
                        }
                    }]
                }]
            }, {
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
                                elem: 'name',
                                content: 'Моя SIM',
                            }, {
                                elem: 'phone',
                                content: '+37525 909 00 00'
                            }]
                        }]
                    }] 
                }, {
                    elem: 'group',
                    content: [{
                        elem: 'info',
                        content: [{
                            elem: 'info',
                            elemMods: { text: true },
                            content: [{
                                block: 'icon',
                                mix: { block: 'actions', elem: 'icon' },
                                url: '/assets/img/icon_warning.png'
                            },'Все минуты и мегабайты начислены вам. Вы можете распределить их между пользователями тарифа']
                        }]
                    }, {
                        block: 'c-chart',
                        content: {
                            elem: 'item',
                            elemMods: { view: 'simple' },
                            content: {
                                tag: 'canvas',
                                attrs: { id: 'chartMin102', width: '280', height: '50' }
                            }
                        }
                    }, {
                        block: 'c-chart',
                        content: {
                            elem: 'item',
                            elemMods: { view: 'simple' },
                            content: {
                                tag: 'canvas',
                                attrs: { id: 'chartMin103', width: '280', height: '50' }
                            }
                        }
                    }]
                }]
            }, {
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
            }, {
                block: 'actions',
                mods: { view: 'simple' },
                content: {
                    elem: 'group',
                    content: {
                        block: 'button',
                        mods: { view: 'add' },
                        icon: {
                            block: 'icon',
                            url: '/assets/img/icon_cross.png',
                        },
                        text: 'Добавить еще пользователей'
                    }
                }
            }, {
                block: 'pc-block',
                js: true,
                content: {
                    elem: 'wrapper',
                    content: [{
                        elem: 'head-info',
                        elemMods: { closed: true, size: 's'},
                        content: {
                            elem: 'hi-group',
                            content: [{
                                elem: 'hi-text',
                                content: [{
                                    block: 'pc-block',
                                    elem: 'hi-text',
                                    elemMods: { cover: true },
                                    tag: 'i',
                                    content: ''
                                }, 'Часто задаваемые вопросы']
                            }, {
                                elem: 'hi-group',
                                elemMods: { controls: 'right' },
                                content: {
                                    block: 'button',
                                    mix: { block: 'pc-block', elem: 'button', elemMods: { toggle: 'closed' } },
                                    content: {
                                        block: 'icon',
                                        content: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>'
                                    }
                                }
                            }]
                        }
                    }, {
                        elem: 'content',
                        elemMods: { closed: true },
                        content: [{
                            elem: 'content',
                            elemMods: { info: true },
                            content: [{
                                block: 'product-list',
                                mods: { size: 5 },
                                content: [{
                                    elem: 'title',
                                    content: 'Также вы можете выбрать дополнительные услуги и устройства:'
                                }, {
                                    elem: 'content',
                                    content:[{
                                        block: 'menu',
                                        content: [{
                                    icon_src: '/assets/img/prod_image_life.png',
                                    title: 'APPS CLUB',
                                    desc: 'Портал мобильных приложений для абонентов life:) &ndash; неограниченная загрузка премиум-приложений и игр за фиксированную низкую плату!'
                                }, {
                                    icon_src: '/assets/img/prod_image_melo.png',
                                    title: 'Мелоринг',
                                    desc: 'ПРевратите скучные гудки в любимую музыку'
                                }, {
                                    icon_src: '/assets/img/prod_image_apps.png',
                                    title: 'iTV',
                                    desc: 'Смотри любимые каналы всегда и везде'
                                }, {
                                    icon_src: '/assets/img/prod_image_roam.png',
                                    title: 'Скидки на роуминг',
                                    desc: 'Роуминг еще выгоднее! Скидки на входящие в роуминге в России, Украине, Польше...'
                                }, {
                                    icon_src: '/assets/img/prod_image_phone.png',
                                    title: 'ZTE A610',
                                    desc: 'Роуминг еще выгоднее! Скидки на входящие в роуминге в России, Украине, Польше...'
                                }].map(function(item) {
                                    return {
                                        elem: 'item',
                                        mix: { block: 'product-list', elem: 'item' },
                                        content:{
                                            block: 'product',
                                            content: [{
                                                elem: 'icon',
                                                content: {
                                                    block: 'image',
                                                    url: item.icon_src
                                                }
                                            }, {
                                                elem: 'title',
                                                content: item.title,
                                            }, {
                                                elem: 'desc',
                                                content: item.desc
                                            }, {
                                                elem: 'more',
                                                content: {
                                                    block: 'link',
                                                    url: '#',
                                                    content: ['Подробнее >']
                                                }
                                            }]
                                        } 
                                    }
                                })
                                }]
                            }]
                        }]
                        }]
                    }]
                }
            }] 
        }/*, {
            block: 'footer',
            content: 'footer'
        }*/]
    }]
};
