# jQuery Equalizr

Apply the greater height has all the same columns.

## Parameters

| Options       | Types   | Defaults         | Others            |
| ------------- | ------- | ---------------- | ----------------- |
| classSelector | string  | ``""``           | Choose your class |
| classRow      | string  | ``row-equalizr`` | Choose your class |
| classCol      | string  | ``col-equalizr`` | Choose your class |
| animate       | boolean | ``true``         | ``false``         |
| animateTime   | number  | ``400``          | Your time         |
| afterLoad     | boolean | ``false``        | ``true``          |

### classSelector

...

### classRow

...

### classCol

...

### animate

Select ``true`` to animate the new height of the columns.

#### animateTime

Choose the time of the animation.

### afterLoad

Initialize the new height after loading all images.

## Initialize

    $(".row-class").equalizr();

## Changelogs

### 1.0.0

* Initial release