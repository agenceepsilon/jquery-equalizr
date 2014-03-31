/*!
 * jQuery Equalizr v1.0.0 (https://github.com/agenceepsilon/jquery-equalizr)
 * Copyright 2014 Agence Epsilon.
 * Licensed under MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function($){
    $.fn.equalizr = function(opts){
        var defaults = {
            classRow: "row-equalizr",
            classCol: "col-equalizr",
            animate: false,
            animateTime: 400,
            afterLoad: false
        };

        var params = $.extend(defaults, opts);

        return this.each(function(){
            var $elem = $(this);
            var $elemChild = $($elem).children();
            var $elemChildLength = $($elemChild).length;

            if($elemChildLength > 1){

                // Add row class
                $elem.addClass(params.classRow);

                function maxHeight(){
                    var maxHeight = -1;

                    $($elemChild).each(function(){
                        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
                    });

                    $($elemChild).each(function(){
                        $(this).addClass(params.classCol);

                        if(params.animate){
                            $(this).animate({
                                height: maxHeight
                            }, params.animateTime);
                        } else{
                            $(this).height(maxHeight);
                        }
                    });
                }

                if(params.afterLoad){
                    $(window).load(function(){
                        maxHeight();
                    });
                } else{
                    maxHeight();
                }
            }
        });
    };
})(jQuery);