import React from "react"
import classes from "./icon.module.scss"

export function Icon({ name, className, onClick }) { 
  return (
    <i
      onClick={onClick}
      className={`${classes.container} ${name} ${className}`}
    />
  )
}
