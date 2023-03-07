# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

我们在项目中使用假数据接口：`https://jsonplaceholder.typicode.com/users`

react为什么要创建hooks？
- hooks的本质：一类特殊的函数，为你的函数式组件注入一些特殊的功能；
- react的核心思想就是组件化，组件化带来的最大的好处就是彼此独立，相互之间可以复用，但是react组件中可能会包含各种各样的状态，会在大型react项目中，有些类组件会变得很冗长，而且复杂，难以复用；
- 虽然`无状态组件`和`高阶组件`能够解决上面的问题，但依然存在很多问题，增加复杂性；
- Hooks的目的就是给函数式组件加上状态，函数组件轻量很多，使用Hooks钩子来钩入组件状态；
setState是`异步更新，同步执行`，setState本身并不是异步的，但是对state的处理机制给人一种异步的假象。state的处理一般发生在生命周期变化的时候。

# 高阶组件
- 高阶组件是react中非常重要的概念；
- 它被频繁应用在第三方框架中，比如react-redux,react-router;
- 看起来很复杂，但其实十分简单；
- 从原理上来说，HOC的公式如下：
`const hoc=higherOrde(wrappedComponent)`,输出`hoc`为组件，`wrappedComponent`为组件，`higherOrde`为高阶函数
## 为什么要用高阶组件呢？
其实高阶组件并不是必要的，但是它可以抽取重复代码，实现组件的复用，且可以条件渲染，控制组件的渲染逻辑，捕获/劫持被处理组件的生命周期；












