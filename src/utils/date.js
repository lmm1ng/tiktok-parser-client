export const dateConverter = string => {
  const date = new Date(string)
  if (date instanceof Date && !isNaN(date)) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  }
  return ''
}
