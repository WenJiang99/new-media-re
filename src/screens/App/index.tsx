import React, { lazy, Suspense } from "react"
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import './index.less'
import "../../assets/styles/common.less"
import Loading from "../../components/Loading"

const Terrace = lazy(() => import(/*webpackChunkName:"terrace"*/"../Terrace"))
const Carrier = lazy(() => import(/*webpackChunkName:"carrier"*/"../Carrier"))
const Home = lazy(() => import(/*webpackChunkName:"home"*/"../Home"))
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
          <Route path="/terrace" component={Terrace} />
          <Route path="/carrier" component={Carrier} />
          <Route path='/school' component={School} />
          <Route path='/cinema' component={Cinema} />
          <Route path="/home" component={Home} />
          <Redirect from="" to={"/home"} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
