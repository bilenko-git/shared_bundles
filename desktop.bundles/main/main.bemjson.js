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
                                                                        block: 'soc-link',
                                                                        mods: { rss: true }
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'soc-link',
                                                                        mods: { vk: true }
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'soc-link',
                                                                        mods: { facebook: true }
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'soc-link',
                                                                        mods: { twitter: true }
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'soc-link',
                                                                        mods: { youtube: true }
                                                                    }
                                                                }
                                                            }, {
                                                                elem: 'item',
                                                                content: {
                                                                    block: 'link',
                                                                    content: {
                                                                        block: 'soc-link',
                                                                        mods: { ok: true }
                                                                    }
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        block: 'search-form',
                                                        js: true,
                                                        tag: 'form',
                                                        attrs: { id: 'search-form', action: 'http://life.com.by/private/search' },
                                                        mods: { right: true },
                                                        content: {
                                                            block: 'control-group',
                                                            content: [{
                                                                block: 'input',
                                                                name: 'term',
                                                                attrs: { onfocus: "if(this.value !== .'') {this.value='';}" },
                                                                mix: { block: 'search-form', elem: 'input' },
                                                                placeholder: 'Поиск по сайту',
                                                            }, {
                                                                block: 'button',
                                                                mix: { mods: { search: true, type: 'submit' } },
                                                                attrs: { onclick: 'document.querySelector("#search-form").submit()' }
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
                                                                mods: { type: 'link', std: true },
                                                                text: 'Пополнить счет'
                                                            }, {
                                                                block: 'button',
                                                                mods: { type: 'link', 'std-help': true },
                                                                text: 'Помощь'
                                                            }, {
                                                                block: 'button',
                                                                mods: { type: 'link', std: true },
                                                                text: 'Личный кабинет'
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
                                                                text: 'Eng'
                                                            }, {
                                                                block: 'button',
                                                                mods: { help: true },
                                                                text: 'Bel'
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
                                        block: 'link',
                                        url: '/',
                                        mix: { block: 'logo' }
                                    }, {
                                        elem: 'group',
                                        content: {
                                            elem: 'item',
                                            content: [{
                                                    block: 'tabs',
                                                    // js: true,
                                                    content: [{
                                                        elem: 'links',
                                                        content: [{
                                                            block: 'link',
                                                            mix: { block: 'tabs', elem: 'item', elemMods: { current: true } },
                                                            url: '#',
                                                            content: [{
                                                                    block: 'tabs',
                                                                    elem: 'private-client'
                                                                }, {
                                                                    block: 'tabs',
                                                                    elem: 'title',
                                                                    tag: 'span',
                                                                    content: ['Частным', { tag: 'br' }, 'клиентам']
                                                                }]
                                                        }, {
                                                            block: 'link',
                                                            mix: { block: 'tabs', elem: 'item' },
                                                            url: '#',
                                                            content: [{
                                                                block: 'tabs',
                                                                elem: 'business-client'
                                                            }, {
                                                                block: 'tabs',
                                                                elem: 'title',
                                                                tag: 'span',
                                                                content: ['Бизнес', { tag: 'br' }, 'клиентам']
                                                            }]
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
                                                                    }
                                                                }
                                                            } /*,{
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
                                                                        }*/]
                                                                }
                                                            }]
                                                    }]
                                                }
                                            }, {
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
                                                block: 'button',
                                                mods: { link: true },
                                                content: 'Перейти к управлению'
                                            }, {
                                                block : 'dropdown',
                                                mods : { switcher : 'link', theme : 'islands', size : 'm' },
                                                switcher : '',
                                                popup : 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
                                                mix: { block: 'tooltip', js: true },
                                                js: { tooltip: 'main' }
                         
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
                                                            mix: { block: 'action-main',  js: { 'action': 'tiriff', 'actionParams': { 'method' : 'toPlugSMP1' }}},
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
                                                            cls: 'icon-SMP2'
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
                                                                        mods: { std: true, 'SMP2-lev1': true }
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
                                                                        mods: { std: true, 'SMP2-lev2': true}
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
                                                                        mods: { std: true, 'SMP2-lev3': true }
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
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true, 'SMP2-lev4': true }
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
                                                            mix: { block: 'action-main',  js: { 'action': 'tiriff', 'actionParams': { 'method' : 'toPlugSMP2'}}},
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
                                                            cls: 'icon-SMP3'
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
                                                                        mods: { std: true, 'SMP3-lev1': true }
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
                                                                        mods: { std: true, 'SMP3-lev2': true}
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
                                                                        mods: { std: true, 'SMP3-lev3': true }
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
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true, 'SMP3-lev4': true }
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
                                                            mix: { block: 'action-main',  js: { 'action': 'tiriff', 'actionParams' : { 'method' : 'toPlugSMP3' }}},
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
                                                            cls: 'icon-SMPN'
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
                                                                        mods: { std: true, 'SMPN-lev1': true }
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
                                                                        mods: { std: true, 'SMPN-lev2': true }
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
                                                                        mods: { std: true, 'SMPN-lev3': true }
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
                                                                content: {
                                                                    block: 'tarif',
                                                                    elem: 'property',
                                                                    content: [{
                                                                        block: 'icon',
                                                                        mods: { std: true, 'SMPN-lev4': true }
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
                                                            mix: { block: 'action-main',  js: { 'action': 'tiriff', 'actionParams': { 'method': 'toPlugSMPN' }}},
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
                                        content: [{
                                            elem: 'head',
                                            content: [{
                                                elem: 'title',
                                                content: 'Часто задаваемые вопросы' 
                                            }, {
                                                elem: 'svg',
                                                tag: 'svg',
                                                content: '<path fill="#ffffff" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>'
                                            }]
                                        }, {
                                            elem: 'content',
                                            content: [{
                                                 elem: 'content-text',
                                                 content: '<span style="color:blue">Кто может подключить тарифный план?</span><span>Любой абонент life:), независимо от места проживания. В том числе тарифный план "Общий" доступен абонентам, которые перенесли свой номер на ife:). Исключение составляют абоненты, у которых есть обязательства. Организатор может добавить в свою группу как номера, оформленные на его паспортные данные, так и номер абонентов со своими собственными контрактами.</span>'
                                            }]                                        
                                        }]
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
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'пресса'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'новости'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'карьера'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'покрытие'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'салоны'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'контакты'
                                            }
                                        }, {
                                            elem: 'item',
                                            content: {
                                                block: 'link',
                                                mix: { block: 'footer', elem: 'link' },
                                                url: '#',
                                                content: 'sms'
                                            }
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