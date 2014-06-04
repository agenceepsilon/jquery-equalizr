# jQuery Equalizr [![GitHub version](https://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr.png)](http://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr) [![Bower version](https://badge.fury.io/bo/jquery-equalizr.png)](http://badge.fury.io/bo/jquery-equalizr)

Apply the greater height has all the same columns.

## Parameters

### elemClass

Specify the class of elements to target. If the option is empty, the plugin will target children in the class that initializes the plugin.

    type: class/string
    default: ""

### rowClass

Specify the class applied to the main element. If the option is empty, the plugin will apply the default class.

    type: class/string
    default: "row-equalizr"

### colClass

Specify the class applied to the child elements. If the option is empty, the plugin will apply the default class.

    type: class/string
    default: "col-equalizr"
    
### maxHeight

Specify a maximum height to child elements. If the specified maximum height is smaller than the maximum height of a child is the greatest height of the child is applied.

    type: number
    default: ""

### animation

Specify whether to play the animation.

    type: boolean
    default: true

### duration

Specify the time of the animation.

    type: number
    default: 400

### afterLoad

Specify whether the plugin should start before or after the loading of all images.

    type: boolean
    default: false

## Initialize

Target parent block that contains columns / modules to adjust.

    $(".row").equalizr({
        // Options
    });

## Changelogs

### 2.0.0

* New option:
    * ``maxHeight`` *([#2](https://github.com/agenceepsilon/jquery-equalizr/issues/2))*
* Changing the names of options:
    * ``classSelector`` change to ``elemClass``
    * ``classRow`` change to ``rowClass``
    * ``classCol`` change to ``colClass``
    * ``animate`` change to ``animation``
    * ``animateTime`` change to ``duration``
* Rewriting the code

### 1.0.1

* Fix no animate wrong height *([#1](https://github.com/agenceepsilon/jquery-equalizr/issues/1))*

### 1.0.0

* Initial release