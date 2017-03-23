modules.define('user', ['i-bem-dom', 'popup', 'BEMHTML', 'jquery', 'action-user'], function(provide, bemDom, Popup, bemHtml, $, action_user) {
    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    var _this = this,
                        inputName = this.findChildElem('name');

                    this._events(inputName.findMixedBlock(action_user)).on('em', function() {
                        if( inputName ) {
                            userName = bemDom.replace( inputName.domElem, bemHtml.apply({
                                block: 'input',
                                mix: [
                                    { block : 'inforamtion', elem : 'input-phone' }
                                ],
                                mods: { theme: 'life-light', size: 's' },
                                maxLength: '10',
                                name: 'userName',
                                autocomplete: false,
                                js: true
                            }));
                        }

                        if( userName ) {
                            $(function() {
                                var inputUserName = $('[name="userName"]', userName);

                                inputUserName.val('Nicholas').click().focus();

                                inputUserName.bind('keypress focusout', function(e) {
                                    this.bemDom = bemDom;
                                    this.bemHtml = bemHtml;
                                    _this.updateUser(this.val, userName, this);
                                });
                            });
                        }
                    });
                }
            }
        },
        updateUser: function( userName, inputName, $this) {
            console.log('39');

            $this.bemDom.replace( inputName.domElem,  $this.bemHtml.apply({
                elem: 'name',
                mods: { 'hidden' : true },
                mix: { block: 'action-user',  js: {'id' : 'menu-1' }},
                content: userName
            }));
        }
    }));
});