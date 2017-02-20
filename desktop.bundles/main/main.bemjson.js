module.exports = {
        block: 'page',
        title: '[[*pagetitle]]',
        favicon: '/favicon.ico',
        head: [
            { tag: 'base', attrs: { href: '[[!++site_url]]' } },
            { elem: 'meta', attrs: { name: 'description', content: '' } },
            { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
            { elem: 'css', url: 'main.min.css', attrs: { type: 'text/css' } }
        ],
        scripts: [{ elem: 'js', url: 'main.min.js' }],
        mods: { theme: 'life-light' },
        content: [{
                    block: 'layout',
                    content: {
                        elem: 'wrapper',
                        content: [{
                                block: 'header',
                                content: [{
                                    elem: 'panel',
                                    content: {
                                        block: 'toolbar',
                                        mods: { fixed: 'top' },
                                        content: [{
                                            elem: 'wrapper',
                                            content: {
                                                elem: 'groups',
                                                content: [{
                                                    elem: 'group',
                                                    content: [{
                                                        block: 'soc-links',
                                                        content: {
                                                            elem: 'wrapper',
                                                            content: [{
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { rss: true } }
                                                                        url: '/assets/img/rss.png'
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { vk: true } }
                                                                        url: '/assets/img/vk.png'
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { facebook: true } }
                                                                        url: '/assets/img/facebook.png'
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { twitter: true } }
                                                                        url: '/assets/img/twitter.png'
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { youtube: true } }
                                                                        url: '/assets/img/youtube.png'
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'icon',
                                                                        // mix: { block: 'soc-links', mods: { ok: true } }
                                                                        url: '/assets/img/ok.png'
                                                                    }
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        block: 'search-form',
                                                        js: true,
                                                        mods: { right: true },
                                                        content: {
                                                            block: 'control-group',
                                                            content: [{
                                                                block: 'input',
                                                                mix: { block: 'search-form', elem: 'input' },
                                                                placeholder: 'Поиск по сайту',
                                                            }, {
                                                                block: 'button',
                                                                mix: { mods: { search: true } },
                                                                icon: {
                                                                    block: 'icon',
                                                                    mix: { block: 'search-form', elem: 'icon', mods: { search: true } },
                                                                    url: '/assets/img/ser.png'
                                                                }
                                                            }]
                                                        }
                                                    }]
                                                }, {
                                                    elem: 'group',
                                                    elemMods: { ar: true },
                                                    content: [{
                                                        elem: 'group',
                                                        elemMods: { sep: 'both' },
                                                        content: {
                                                            block: 'control-group',
                                                            mods: { theme: 'simple-red' },
                                                            content: [{
                                                                block: 'button',
                                                                mods: { std: true },
                                                                content: 'Пополнить счет'
                                                            }, {
                                                                block: 'button',
                                                                mods: { help: true },
                                                                content: 'Помощь'
                                                            }, {
                                                                block: 'button',
                                                                mods: { std: true },
                                                                content: 'Личный кабинет'
                                                            }]
                                                        }
                                                    }, {
                                                        elem: 'group',
                                                        content: {
                                                            block: 'control-group',
                                                            mods: { theme: 'simple-red' },
                                                            content: [{
                                                                block: 'button',
                                                                mods: { help: true },
                                                                content: 'Eng'
                                                            }, {
                                                                block: 'button',
                                                                mods: { help: true },
                                                                content: 'Bel'
                                                            }]
                                                        }
                                                    }]
                                                }]
                                            }
                                        }]
                                    }
                                }, {
                                    elem: 'wrapper',
                                    content: [{
                                        block: 'logo',
                                        content: [{
                                            block: 'image',
                                            url: '/assets/img/life-logo.png'
                                        }]
                                    }, {
                                        elem: 'group',
                                        content: {
                                            elem: 'item',
                                            content: [{
                                                    block: 'tabs',
                                                    js: true,
                                                    content: [{
                                                        elem: 'links',
                                                        content: [{
                                                            elem: 'item',
                                                            elemMods: { current: true },
                                                            js: { id: 'tab1' },
                                                            content: {
                                                                block: 'link',
                                                                mods: { pseudo: true },
                                                                content: [{
                                                                    block: 'icon',
                                                                    url: '/assets/img/private_act.png',
                                                                    js: { 'cur-image': '/assets/img/private.png' }
                                                                }, {
                                                                    block: 'tabs',
                                                                    elem: 'title',
                                                                    tag: 'span',
                                                                    content: ['Частным', { tag: 'br' }, 'клиентам']
                                                                }]
                                                            }
                                                        }, {
                                                            elem: 'item',
                                                            js: { id: 'tab1' },
                                                            content: {
                                                                block: 'link',
                                                                mods: { pseudo: true },
                                                                content: [{
                                                                    block: 'icon',
                                                                    url: '/assets/img/business.png',
                                                                    js: { 'cur-image': '/assets/img/business_act.png' }
                                                                }, {
                                                                    block: 'tabs',
                                                                    elem: 'title',
                                                                    tag: 'span',
                                                                    content: ['Бизнес', { tag: 'br' }, 'клиентам']
                                                                }]
                                                            }
                                                        }]
                                                    }, {
                                                        elem: 'content',
                                                        content: {
                                                            elem: 'content-wrapper',
                                                            content: [{
                                                                    elem: 'item',
                                                                    elemMods: { content: 'current' },
                                                                    js: { id: 'tab1' },
                                                                    content: {
                                                                        block: 'c-menu',
                                                                        mods: { horiz: true },
                                                                        content: {
                                                                            block: 'menu',
                                                                            content: [{
                                                                                    elem: 'item',
                                                                                    val: 1,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'тарифы'
                                                                                    }
                                                                                }, {
                                                                                    elem: 'item',
                                                                                    val: 2,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'услуги'
                                                                                    }
                                                                                }, {
                                                                                    elem: 'item',
                                                                                    val: 3,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'интернет'
                                                                                    }
                                                                                }, {
                                                                                    elem: 'item',
                                                                                    val: 4,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'роуминг'
                                                                                    }
                                                                                }, {
                                                                                    elem: 'item',
                                                                                    val: 5,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'интернет-магазин'
                                                                                    }
                                                                                }, {
                                                                                    elem: 'item',
                                                                                    val: 6,
                                                                                    content: {
                                                                                        block: 'link',
                                                                                        mix: { block: 'tabs', elem: 'link' },
                                                                                        url: '#',
                                                                                        content: 'my life:)'
                                                                                    }
                                                                                }]
	                                                                           }}}, {
                                                                            elem: 'item',
                                                                            elemMods: { content: true },
                                                                            js: { id: 'tab2' },
                                                                            content: {
                                                                                block: 'c-menu',
                                                                                mods: { horiz: true },
                                                                                content: {
                                                                                    block: 'menu',
                                                                                    content: [
                                                                                        { elem: 'item', val: 1, content: 'тарифы' },
                                                                                        { elem: 'item', val: 1, content: 'услуги' },
                                                                                        { elem: 'item', val: 1, content: 'интернет' },
                                                                                        { elem: 'item', val: 1, content: 'роуминг' },
                                                                                        { elem: 'item', val: 1, content: 'устройства' }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }]
                                                                }
                                                            }]
                                                    }]
                                                }
                                            },
                                            {
                                                block: 'navigation',
                                                content: [{
                                                    block: 'navigation',
                                                    mods: { group: 'left' },
                                                    content: {
                                                        block: 'breadcrumbs',
                                                        content: [{
                                                            elem: 'item',
                                                            content: {
                                                                block: 'link',
                                                                url: '/',
                                                                content: 'Главная'
                                                            }
                                                        }, {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'link',
                                                                url: '/private/',
                                                                content: 'Частным клиентам'
                                                            }
                                                        }, {
                                                            elem: 'item',
                                                            elemMods: { end: true },
                                                            content: {
                                                                block: 'link',
                                                                mods: { pseudo: true },
                                                                content: 'Тарифы'
                                                            }
                                                        }]
                                                    }
                                                }, {
                                                    block: 'navigation',
                                                    mods: { group: 'right' },
                                                    content: {
                                                        block: 'button',
                                                        type: 'link',
                                                        mods: { back: true },
                                                        icon: {
                                                            block: 'icon',
                                                            url: '/assets/img/back__1.png'
                                                        },
                                                        text: 'Назад'
                                                    }
                                                }]
                                            }]
                                    }]
                                }, {
                                    block: 'content',
                                    content: [{
                                        block: 'button-line',
                                        content: [{
                                            elem: 'group',
                                            elemMods: { right: true },
                                            content: [{
                                                block: 'control-group',
                                                content: [{
                                                    block: 'button',
                                                    type: 'link',
                                                    mods: { link: true },
                                                    text: ['Перейти к управлению']
                                                }, {
                                                    block: 'button',
                                                    type: 'link',
                                                    mods: { 'icon-only': true },
                                                    icon: {
                                                        block: 'icon',
                                                        url: '/assets/img/question.png'
                                                    }
                                                }]
                                            }]
                                        }]
                                    }, {
                                        block: 'banner',
                                        content: [{
                                            elem: 'head',
                                            content: [{
                                                elem: 'head',
                                                tag: 'span',
                                                elemMods: { strong: true },
                                                content: ['Тарифы Семья.&nbsp;']
                                            }, {
                                                elem: 'head',
                                                tag: 'span',
                                                elemMods: { light: true },
                                                content: 'Все на связи!'
                                            }],
                                        }, {
                                            elem: 'text',
                                            content: [{
                                                tag: 'p',
                                                content: 'Подключайте один тарифный план &ndash; и распределяйте интернет и минуты из него'
                                            }, {
                                                tag: 'p',
                                                content: 'на несколько SIM-карт. Добавляйте родных, близких, друзей или устройства.'
                                            }, {
                                                tag: 'p',
                                                content: 'Платите одну абонентскую плату &ndash; пользуетесь вместе'
                                            }]
                                        }, {
                                            elem: 'image',
                                            content: {
                                                block: 'image',
                                                url: '/assets/img/banner.png'
                                            }
                                        }]
                                    }, {
                                        block: 'tarif-line',
                                        content: [{
                                            elem: 'item',
                                            content: {
                                                block: 'tarif',
                                                mods: { view: 'action' },
                                                content: [{
                                                    elem: 'wrapper',
                                                    content: [{
                                                        elem: 'head',
                                                        content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'image',
                                                                url: '/assets/img/family_1.png',
                                                            }
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_wallet.png',
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_phone.png',
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_network.png'
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
                                                                        mods: { smile: true },
                                                                        url: '/assets/img/icon_smile.png'
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_unlim.png'
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
                                                            type: 'button',
                                                            mods: { action: true },
                                                            text: 'Подключить'
                                                        }]
                                                    }]
                                                }]
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'tarif',
                                                mods: { view: 'action' },
                                                content: [{
                                                    elem: 'wrapper',
                                                    content: [{
                                                        elem: 'head',
                                                        content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'image',
                                                                url: '/assets/img/family_2.png',
                                                            }
                                                        }, {
                                                            elem: 'head-desc',
                                                            content: 'Семья 2'
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_wallet.png',
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        content: [{
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { price: true },
                                                                            content: '24,90'
                                                                        }, {
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { curr: true },
                                                                            content: 'руб/мес'
                                                                        }, ]
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_phone.png',
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_network.png'
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
                                                                        mods: { smile: true },
                                                                        url: '/assets/img/icon_smile.png'
                                                                    }]
                                                                }]
                                                            }, {
                                                                elem: 'item',
                                                                val: 3,
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_unlim.png'
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        elemMods: { info: true },
                                                                        content: 'Безлимит звонков и SMS внутри группы'
                                                                    }]
                                                                }
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
                                                            type: 'button',
                                                            mods: { action: true },
                                                            text: 'Подключить'
                                                        }]
                                                    }]
                                                }]
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'tarif',
                                                mods: { view: 'action' },
                                                content: [{
                                                    elem: 'wrapper',
                                                    content: [{
                                                        elem: 'head',
                                                        content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'image',
                                                                url: '/assets/img/family_3.png',
                                                            }
                                                        }, {
                                                            elem: 'head-desc',
                                                            content: 'Семья 3'
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_wallet.png',
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        content: [{
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { price: true },
                                                                            content: '34,90'
                                                                        }, {
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { curr: true },
                                                                            content: 'руб/мес'
                                                                        }, ]
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_phone.png',
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_network.png'
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
                                                                        mods: { smile: true },
                                                                        url: '/assets/img/icon_smile.png'
                                                                    }]
                                                                }]
                                                            }, {
                                                                elem: 'item',
                                                                val: 3,
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_unlim.png'
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        elemMods: { info: true },
                                                                        content: 'Безлимит звонков и SMS внутри группы'
                                                                    }]
                                                                }
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
                                                            type: 'button',
                                                            mods: { action: true },
                                                            text: 'Подключить'
                                                        }]
                                                    }]
                                                }]
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'tarif',
                                                mods: { view: 'highlight' },
                                                content: [{
                                                    elem: 'wrapper',
                                                    content: [{
                                                        elem: 'head',
                                                        content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'image',
                                                                url: '/assets/img/family_4.png',
                                                            }
                                                        }, {
                                                            elem: 'head-desc',
                                                            content: 'Мультинет'
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_wallet_alt.png',
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        content: [{
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { price: true },
                                                                            content: '24,90'
                                                                        }, {
                                                                            block: 'tarif',
                                                                            elem: 'property-desc',
                                                                            elemMods: { curr: true },
                                                                            content: 'руб/мес'
                                                                        }, ]
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_phone_alt.png',
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
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_network_alt.png'
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
                                                                        mods: { smile: true },
                                                                        url: '/assets/img/icon_smile.png'
                                                                    }]
                                                                }]
                                                            }, {
                                                                elem: 'item',
                                                                val: 3,
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true },
                                                                        url: '/assets/img/icon_unlim_alt.png'
                                                                    }, {
                                                                        block: 'tarif',
                                                                        elem: 'property-desc',
                                                                        elemMods: { info: true },
                                                                        content: 'Безлимит звонков и SMS внутри группы'
                                                                    }]
                                                                }
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
                                                            type: 'button',
                                                            mods: { action: true },
                                                            text: 'Подключить'
                                                        }]
                                                    }]
                                                }]
                                            }
                                        }]
                                    }, {
                                        block: 'content-block',
                                        content: [{
                                            elem: 'text',
                                            tag: 'span',
                                            content: [
                                                'Управление трафиком в мобильном приложении', {
                                                    tag: 'span',
                                                    cls: 'red-link',
                                                    content: 'Smart Life:)'
                                                }
                                            ]
                                        }, {
                                            elem: 'links',
                                            tag: 'span',
                                            content: [{
                                                block: 'link',
                                                url: '#',
                                                content: {
                                                    block: 'image',
                                                    url: '/assets/img/google_play.png'
                                                }
                                            }, {
                                                block: 'link',
                                                url: '#',
                                                content: {
                                                    block: 'image',
                                                    url: '/assets/img/apple_store.png'
                                                }
                                            }]
                                        }]
                                    }, {
                                        block: 'content-block',
                                        content: [{
                                            elem: 'heading',
                                            content: 'Как работают тарифные планы &laquo;Семья&raquo;'
                                        }, {
                                            block: 'media-wrapper',
                                            content: {
                                                elem: 'video',
                                                content: {
                                                    block: 'image',
                                                    url: '/assets/img/video-embed.png'
                                                }
                                            }
                                        }]
                                    }, {
                                        block: 'pc-block',
                                        js: true,
                                        content: {
                                            elem: 'wrapper',
                                            content: [{
                                                elem: 'head-info',
                                                elemMods: { closed: true },
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
                                                    content: 'Часто задаваемые вопросы'
                                                }]
                                            }]
                                        }
                                    }]
                                }, {
                                    block: 'footer',
                                    content: [{
                                        elem: 'top-line',
                                        content: [{
                                            elem: 'contacts',
                                            content: [
                                                'Связаться с нами: ', {
                                                    tag: 'span',
                                                    elem: 'contacts',
                                                    elemMods: { red: true },
                                                    content: '909'
                                                },
                                                'или ', {
                                                    tag: 'span',
                                                    elem: 'contacts',
                                                    elemMods: { red: true },
                                                    content: '920'
                                                },
                                                'круглосуточно и бесплатно в сети life:)'
                                            ]
                                        }, {
                                            elem: 'hotlinks',
                                            content: [{
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'hotlink' },
                                                url: '#',
                                                target: '_blank',
                                                content: 'USSD'
                                            }, {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'hotlink' },
                                                url: '#',
                                                target: '_blank',
                                                content: 'Договор'
                                            }, {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'hotlink' },
                                                url: '#',
                                                target: '_blank',
                                                content: 'Как оплатить'
                                            }, {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'hotlink' },
                                                url: '#',
                                                target: '_blank',
                                                content: {
                                                    block: 'image',
                                                    url: '/assets/img/_online_index.png'
                                                }
                                            }]
                                        }]
                                    }, {
                                        block: 'menu',
                                        mix: { block: 'footer', elem: 'menu' },
                                        content: [{
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'о нас'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'пресса'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'новости'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'карьера'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'покрытие'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'салоны'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'контакты'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'sms'
                                            }
                                        }, {
                                            block: 'footer',
                                            elem: 'sep',
                                            content: ''
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'сотрудничество'
                                            }
                                        }]
                                    }, {
                                        elem: 'copyright',
                                        content: '© 2004-2017 life:) ЗАО "БеСТ", ул. Красноармейская, 24, 220030, г. Минск, УНП 190579561, Лицензия Министерства связи и информатизации РБ №02140/1315, срок действия не ограничен'
                                    }]
                                }]
                            }
                        }]
                };
