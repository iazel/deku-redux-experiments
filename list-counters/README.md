# List of Counters
We have two main components: `Counter` and `List`. Both of them are completely separated from each other, including the reducers.
Then I've created a ListCounter "sugar" component that connect `List` and `Counter`, just to explicit my intention.
The plumbing is really minimal.

### ListCounter
The easier one, need just an `items` list, and each `item` represents the state of each `Counter` (an int in this case).  
Internally the `items` are mapped to `Counter`s.
Its reducers just use `List`'s `createXXXReducer` and the Counter's reducers; nothing specials, really.

### Counter
This is the same `Counter` used in the `redux` counter's example, opportunaly translated to deku.
Instead of using `redux-thunk`, I've implemented the async action and "if odd" using the `taskMiddleware`, therefore we have two reducers:
- `stateReducer`: same as in the redux example
- `taskReducer`: instead of embedding the business logic for `incIfOdd` action, I've moved it directly in this reducer. Same thing for `incAsync`.

### List
The most complex component, but its use is *dead* simple:
```javascript
List(txt_add, txt_remove, items)
```
The first two params are just strings, while `items` is an immutable list of components. 
Internally each item will have its dispatcher overridden by `listDispatch`, so any action dispatched by an item, will be converted into an `itemAction`. It use `deku-override/override`.  
The itemAction is just a wrapper of the original action, with the index of the children who dispatched it; it also copy any `meta` of the source action. Its signature:
```javascript
{ type: ITEM_ACTION
, payload: { item_action, index }
, meta: item_action.meta
}
```

Because we like the `taskMiddleware`, it already offers two reducers creator:
- `createStateReducer(reduce, create)`
  - `reduce` is the reducer used to update each item's state. In this example is `counter.stateReducer`.
  - `create` is a function that will return the item's initial state everytime you add a new one.

- `createTaskReducer(reduce)`
  Even simpler than the state one, just take the item's `taskReducer`.

You doesn't need anything else!

## Wrap up
Given the `Counter` and the `List`, all is reduced to:
- Instantiate the component:
  ```
  List('Add', 'Rem', counters.map(Counter))
  ```

- Setup the store:
  ```
  import { createStore } from 'redux'
  import { createStateReducer } from 'list/reducers'
  import { stateReducer } from 'counter/reducers'

  const state = createStateReducer(stateReducer, () => 0)
  const store = createStore(state)
  ```

It should be possible to easily implement a List of List without further modification.  
Also, using this pattern, it should be possible to create an Unique component wrapper (e.g.: two separate Counters in the same page). 
I will play with this ideas next :)
