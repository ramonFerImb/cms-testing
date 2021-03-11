import React, { useContext } from "react"
import { getClassNames } from "../../utils/styles"
import classes from "./button.module.scss"

export function Button({ type, selected, children }) {
  const classMap = getClassNames({
    [classes.container]: true,
    [classes[type]]: !!type,
  })
  return <button className={classMap}>{children}</button>
}
