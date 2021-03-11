import React from "react"
import { getClassNames } from "../../utils/styles"
import classes from "./card.module.scss"
import { Button } from "./../button"

export function Card({
  title,
  children,
  image,
  date,
  subtitle,
  button,
  type,
  className,
}) {
  const classMap = getClassNames({
    [classes.container]: true,
    [classes[type]]: !!type,
    [className]: !!className,
  })
  return (
    <div className={classMap}>
      {image && <img className={classes.image} src={image}></img>}
      {children}
      <div className={classes.containerData}>
        {title && <div className={classes.title}>{title}</div>}
        {date && <div className={classes.date}>{date}</div>}
        {subtitle && (
          <div className={classes.description}>{subtitle}</div>
        )}
        {button && (
          <div onClick={button.action} className={classes.button}>
            <Button type={type}>{button.text}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
