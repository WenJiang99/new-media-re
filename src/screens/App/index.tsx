import React, { lazy, Suspense } from "react"
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './index.less'
import "../../assets/styles/common.less"
import Loading from "../../components/Loading"

const Test = lazy(() => import(/*webpackChunkName:"home"*/"../Test"))
const Login = lazy(() => import(/*webpackChunkName:"login"*/"../Login"))
const Home = lazy(() => import(/*webpackChunkName:"user"*/"../Home"))
const School = lazy(() => import(/*webpackChunkName:"school" */"../School"))
const Cinema = lazy(() => import(/*webpackChunkName:"cinema" */"../Cinema"))
// import loadable from "@loadable/component"
// const Home = loadable(() => import("../Home"))
// const Login = loadable(() => import("../Login"))


export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading text="loading contents..." />}>
        <Switch>
          <Route path="/test" component={Test} />
          <Route path="/login" component={Login} />
          <Route path='/school' component={School} />
          <Route path='/cinema' component={Cinema} />
          <Route path="/home" component={Home} />
          <Redirect from="" to={"/home"} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
