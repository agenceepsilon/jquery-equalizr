# jQuery Equalizr [![GitHub version](https://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr.png)](http://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr) [![Bower version](https://badge.fury.io/bo/jquery-equalizr.png)](http://badge.fury.io/bo/jquery-equalizr)

Apply the greater height has all the same columns.

## Parameters

| Options   | Types   | Defaults         | Others     |
| --------- | ------- | ---------------- | ---------- |
| elemClass | string  | ``""``           | Your class |
| rowClass  | string  | ``row-equalizr`` | Your class |
| colClass  | string  | ``col-equalizr`` | Your class |
| maxHeight | string  | ``""``           | Your class |
| animation | boolean | ``true``         | ``false``  |
| duration  | number  | ``400``          | Your time  |
| afterLoad | boolean | ``false``        | ``true``   |

### elemClass

Specify the class of elements to target. If the option is empty, the plugin will target children in the class that initializes the plugin.

    default: ""
    option: string

### rowClass

Specify the class applied to the main element. If the option is empty, the plugin will apply the default class.

    default: "row-equalizr"
    option: string

### colClass

Specify the class applied to the child elements. If the option is empty, the plugin will apply the default class.

    default: "col-equalizr"
    option: string
    
### maxHeight

Specify a maximum height to child elements.

    default: ""
    option: integer

### animation

Specify whether to play the animation.

    default: true
    option: boolean

### duration

Specify the time of the animation.

    default: 400
    option: integer

### afterLoad

Specify whether the plugin should start before or after the loading of all images.

    default: false
    option: boolean

## Initialize

Target parent block that contains columns / modules to adjust.

    $(".row").equalizr();

## Changelogs

### 2.0.0

* News options:
    * ``maxHeight``
    
* Changing the names of options:
    * ``classSelector`` -> ``elemClass``
    * ``classRow`` -> ``rowClass``
    * ``classCol`` -> ``colClass``
    * ``animate`` -> ``animation``
    * ``animateTime`` -> ``duration``
    
* Rewriting the code

### 1.0.1

* Fix no animate wrong height ([#1](https://github.com/agenceepsilon/jquery-equalizr/issues/1))

### 1.0.0

* Initial release