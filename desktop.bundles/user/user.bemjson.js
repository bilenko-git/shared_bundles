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
                elem: 'information',
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
                elem: 'balans',
                content: [{
                    elem: 'text',
                    content: ['баланс:',{
                        elem: 'price',
                        content: '32,45'
                    }, {
                        elem: 'currency',
                        content: 'руб.'
                    }]
                },{
                    block: 'button',
                    mods: { theme: 'red', size: 's' },
                    text: 'Пополнить'
                },{
                    block: 'button',
                    mods: { theme: 'red', size: 's' },
                    text: 'Попросить пополнить счет'
                }] 
            }, {
                elem: 'account',
                content: [{
                    block: 'link',
                    url: '#',
                    content: 'Все мои услуги'
                }, {
                    elem: 'tooltip',
                    content: '?'
                }, {
                    block: 'button',
                    cls: 'exit_account',
                    mods: { theme: 'gray', size: 's' },
                    text: 'Выход'
                }, {
                    block: 'button',
                    cls: 'exit_goroup',
                    mods: { theme: 'red', size: 's' },
                    text: 'Выйти из группы'
                }] 
            }]
        }, {
            block: 'sep',
            mods: { horizontal: true },
        }, {
            block: 'user',
            content: [{
                elem: 'settings-button',
                content: ['<svg width="29" height="29" viewBox="0 0 29 29" class="btn"><g transform="scale(0.03125 0.03125)"><path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path></g></svg>',{
                    tag: 'ul',
                    elem: 'menu',
                    content:  [{
                        tag: 'li',
                        content: 'Изменить имя'
                    }, {
                        tag: 'li',
                        content: 'Добавить фото'
                    }, {
                        tag: 'li',
                        content: 'Выбрать цвет профиля'
                    }]
                }]
            }, {
                elem: 'photo',
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
                text: 'Попросить пополнить счет'
            }, {
                block: 'button',
                cls: 'ask-mb',
                mods: { theme: 'red', size: 's',  },
                text: 'Попросить МБ'
            }]
        }, {
            block: 'toggle-block',
            js: true,
            content: [{
                elem: 'head',
                content: [{
                    elem: 'title',
                    content: 'Часто задаваемые вопросы'
                }, {
                    elem: 'button',
                    content:  '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path></svg>'
                }]
            }, {
                elem: 'content',
                content: [{
                    elem: 'description',
                    content: 'Также вы можете выбрать дополнительные услуги и устройства'
                }, {
                    elem: 'questions',
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
