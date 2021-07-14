import { formatTextWithAsterisk } from './'

describe('formatTextWithAsterisk function', () => {
  test('should not replace with * the last character of a string with numbers', () => {
    const test = formatTextWithAsterisk('1234')
    expect(test).toEqual('***4')
  })

  test('should not replace with * the last character of a string with letters', () => {
    const test = formatTextWithAsterisk('testing')
    expect(test).toEqual('******g')
  })
})
