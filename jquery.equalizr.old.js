/*!
 * jQuery Equalizr v1.0.1 (https://github.com/agenceepsilon/jquery-equalizr)
 * Copyright 2014 Agence Epsilon.
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    $.fn.equalizr = function(opts){
        var defaults = {
            classSelector: "",
            classRow: "row-equalizr",
            classCol: "col-equalizr",
            animate: true,
            animateTime: 400,
            afterLoad: false
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $elem = $(this),
                $elemChild;

            if(params.classSelector){
                $elemChild = $elem.find(params.classSelector);
            } else {
                $elemChild = $elem.children();
            }

            function findHeight(){
                var $elemMaxHeight = 0;

                $($elemChild).each(function(){
                    var $elemChildOuterHeight = $(this).outerHeight();

                    // Find the most height beetween each childs elements
                    if($elemMaxHeight > $elemChildOuterHeight){
                        $elemMaxHeight = $elemMaxHeight;
                    } else {
                        $elemMaxHeight = $elemChildOuterHeight;
                    }
                });
                initHeight($elemMaxHeight);
            }

            function initHeight(maxHeight){
                $($elemChild).each(function(){
                    var $elemChildOuterHeight = $(this).outerHeight(),
                        $elemChildHeight = $(this).height(),
                        $elemChildGap = $elemChildOuterHeight - $elemChildHeight;

                    // Add col class to each childs elements
                    $(this).addClass(params.classCol);

                    // Active animation
                    if(params.animate){
                        $(this).animate({
                            height: maxHeight - $elemChildGap
                        }, params.animateTime);
                    } else {
                        $(this).height(maxHeight - $elemChildGap);
                    }
                });
            }

            if($elemChild.length > 1){
                // Add row class
                $elem.addClass(params.classRow);

                if(params.afterLoad){
                    $(window).load(function(){
                        findHeight();
                    });
                } else {
                    findHeight();
                }
            }
        });
    };
})(jQuery);