/**
 * Created by shawn on 10/22/14.
 */
// Using the closure to map jQuery to $.
(function ($) {
// Store our function as a property of Drupal.behaviors.
    Drupal.behaviors.entityResponsiveTabs = {
        attach: function (context, settings) {
            $('#entity-resp-tab-container').responsiveTabs({
                collapsible: 'accordion',
                startCollapsed: 'accordion',
                animation: 'fade',
                active: 0
            });
        }
    };
}(jQuery));