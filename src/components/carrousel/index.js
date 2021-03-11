import React from "react"
import classes from "./carrousel.module.scss"
import { Icon } from "./../icon"
import { getClassNames } from "../../utils/styles"

function Arrows() {
  return (
    <div className={classes.arrows}>
      <Icon className={classes.arrowLeft} name="icofont-rounded-left" />
      <Icon className={classes.arrowRight} name="icofont-rounded-right" />
    </div>
  )
}
function Bullets({ items }) {
  return (
    <div className={classes.bullets}>
      {items.map((_, i) => (
        <a
          className={classes.bullet}
          key={i}
          href={`#carrousel-slide-${i}`}
        ></a>
      ))}
    </div>
  )
}
function Sensor({ href, className }) {
  return <a className={className} href={href} />
}

export function Carrousel({ showArrows, showBullets, children, className }) {
  const classMap = getClassNames({
    [className]: !!className,
    [classes.container]: true,
  })
  return (
    <div className={classMap}>
      <div className={classes.carrousel}>
        {showArrows && <Arrows show={showArrows}></Arrows>}
        <div className={classes.containerContent}>
          {children.map((child, i) => (
            <div key={i} className={classes.content}>
              <Sensor
                className={classes.triggerLeft}
                href={`#carrousel-slide-${
                  i > 0 ? (i - 1) % children.length : children.length - 1
                }`}
              />
              <div id={`carrousel-slide-${i}`} className={classes.contentItem}>
                {child}
              </div>
              <Sensor
                href={`#carrousel-slide-${(i + 1) % children.length}`}
                className={classes.triggerRight}
              />
            </div>
          ))}
        </div>
        {showBullets && (
          <div className={classes.bulletContainer}>
            <Bullets items={children}></Bullets>
          </div>
        )}
      </div>
    </div>
  )
}
