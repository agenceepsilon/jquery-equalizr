# jQuery Equalizr

Apply the greater height has all the same columns.

## Parameters

| Options       | Types   | Defaults         | Others            |
| ------------- | ------- | ---------------- | ----------------- |
| classSelector | string  | ``""``             | Choose your class |
| classRow      | string  | ``row-equalizr`` | Choose your class |
| classCol      | string  | ``col-equalizr`` | Choose your class |
| animate       | boolean | ``false``        | ``true``          |
| animateTime   | number  | ``400``          | Your time         |
| afterLoad     | boolean | ``false``        | ``true            |

### classRow

...

### classCol

...

### Animate

Select ``true`` to animate the new height of the columns.

#### AnimateTime

Choose the time of the animation.

### AfterLoad

Initialize the new height after loading all images.

## Initialize

    $(".row-class").equalizr();

## Changelogs

### 1.0.0

* Initial release