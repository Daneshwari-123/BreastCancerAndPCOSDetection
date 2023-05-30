import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Team from "../home/team/Team"
import BlogHome from "../blog/BlogHome"
import NewBlog from "../blog/NewBlog"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/tests' component={Services} />
          <Route exact path='/blog' component={BlogHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/blog/:id' component={NewBlog} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
