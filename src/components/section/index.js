import React from "react"
import { getClassNames } from "../../utils/styles"
import classes from "./section.module.scss"

export function Section({ className, children, solidBg, title, image, type }) {
  const classMap = getClassNames({
    [classes.container]: true,
    [classes.solidBg]: solidBg === "solid",
    [classes.bgImage]: !!image,
    [classes.secondary]: !!type,
    [className]: !!className,
  })
  return (
    <div
      className={classMap}
      style={classes.bgImage && { backgroundImage: `url(${image})` }}
    >
      {title && <div className={classes.title}>{title}</div>}
      {children}
    </div>
  )
}
