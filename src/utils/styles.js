/**
 * Returns the classes provided in classMap divided with ' '
 * @param classMap
 */
export const getClassNames = classMap =>
  Object.keys(classMap)
    .filter(styleClass => classMap[styleClass])
    .join(" ")
