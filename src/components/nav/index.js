import React, { useState } from "react"
import classes from "./nav.module.scss"
import { useTranslate } from "./../../utils"
import { Link, navigate } from "gatsby"
import { getClassNames } from "../../utils/styles"
import { Icon } from "../../components/icon"

export const Nav = ({ selected }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, locale } = useTranslate()

  const navItems = [
    { name: t("menu-home"), path: "/", key: "home" },
    { name: t("menu-about"), path: "/about", key: "about" },
    { name: t("menu-updates"), path: "/updates", key: "updates" },
    { name: t("menu-contact"), path: "/contact", key: "contact" },
  ]
  const onSelectLang = e => {
    const url = window.location.href.split("/").splice(4).join().split("#")[0] // TODO: fix hardcoded number
    navigate(`/${e.target.value}/${url}`)
  }

  const onClickMenuButton = () => {
    console.log("open")
    setIsMenuOpen(!isMenuOpen)
  }

  const containerClassMap = getClassNames({
    [classes.container]: true,
    [classes.showMenu]: isMenuOpen,
  })

  return (
    <div className={containerClassMap}>
      <div className={classes.logo}>Logo</div>
      <div className={classes.navItems}>
        {navItems.map((item, i) => {
          const classMap = getClassNames({
            [classes.item]: true,
            [classes.selected]: selected === item.key,
          })
          return (
            <div key={i} className={classMap}>
              <Link to={`/${locale}${item.path}`}>{item.name}</Link>
            </div>
          )
        })}
        <hr className={classes.separator} />
        <select value={locale} onChange={onSelectLang}>
          {/* TODO: get langs from i18n in config*/}
          <option value="es">Es</option>
          <option value="en">En</option>
        </select>
      </div>
      <div onClick={onClickMenuButton} className={classes.icoMenu}></div>      
    </div>
  )
}
