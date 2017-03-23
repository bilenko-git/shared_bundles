/**
 * @module chart
 * @description Provide Chart (load if it does not exist).
 */

modules.define(
    'croppie',
    ['loader_type_js', 'croppie__config'],
    function(provide, loader, cfg) {

/* global Chart */

function doProvide(preserveGlobal) {
    /**
     * @exports
     * @type Function
     */
    provide(preserveGlobal? Croppie : Croppie);
}

typeof Croppie !== 'undefined'?
    doProvide(true) :
    loader(cfg.url, doProvide);
});
