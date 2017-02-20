/**
 * @module chart__config
 * @description Configuration for cmp-chart
 */

modules.define('chart__config', function(provide) {

provide(/** @exports */{
    /**
     * URL for loading chart lib if it does not exist
     * @type {String}
     */
    url : '/assets/js/libs/Chart.bundle.min.js'
});

});
