/**
 * @module chart
 * @description Provide Chart Plugin (load if it does not exist).
 */

modules.define(
    'chart__plugins_jqanimate',
    ['loader_type_js'],
    function(provide, loader) {

/* global Chart */

function doProvide(preserveGlobal) {
    /**
     * @exports
     * @type Function
     */
    provide(preserveGlobal? ChartPluginsJqanimate : ChartPluginsJqanimate);
}

typeof ChartPluginsJqanimate !== 'undefined'?
    doProvide(true) :
    loader('/assets/js/libs/jquery.animateNumber.min.js', doProvide);
});
