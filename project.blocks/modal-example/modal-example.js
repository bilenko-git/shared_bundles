modules.define('modal-example', ['i-bem__dom'], function(provide, BEMDOM) {
console.log('3j');
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._modal = this.findBlockInside('modal');

                this.findBlockInside('link').on('click', function() {
                    this._modal.toggleMod('visible');
                }, this);
            }
        }
    }
}));

});
