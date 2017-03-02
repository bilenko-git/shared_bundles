modules.define('action-main', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'info-modal', 'input'], function(provide, bemDom, Popup, bemHtml, $, InfoModal, input) {
	provide(bemDom.declBlock(this.name, {
		onSetMod: {
			js: {
				inited: function(e) {
					this._domEvents().on('click', function(e) {
						e.preventDefault();
						this[this.params.action](this.params.actionParams, this);
					});
				}
			}
		},
		connectTariff: function() {
			InfoModal.show(bemHtml.apply(this.auth()));
		},
		auth: function() {
			var tarifActionTitle = this.params.title || 'Test';
			var authForm = {
				block: 'wrapper',
				content: {
					block: 'form',
					action: '',
					method: 'post',
					enctype: 'multipart/form-data',
					content: [{
						elem: 'title',
						content: 'Подключение тарифного плана ' + '&laquo;' + tarifActionTitle + '&raquo;'
					}, {
						elem: 'button-group',
						elemMods: { vert: true, size: 'm' },
						content: {
							elem: 'head-title',
							content: 'Пожалуйста, авторизуйтесь'
						}
					}, {
						elem: 'button-group',
						elemMods: { vert: true, inner: true, size: 'm' },
						content: [{
							elem: 'button-group',
							elemMods: { inner: true },
							content: [{
								elem: 'label',
								tag: 'span',
								content: 'Ваш номер life:)'
							}, {
								block: 'select',
								mods: { mode: 'radio', theme: 'life-light', size: 'm' },
								text: 25,
								options: [
									{ val: 25, text: '25' },
									{ val: 29, text: '29' },
									{ val: 44, text: '44' }
								],
								name: 'codePhone',
							}, {
								block: 'input',
								mods: { theme: 'life-light', size: 'm' },
								placeholder: '1234567',
								name: 'phone'
							}]
						}, {
							elem: 'button-group',
							elemMods: { inner: true },
							content: [{
								elem: 'label',
								tag: 'span',
								content: 'Пароль'
							}, {
								block: 'input',
								mods: { theme: 'life-light', size: 'm', width: 'available', type: 'password' },
								placeholder: '1234567',
								name: 'password'
							}, {
								block: 'dropdown',
								mods: { switcher: 'link', theme: 'islands', size: 'm' },
								switcher: { block: 'tooltip' },
								popup: {
									block: 'popup',
									mix: { block: 'tooltip', js: true },
									content: 'Пароль от личного кабинета life:)'
								},
								js: { tooltip: 'main' }

							}]
						}, {
							elem: 'text-error',
							content: 'Вы ввели неправильный номер или пароль. Проверьте и попробуйте ещё раз'
						}, {
							elem: 'button-group',
							mods: 'inner',
							content: {
								block: 'button',
								mods: { view: 'main', type: 'submit' },
								mix: [
									{ block: 'form', elem: 'submit' },
									{ block: 'action-main', js: { 'action': 'authEntrance', 'actionParams': { 'a': '1' } } },
								],
								text: 'Войти'
							}
						}]
					},{
						elem: 'button-group',
						elemMods: { size: 'xl' },
						content: ['Перейти на тариф можно и с помощью USSD - ', { tag: 'span', cls: 'ussd-call', content: '*115*9#' }]
					}]
				}
			};

			return authForm;
		},
		authEntrance: function(actionParams, _this) {
			var form = $(_this.domElem[0].form),
				formAuth = {
					phone: '375256257224', // form.find('[name="phone"]').val()+form.find('[name="codePhone"]').val(),
					password: '34704844' //form.find('[name="password"]').val()
				};
			console.log(formAuth);
            $.ajax({
                type: "POST",
                url: "http://multidev.life.com.by/auth",
                data: { formAuth },
                success: function (data) {
                    console.log(data);
                },
                error: function (xhr, status) {
                    console.log(xhr);
                    console.log(status);
                }
            });
		}
	}));
});
