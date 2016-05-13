This repository is primarly for my personal experiments to increase my familiarity with [deku](https://github.com/dekujs/deku) (v2), [redux](https://github.com/reactjs/redux) and [Immutable](https://facebook.github.io/immutable-js/).

Common patterns
===============

I've developed some common patterns that I'd like to share with you.

#### Task Middleware
The first is the `taskMiddleware`: it's my solution fro async action and separation between model update and business logic.
It draw inspiration from [redux-saga](https://github.com/yelouafi/redux-saga) and [redux-thunk](https://github.com/gaearon/redux-thunk) and should be able to do anything the others two could.
The idea is to have a second `reducer` that manage all our business logic, leaving the model updates to the `stateReducer` (the one you use normally).
Some advantages:
* All the business logic reside in one point. No more logic scattered in our actions creators.
* All the model updates still reside in one point
* The taskReducer is just a pure function, fully composable, easily testable, etc...
* The middleware just listen for any action that have `action.meta.task === true`, this aids tests

#### Deku Override
The second piece of code is a modification of `deku.createApp`. Saddly I had to replace more bits that I initially expected, however this is the foundamental parts. I hope these experiments will lead to a more flexible deku. One good thing is that's completely transparent, you doesn't have to use any particular function in component's creation, the only exported function is `createApp`.
Why I rewrote that parts? Because I need the ability to override the `model` (the object that each component gets) to tap into the dispatching process. This gave me the ability to alter the action's flow of any components, unlocking the possibility of a general `List`.

List of Counters
================

The first experiment that led to the creation of `deku-override` is a list of counters. More precisly, it's a generic `List` component whose children are generic, indipendent `Counter` components. The `List` doesn't know nothing about `Counter` and viceversa. (Inspired by this issue)[https://github.com/reactjs/redux/issues/822].

Run a Demo
===============

First clone and install the generic dependencies:
```shell
$ git clone https://github.com/Iazel/deku-redux-experiments/
$ cd deku-redux-experiments
$ npm install
```

Then visit the README.md of the experiment you are interested in and follow the instruction if present.
Each experiment has a `demo/index.html` file, open it to see a demo.


-----------------------------------------------------

Another more complex example demostrating the power of this trio:
[Scalable Frontend Challenge by slorber](https://github.com/Iazel/scalable-frontend-with-elm-or-redux/tree/iazel-deku-redux/deku-redux-iazel)

