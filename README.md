# jQuery Equalizr [![GitHub version](https://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr.png)](http://badge.fury.io/gh/agenceepsilon%2Fjquery-equalizr) [![Bower version](https://badge.fury.io/bo/jquery-equalizr.png)](http://badge.fury.io/bo/jquery-equalizr)

Apply the greater height has all the same columns.

## Parameters

| Options       | Types   | Defaults         | Others            |
| ------------- | ------- | ---------------- | ----------------- |
| classSelector | string  | ``""``           | Choose your class |
| classRow      | string  | ``row-equalizr`` | Choose your class |
| classCol      | string  | ``col-equalizr`` | Choose your class |
| animate       | boolean | ``true``         | ``false``         |
| animateTime   | number  | ``400``          | Choose your time  |
| afterLoad     | boolean | ``false``        | ``true``          |

### classSelector

Specify the class of columns / modules to target, if it is empty, it will direct children of the class that initializes the plugin.

### classRow

Change the default class applied.

### classCol

Change the default class applied.

### animate

Select ``true`` to animate the new height of the columns.

### animateTime

Choose the time of the animation.

### afterLoad

Initialize the new height after loading all images.

## Initialize

Target parent block that contains columns / modules to adjust.

    $(".row").equalizr();

## Changelogs

### 1.0.1

* Fix no animate wrong height ([#1](https://github.com/agenceepsilon/jquery-equalizr/issues/1))

### 1.0.0

* Initial release