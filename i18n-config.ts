export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "ko"],
} as const

export type Locale = (typeof i18n)["locales"][number]
export type WithLocale = { currentLocale: Locale }
export type WithLocaleParam = { params: { lang: Locale } }
export type PDictionary = PartiallyRequired<
  Partial<Record<Locale, string>>,
  (typeof i18n)["defaultLocale"]
>

/** Takes a dictionary and conditionally return the corresponding output */
export const t = (locale: Locale, dictionary: PDictionary | string): string => {
  if (typeof dictionary === "string") return dictionary
  if (Object.prototype.hasOwnProperty.call(dictionary, locale)) {
    return dictionary[locale] as string
  }
  return dictionary[i18n.defaultLocale] as string
}
