import { useIntl } from "gatsby-plugin-intl"

export function useTranslate() {
  const intl = useIntl()
  const locale = intl.locale
  const t = key => {
    return intl.formatMessage({ id: key })
  }

  return { t, locale }
}
