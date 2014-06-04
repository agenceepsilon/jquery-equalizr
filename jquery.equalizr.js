/**
 * jQuery Equalizr (https://github.com/agenceepsilon/jquery-equalizr)
 *
 * @version 2.0.0-beta.2
 * @author Agence Epsilon (http://www.agenceepsilon.com)
 *
 * @copyright 2014 Agence Epsilon
 * @license MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 */

(function($){
    $.fn.equalizr = function(options){

        // Default settings
        var defaults = {
            elemClass: "",
            rowClass: "row-equalizr",
            colClass: "col-equalizr",
            maxHeight: "",
            animation: true,
            duration: 400,
            afterLoad: false
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function(){
            var $elem = $(this),
                $elemChild;

            // Initiate the chilren element
            if(settings.elemClass){
                $elemChild = settings.elemClass;
            } else{
                $elemChild = $elem.children();
            }

            /**
             * maxHeight
             *
             * Find the greatest height
             *
             * @param maxHeight
             */
            function maxHeight(maxHeight){
                var newMaxHeight = maxHeight;

                $elemChild.each(function(){
                    var elemOuterHeight = $(this).outerHeight();

                    if(elemOuterHeight > newMaxHeight){
                        newMaxHeight = elemOuterHeight;
                    } else{
                        newMaxHeight = newMaxHeight;
                    }
                });

                initHeight(newMaxHeight);
            }

            /**
             * initHeight
             *
             * Loading new heights
             *
             * @param maxHeight
             */
            function initHeight(maxHeight){
                $elemChild.each(function(){
                    var elemHeight = $(this).height(),
                        elemOuterHeight = $(this).outerHeight(),
                        heightGap = elemOuterHeight - elemHeight,
                        newHeight = maxHeight - heightGap;

                    $(this).addClass(settings.colClass);

                    if(settings.animation){
                        $(this).animate({
                            "height": newHeight
                        }, settings.duration);
                    }
                    else{
                        $(this).css("height", newHeight);
                    }
                });
            }

            // Activate the plugin if there more than one child.
            if($elemChild.length > 1){

                // Add class to main element
                $elem.addClass(settings.rowClass);

                // Wait until all images are loaded
                if(settings.afterLoad){
                    $(window).load(function(){
                        maxHeight(settings.maxHeight);
                    });
                } else{
                    maxHeight(settings.maxHeight);
                }
            }
        });
    };
}(jQuery));