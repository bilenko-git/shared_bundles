module.exports = {
    block: 'page',
    title: '[[*pagetitle]]',
    favicon: '/favicon.ico',
    head: [
        { tag: 'base', attrs: { href: '[[!++site_url]]' } },
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'user.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'user.min.js' }],
    mods: { theme: 'islands' },
    content: [{
        block: 'layout',
        content: [{
            block: 'profile',
            content: [{
                block: 'my-tariff',
                content: [{
                    elem: 'text',
                    content: 'Вы состоите в группе пользователя'
                }, {
                    elem: 'phone',
                    content: '+37525 909 00 00'
                }, {
                    elem: 'tariff',
                    content: 'тариф Семья 3'
                }]
            }, {
                block: 'user-balance',
                content: [{
                    elem: 'text',
                    content: ['баланс:',{
                        elem: 'price',
                        content: '32,45'
                    }, {
                        elem: 'currency',
                        content: 'руб'
                    }]
                },{
                    block: 'buttons',
                    content: [{
                        block: 'button',
                        mods: { theme: 'red', size: 's'},
                        mix: { block: 'action-user',  js: { 'action': 'rechargeAccount' } },
                        text: 'Пополнить',
                    }/*, {
                        block: 'button',
                        mods: { theme: 'red', size: 's' },
                        text: 'Попросить пополнить счет'
                    }*/]
                }] 
            }, {
                block: 'user-account',
                content: [{
                    elem: 'info-and-exit',
                    content: [{
                        block: 'link-and-tooltip',
                        content: [{
                            block: 'link',
                            url: '#',
                            content: 'Все мои услуги' 
                        }, {
                            block : 'dropdown',
                            mods : { switcher : 'link', theme : 'islands', size : 'm' },
                            switcher : '',
                            popup : 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
                            mix: { block: 'tooltip', js: true },
                            js: { tooltip: 'main' }
                        }]
                    }, {
                        block: 'button',
                        cls: 'exit_account',
                        mods: { theme: 'gray', size: 's' },
                        text: 'Выход'
                    }]
                }, {
                    elem: 'exit-group',
                    content: [{
                        block: 'button',
                        cls: 'exit_goroup',
                        mods: { theme: 'red', size: 's' },
                        text: 'Выйти из группы'
                    }]
                }] 
            }]
        }, {
            block: 'user',
            content: [{
                block: 'dropdown',
                mods: { switcher: 'button', theme: 'life-light' },
                switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
                popup: {
                    block: 'menu',
                    mods: { theme: 'life-light' },
                    mix: { block: 'menu-on-page-user' },
                    content: [{
                        elem: 'item',
                        val: 'change_name',
                        mix: [
                            { block: 'action-user',  js: { 'action': 'change_name' } }
                        ],
                        content: 'Изменить имя',

                    }, {
                        elem: 'item',
                        val: 'add_photo',
                        mix: { block: 'action-user',  js: { 'action': 'rechargeAccount' } },
                        content: 'Добавить фото'
                    }, {
                        elem: 'item',
                        val: 'select_color',
                        content: 'Выбрать цвет профиля'
                    }]
                },
            }, {
                block: 'icon',
                mix: { block: 'user', elem: 'photo' },
                url: '/assets/img/user-avatar.png'
            }, {
                elem: 'inforamtion',
                content:  [{
                    elem: 'name',
                    mods: { 'hidden' : true },
                    content: '1Mоя SIM'
                }, {
                    block: 'input',
                    mix: [
                        { block : 'inforamtion', elem : 'input-phone' }
                    ],
                    mods: { theme: 'life-light', size: 'a', 'hidden' : true },
                    maxLength: '10',
                    name: 'userName',
                    autocomplete: false,
                    js: true
                }, {
                    elem: 'phone',
                    content: '+37525 909 00 00'
                }]
            }, {
                block: 'user-charts',
                js: true,
                content: [{
                    elem: 'item',
                    content: {
                        tag: 'canvas',
                        attrs: { id: 'userchart01', width: '280', height: '50' }
                    }
                }, {
                    elem: 'item',
                    content: {
                        tag: 'canvas',
                        attrs: { id: 'userchart02', width: '280', height: '50' }
                    }
                }]
            }/*, {
                block: 'button',
                cls: 'ask-min',
                mods: { theme: 'red', size: 's' },
                mix: { block: 'action-user',  js: { 'action': 'ask_minutes' } },
                text: 'Попросить мин'
            }, {
                block: 'button',
                cls: 'ask-mb',
                mods: { theme: 'red', size: 's',  },
                mix: { block: 'action-user',  js: { 'action': 'ask_mb' } },
                text: 'Попросить МБ'
            }*/]
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
                    mix: { block: 'question-main' },
                    content: '<span style="color:blue">Кто может подключить тарифный план?</span><span>Любой абонент life:), независимо от места проживания. В том числе тарифный план "Общий" доступен абонентам, которые перенесли свой номер на ife:). Исключение составляют абоненты, у которых есть обязательства. Организатор может добавить в свою группу как номера, оформленные на его паспортные данные, так и номер абонентов со своими собственными контрактами.</span>'
                }]                                   
            }]
        }, {
            block: 'products',
            content: [{
                block: 'questions-description',
                content: 'Также вы можете выбрать дополнительные услуги и устройства'
            }, {
                block: 'questions',
                content: ['APPS CLUB', 'Мелоринг', 'ItV', 'Скидки на роуминг', 'ZTE A160'].map(function(service) {
                    return {
                        elem: 'question',
                        content: [{
                            elem: 'icon',
                            content: '<img src="http://multidev.life.com.by/assets/img/question_icon.png">'
                        }, {
                            elem: 'title',
                            content: service
                        }, {
                            elem: 'desc',
                            content: 'Портал мобильных приложений для абонентов life:) неограниченная загрузка премиум-приложений и игр за фиксированную низкую плату!'
                        }, {
                            elem: 'more',
                            content: [{
                                block: 'link',
                                url: '#',
                                content: 'Все мои услуги'
                            }]
                        }]
                    }
                })
            }]  
        }]
    }]
};
