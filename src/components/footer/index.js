import React from "react"
import classes from "./footer.module.scss"
import { useTranslate } from "./../../utils/useTranslate"
export const Footer = () => {
  const { t } = useTranslate()
  return (
    <div className={classes.container}>
      <div className={classes.navFotter}>{t("footer-text-1")}</div>      
      <div className={classes.logoFooter}>Logo</div>
      <div className={classes.secondSlot}>{t("footer-text-2")}</div>
    </div>
  )
}
