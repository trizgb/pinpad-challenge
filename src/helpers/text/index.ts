export const formatTextWithAsterisk = (text: string) => {
  return text.replace(/.(?=.{1})/g, "*")
}
