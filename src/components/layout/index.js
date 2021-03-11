import React from "react"
import classes from "./layout.module.scss"
import { Nav } from "../nav"
import { Footer } from "../footer"

export const Layout = ({ children, selected }) => {
  return (
    <div className={classes.container}>
      <Nav selected={selected} />
      {children}
      <Footer />
    </div>
  )
}
