export const formatTextWithAsterisk = (text: string) => {
  return text.replace(/\d(?=\d{1})/g, "*")
}
