# Tech questions

## What is the difference between Component and PureComponent? Give an example where it might break my app.

PureComponent uses shallow comparison to determine whether re-render or not based on the new state and props, it gives performance, but it you're passing an array or object as props, React might not see the change and not update correctly, in some cases, breaking the app.

## Context + ShouldComponentUpdate might be dangerous. Why is that?

I'm not sure about this one, but looks like Context doesn't respect the shouldComponentUpdate rule, so even if it's has some shouldComponentUpdate condition that prevents the re-render, it won't matter, it will be re-rendered.

## Describe 3 ways to pass information from a component to its PARENT.

1. Props and callbacks: one level communication, pass a props to the child and the child will bring back the info via some callback that was passed as props too.
2. Context API: pretty much the state manager from react, doesn't matter how many levels the components are apart, the big difference from a global state manager is that it has to be used from a parent to it's children.
3. Some other global state manager (redux, apollo cache...): share data between all components with no restrictions of relationship and levels.

## Give 2 ways to prevent components from re-rendering.

useMemo hook and shouldComponentUpdate as pureComponent

## What is a fragment and why do we need it? Give an example where it might break my app.

Personally I use it to put together components and don't add an extra layer to the DOM. I'm not sure how it would break the app, only if you don't use it in some cases.

## Give 3 examples of the HOC pattern.

HOC components are components that receives other components and add some default logic between them. I can think in some examples:

Using as an authentication component, to check if the user is logged and what logic should be applied to that user.
Using as a layout wrapper, some pages might use the same header, so it can be wrapped in a HOC.
Using as a styling wrapper, some pages uses the same styling, so it can be shared via HOC.

## What's the difference in handling exceptions in promises, callbacks and async...await?

On callbacks you have to check the exception manually, passing params to check if the error exists. On promises it has two different methods for success and error, so it's a little bit more organized (then/catch). And Async/await it's just a different synthax for promises.

## How many arguments does setState take and why is it async.

Two. If the javascript thread was blocked by every setState update without being async it would get really messy and probably reduce the performace a lot.

## List the steps needed to migrate a Class to Function Component.

Change everything to use Hooks and create the component as a function and not a class.

## List a few ways styles can be used with components.

CSS modules, just import the css stylesheet inside of the component.
Styled components, create dumb components to use only as styles.
UI components libraries (MUI, AntD, Chakra).

## How to render an HTML string coming from the server.

Without using any library, it will probably need to sanitize the data that comes from the request and inserted into the HTML using some document methods but it can easily abstract all that using some kind of SSR library like NextJS.
