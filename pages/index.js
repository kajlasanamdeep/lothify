import Home from "../component/Home"
import About from "../component/About"
import React from "react"
import Slides from "../component/Slides"
import Art from "../component/artstudio"
import Contact from "../component/contact"

export default function Page() {
  return (
    <React.Fragment>
      <Home/>
      <About/>
      <Slides/>
      <Art/>
      <Contact/>
    </React.Fragment>
  )
}
