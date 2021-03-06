module.exports = {
	block: 'page',
	mix: [{ block: 'core', js: true }],
	title: '[[*pagetitle]]',
	favicon: '/favicon.ico',
	head: [
		{ tag: 'base', attrs: { href: '[[!++site_url]]' } },
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'main-user.min.css', attrs: { type: 'text/css' } }
	],
	scripts: [{ elem: 'js', url: 'main-user.min.js' }],
	mods: { theme: 'islands' },
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
										mix: [{
											block: 'icon',
											mods: { std: true, 'SMPN-lev1': true }
										}]
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
										mix: [{
											block: 'icon',
											mods: { std: true, 'SMPN-lev2': true }
										}]
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
											mix: [{
												block: 'icon',
												mods: { std: true, 'SMPN-lev3': true }
											}]
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
								mix: [{ block: 'action-main-user', js: { action: 'fillBalance' } }, { block: 'c-balance', elem: 'button' }],
								content: 'Пополнить'
							}]
						}, {
							elem: 'info',
							content: [{
								elem: 'info-text',
								content: 'Ваш баланс должен составлять не менее 35,90 руб, чтобы трафик по тарифу был начислен на следующий месяц.'
							}, {
								block: 'dropdown',
								mods: { switcher: 'button', theme: 'islands', 'tooltipM': true },
								switcher: { block: 'button', mods: { 'icon-only': true, view: 'plain' }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
								popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
								mix: { block: 'tooltip', js: true },
								js: { tooltip: 'TXT-05' }
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
								elem: 'line',
								content: [{
									block: 'link',
									js: true,
									mix: [{ block: 'action-main-user', js: { action: 'redirect', actionParams: {}} }, { block: 'c-info', elem: 'action-link' }],
									url: 'https://issa.life.com.by',
									content: ['Все мои услуги']
								}, {
									block: 'dropdown',
									mods: { switcher: 'button', theme: 'islands','tooltipM': true },
									switcher: { block: 'button', mods: { 'icon-only': true, view: 'plain' }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
									popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
									mix: { block: 'tooltip', js: true },
									js: { tooltip: 'TXT-06' }
								}]
							}, {
								block: 'link',
								mods: { pseudo: true },
								mix: [{ block: 'action-main-user', js: { action: 'changeTarifModal', actionParams: {}} }, { block: 'c-info', elem: 'action-link' }],
								url: '#',
								content: ['Сменить тариф'/*, {
									block: 'dropdown',
									mods: { switcher: 'button', theme: 'islands' },
									switcher: { block: 'button', mods: { 'icon-only': true, view: 'plain' }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
									popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
									mix: { block: 'tooltip', js: true },
									js: { tooltip: 'main' }
								}*/]
							}, {
								block: 'c-info',
								elem: 'action-text',
								elemMods: { hidden: true },
								content: '1 уведомление'
							}, {
								block: 'button',
								mix: { block: 'action-main-user', js: { action: 'userLogout', actionParams: { redirectUrl: 'http://multidev.life.com.by' } } },
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
						mix: [{ block: 'action-main-user', js: { action: 'buyMore', actionParams: { } } }, { block: 'actions', elem: 'button' }],
						mods: { view: 'main' },
						type: 'submit',
						text: 'Докупить мин/Мб'
					}
				}, {
					elem: 'group',
					content: [{
						block: 'c-chart',
						// content: {
						// 	// elem: 'item',
						// 	// elemMods: { view: 'simple' },
						// }
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
				innerMods: { 'w-sep': 'bottom' },
				content: [{
					elem: 'group',
					content: [{
						block: 'userinfo',
						content: [{
							block: 'dropdown',
							mods: { switcher: 'button', theme: 'life-light' },
							switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
							popup: {
								block: 'menu',
								mix: { block: 'userinfo', elem: 'menu' },
								mods: { theme: 'life-light' },
								content: [
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'changeUserName', actionParams: { userId: 'main' } } }, val: '1', content: 'Изменить имя' },
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'addUserPhoto', actionParams: { userId: 'main' } } }, val: '1', content: 'Добавить фото' },
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'changeProfileColor', actionParams: { userId: 'main' } } },val: '1', content: 'Выбрать цвет профиля' }]
							},
						}, {
							block: 'icon',
							mix: { block: 'userinfo', elem: 'avatar' },
							url: '/assets/img/user-avatar.png'
						}, {
							elem: 'group',
							content: [{
								elem: 'name',
								elemMods: { color: 'main' },
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
							block: 'icon',
							mods: { 'tooltip-small': 'warning' }
						}, {
							elem: 'info',
							elemMods: { text: true },
							content: ['Все минуты и мегабайты начислены вам. Вы можете распределить их между пользователями тарифа']
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
				innerMods: { 'w-sep': 'bottom' },
				content: [{
					elem: 'group',
					content: [{
						block: 'userinfo',
						content: [{
							block: 'dropdown',
							mods: { switcher: 'button', theme: 'life-light' },
							switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
							popup: {
								block: 'menu',
								mix: { block: 'userinfo', elem: 'menu' },
								mods: { theme: 'life-light', focused: false, mode: 'radio-check' },
								content: [
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'changeUserName', actionParams: { userId: 'user-1' } } }, val: '1', content: 'Изменить имя' },
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'addUserPhoto', actionParams: { userId: 'user-1' } } }, val: '1', content: 'Добавить фото' },
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'changeProfileColor', actionParams: { userId: 'user-1' } } }, val: '1', content: 'Выбрать цвет профиля' },
									{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'deleteUser', actionParams: { userId: 'user-1' } } }, val: '1', content: 'Удалить пользователя' },
									{ elem: 'item', val: '1', mix: { block: 'action-main-user', js: { action: 'setMenuCheckBoxVal', actionParams: { userId: 'user-2' } } }, val: '1', content: [{
										block: 'checkbox',
										mods: {
											theme: 'shared',
											// theme: 'islands',
											size: 'l'
											// type: 'button',
											// view: 'plain'
										},
										icon: {
											block: 'icon',
											mods: { type: 'checkbox' }
										},
										name: 'need_send',
										val: '1',
										text: [{
												tag: 'span',
												cls: 'checkbox-line',
												content: 'Получать уведомление'
											}, {
												tag: 'span',
												cls: 'checkbox-line',
												content: 'об окончании мин/Мб'
											}]
										}]
									},
								]
							},
						}, {
							block: 'icon',
							mix: { block: 'userinfo', elem: 'avatar' },
							url: '/assets/img/user-avatar_1.png'
						}, {
							elem: 'group',
							content: [{
								elem: 'name',
								elemMods: { color: '1'},
								content: 'Сын',
							}, {
								elem: 'phone',
								content: '+37525 909 00 01'
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
				innerMods: { 'w-sep': 'bottom' },
				content: [{
					elem: 'group',
					content: [{
						block: 'userinfo',
						mix: { elem: 'status', js: { id: 'userinfo-1' }},
						content: [{
							block: 'dropdown',
							mods: { switcher: 'button', theme: 'life-light' },
							switcher: { block: 'button', mods: { 'icon-only': 'menu', theme: 'islands' }, icon: { block: 'icon', mods: { 'type': 'menu-toggle' } } },
							popup: {
								block: 'menu',
								mix: { block: 'userinfo', elem: 'menu' },
								mods: { theme: 'life-light' },
								content: [{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'addUserPhoto', actionParams: { userId: 'user-2' } } }, val: '1', content: 'Добавить фото' },
								{ elem: 'item', mix: { block: 'action-main-user', js: { action: 'changeProfileColor', actionParams: { userId: 'user-2' } } }, val: '1', content: 'Выбрать цвет профиля' },
								{ elem: 'item', val: '1', mix: { block: 'action-main-user', js: { action: 'setMenuCheckBoxVal', actionParams: { userId: 'user-2' } } }, val: '1',  content: [{
									block: 'checkbox',
									mods: {
										theme: 'shared',
										size: 'l'
										// type: 'button',
										// view: 'plain'
									},
									icon: {
										block: 'icon',
										mods: { type: 'checkbox' }
									},
									name: 'need_send',
									val: '1',
									text: [{
										tag: 'span',
										cls: 'checkbox-line',
										content: 'Получать уведомление'
									}, {
										tag: 'span',
										cls: 'checkbox-line',
										content: 'об окончании мин/Мб'
									}]
								}]
							},
							]
							},
						}, {
							block: 'icon',
							mix: { block: 'userinfo', elem: 'avatar' },
							url: '/assets/img/user-avatar.png'
						}]
					}, {
						block: 'form',
						mods: { view: 'line' },
						action: '',
						method: 'post',
						enctype: 'multipart/form-data',
						content: [{
							elem: 'button-group',
							elemMods: { type: 'list' },
							content: [{
								elem: 'button-group',
								elemMods: { type: 'line' },
								content: [{
									block: 'form',
									elem: 'label',
									elemMods: { size: 's' },
									content: 'Имя'
								}, {
									block: 'input',
									name: 'username',
									mods: { theme: 'life-light', size: 's', width: 'available' },
									placeholder: '',
								}]
							}, {
								elem: 'button-group',
								elemMods: { type: 'line' },
								content: [{
									tag: 'span',
									block: 'form',
									elem: 'label',
									elemMods: { size: 's' },
									content: 'Номер life:)'
								}, {
									block: 'select',
									mods: { mode: 'radio', theme: 'life-light', size: 's' },
									text: '25',
									options: [
									{ val: '25', text: '25' },
									{ val: '29', text: '29' },
									{ val: '33', text: '33' },
									{ val: '44', text: '44' }
									]
								}, {
									block: 'input',
									name: 'phone',
									maxLength: 7,
									mods: { theme: 'life-light', size: 's' },
									placeholder: '123',
									type: 'search',
									val: ''
								}]
							}]
						}, {
							elem: 'button-group',
							elemMods: { type: 'list' },
							content: [{
								elem: 'button-group',
								elemMods: { type: 'line' },
								content: [{
									block: 'button',
									mix: { block: 'action-main-user', js: { 'action': 'sendInvite', 'actionParams': {} } },
									mods: { view: 'main' },
									text: 'Отправить приглашение'
								}, {
									block: 'dropdown',
									mods: { switcher: 'button', theme: 'islands', 'tooltipM': true },
									switcher: { block: 'button', mods: { 'icon-only': true }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
									popup: ['Пользователь получит SMS вида: &laquo;Абонент ИМЯ хочет добавить вас в свою группу. В течение 48 часов вы можете подтвердить вступление. Приняв приглашение, вы перейдете на тарифный план ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;.'}, ' Условия', { tag: 'br' }, 'текущего тарифного плана будут аннулированы.', { tag: 'br' }, 'Подключенные дополнительные услуги будут действовать согласно правилам на тарифном плане ', { block: 'link', url: '#', content: '&laquo;Семья&raquo;'}, { tag: 'br' }, 'Перейти к приглашению &mdash; USSD *555*1#', { block: 'icon', mods: { type: 'phone' }}, '&raquo;'],
									mix: { block: 'tooltip', js: true },
									js: { tooltip: 'TXT-07' }
								}]
							}]
						}, {
							elem: 'button-group',
							elemMods: { type: 'list' },
							content: [{
								block: 'userinfo',
								js: { id: 'userinfo-1'},
								elem: 'status',
								content: [{
									block: 'form',
									elem: 'text',
									elemMods: { size: 's'},
									content: 'Как только пользователь примет приглашение,',
								}, {
									block: 'form',
									elem: 'text',
									elemMods: { size: 's'},
									content: 'вы сможете распределить ему мин и МБ'
								}]
							}]
						}]
					}]
				}]
			}, {
				block: 'actions',
				mods: { view: 'simple' },
				content: [{
					elem: 'group',
					content: {
						block: 'button',
						mix: [{ block: 'actions', elem: 'add-user' }, { block: 'action-main-user', js: { 'action': 'addActionsBlock', actionParams: {} } }],
						mods: { view: 'add' },
						icon: {
							block: 'icon',
							url: '/assets/img/icon_cross.png',
						},
						text: 'Добавить еще пользователей'
					}
				}, {
					elem: 'group',
					elemMods: { view: 'available' },
					content: [{
						block: 'form',
						mods: { view: 'line-bottom' },
						action: '',
						method: 'post',
						enctype: 'multipart/form-data',
						content: [{
						block: 'control-group',
						mods: { type: 'line', size: 'l', theme: 'shared' },
						content: [{
							block: 'button',
							mix: { block: 'action-main-user', js: { action: 'redistribute', actionParams: {} } },
							mods: { view: 'main' },
							text: 'Перераспределить'
						}, {
							block: 'dropdown',
							mods: { switcher: 'button', theme: 'islands', 'tooltipM': true },
							switcher: { block: 'button', mods: { 'icon-only': true }, icon: { block: 'icon', mods: { 'tooltip-small': 'question' } } },
							popup: 'Переход в личный кабинет на сайте в котором <br> можно управлять ...',
							mix: { block: 'tooltip', js: true },
							js: { tooltip: 'TXT-08' }
						}]
					}, /*{
						block: 'control-group',
						mods: { type: 'line', size: 'l', theme: 'shared' },
						content: [{
							block: 'checkbox',
							mods: {
								theme: 'shared',
								type: 'button',
								view: 'plain'
							},
							icon: {
								block: 'icon',
								mods: { type: 'checkbox' }
							},
							name: 'checkbox1',
							val: '1',
							text: [{
								tag: 'span',
								cls: 'checkbox-line',
								content: 'Распределить'
							}, {
								tag: 'span',
								cls: 'checkbox-line',
								content: 'всем поровну'
							}]
						}, {
							block: 'checkbox',
							mods: { theme: 'shared', type: 'button', view: 'plain' },
							icon: { block: 'icon', mods: { type: 'checkbox' } },
							name: 'checkbox2',
							val: '2',
							text: [{
								tag: 'span',
								cls: 'checkbox-line',
								content: 'Автоматически применить данное'
							}, {
								tag: 'span',
								cls: 'checkbox-line',
								content: 'распределение в следующем месяце'
							}]
						}]
					}*/]
					}]
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
						block: 'product-list',
						mods: { size: 5 },
						content: [{
							elem: 'title',
							content: 'Также вы можете выбрать дополнительные услуги и устройства:'
						}, {
							elem: 'content',
							content: [{
								block: 'menu',
								content: [{
									icon_src: '/assets/img/prod_image_life.png',
									title: 'APPS CLUB',
									desc: 'Сотни игр и приложений без рекламы со всеми бонусами внутри за 0,16 рублей в сутки! Первые 7 дней бесплатно!',
									url: 'http://www.life.com.by/private/services/uslugi_dlya__razvlecheniy_a/appsclub'
								}, {
									icon_src: '/assets/img/prod_image_melo.png',
									title: 'Мелоринг',
									desc: 'Замените скучный гудок на любимую мелодию и дарите всем хорошее настроение!',
									url: 'http://www.life.com.by/private/services/uslugi_dlya__razvlecheniy_a/appsclub'
								}, {
									icon_src: '/assets/img/prod_image_apps.png',
									title: 'iTV',
									desc: 'Более 50-каналов, новые фильмы в высоком качестве и безлимитный интернет в одном пакете всего за 7,5 рублей в месяц. Первые 30 суток бесплатно!',
									url: '#'
								}, {
									icon_src: '/assets/img/prod_image_roam.png',
									title: 'Скидки на роуминг',
									desc: 'Сниженные тарифы на звонки на границей: в России, Украине, Польше...',
									url: 'http://www.life.com.by/private/roaming/lgotnyiy_rouming'
								}, {
									icon_src: '/assets/img/prod_image_phone.png',
									title: 'ZTE A610',
									desc: 'Android 6.0, 5" IPS, 720x1280 1.3ГГц, 4 ядра',
									url: '#'
								}].map(function(item) {
									return {
										elem: 'item',
										mix: { block: 'product-list', elem: 'item' },
										content: {
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
													url: item.url,
													content: ['Подробнее']
												}
											}]
										}
									}
								})
							}]
						}]
					}]
				}]
			}, ]
		}, {
			block: 'footer',
			content: ''
		}]
	}]
};
