/**
 * @module chart
 * @description Provide Chart (load if it does not exist).
 */

modules.define(
    'chart',
    ['loader_type_js', 'chart__config'],
    function(provide, loader, cfg) {

/* global Chart */

function doProvide(preserveGlobal) {
    /**
     * @exports
     * @type Function
     */
    provide(preserveGlobal? Chart : Chart);
}

typeof Chart !== 'undefined'?
    doProvide(true) :
    loader(cfg.url, doProvide);
});
