/**
 * @module modal
 */

modules.define(
    'modal',
    function(provide, Modal) {

/**
 * @exports
 * @class modal
 * @bem
 */
provide(Modal.declMod({ modName : 'theme', modVal : 'life-light' }, /** @lends modal.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                // console.log(bemDom);
                this
                    // Apply the animation only at first opening, otherwise the animation will be played when block
                    // initialized.
                    .setMod('has-animation')
                    .__base.apply(this, arguments);

            }
        }
    }
}));

});
