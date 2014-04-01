/*!
 * jQuery Equalizr v1.0.0 (https://github.com/agenceepsilon/jquery-equalizr)
 * Copyright 2014 Agence Epsilon.
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    $.fn.equalizr = function(opts){
        var defaults = {
            classSelector: "",
            classRow: "row-equalizr",
            classCol: "col-equalizr",
            animate: false,
            animateTime: 400,
            afterLoad: false
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $elem = $(this);
            var $elemChild;

            if(params.classSelector){
                $elemChild = $elem.find(params.classSelector);
            } else {
                $elemChild = $elem.children();
            }

            function findHeight(){
                var $maxHeight = -1;

                $($elemChild).each(function(){
                    var $elemChildHeight = $(this).height();
                    var $elemChildMore = $(this).outerHeight();
                    var $elemChildGap = $elemChildMore - $elemChildHeight;

                    console.log($elemChildHeight);
                    console.log($elemChildMore);
                    console.log($elemChildGap);

                    $maxHeight = $maxHeight > $(this).height() ? $maxHeight : $(this).height();

                    $(this).addClass(params.classCol);

                    if(params.animate){
                        $(this).animate({
                            height: $maxHeight - $elemChildGap
                        }, params.animateTime);
                    } else {
                        $(this).height($maxHeight);
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