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
                    }, {
                        block: 'button',
                        mods: { theme: 'red', size: 's' },
                        text: 'Попросить пополнить счет'
                    }]
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
                    content: [
                        { elem: 'item', val: 'change_name', content: 'Изменить имя' },
                        { elem: 'item', val: 'add_photo', content: 'Добавить фото' },
                        { elem: 'item', val: 'select_color', content: 'Выбрать цвет профиля' },
                    ]
                },
            }, {
                block: 'icon',
                mix: { block: 'user', elem: 'photo' },
                url: '/assets/img/user-avatar.png'
            }, {
                elem: 'inforamtion',
                content:  [{
                    elem: 'name',
                    content: 'Mоя SIM'
                }, {
                    elem: 'phone',
                    content: '+37525 909 00 00'
                }]
            }, {
                elem: 'slider'
            }, {
                elem: 'slider'
            }, {
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
                    block: 'questions-description',
                    content: 'Также вы можете выбрать дополнительные услуги и устройства'
                }, {
                    block: 'questions',
                    content: ['APPS CLUB', 'Мелоринг', 'ItV', 'Скидки на роуминг'].map(function(service) {
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
    }]
};
