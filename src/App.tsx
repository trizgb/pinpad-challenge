import { FC, useState, useEffect } from 'react'
import Container from './components/Container'
import Row from './components/Row'
import Button from './components/Button'
import Display from './components/Display'
import Text from './components/Text'
import { formatTextWithAsterisk } from './helpers/text'

const App: FC = () => {
  const pinCodeMock = "2468"

  const [ pinCode, setPinCode ] = useState<string[]>([])
  const [ displayPinCode, setDisplayPinCode ] = useState('')
  const [ feedback, setFeedback ] = useState('Enter your PIN Code')
  const [ attempts, setAttempts ] = useState(0)

  const handlePinCode = (value: string) => {
    const nextValues = [...pinCode, value].slice(0, 4)
    setPinCode(nextValues)

    const nextString = nextValues.join('')
    setDisplayPinCode(nextString)
  }

  useEffect(() => {
    if (displayPinCode.length === 4) {
      if (displayPinCode !== pinCodeMock) {
        setFeedback('Incorrect PIN Code 🔴')
        setPinCode([])
        setDisplayPinCode('')
        setAttempts(attempts + 1)
      }

      if (displayPinCode === pinCodeMock) {
        setFeedback('Correct PIN Code ✅')
        setPinCode([])
        setDisplayPinCode('')
        setAttempts(0)
      }
    }

    if(attempts >= 3) {
      setFeedback('Locked 🟡')

      // intervalo de tiempo de 30s, despues setAttempts(0)
    }
  }, [ displayPinCode, attempts ])

  console.log(attempts)

  return (
    <main style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Text styles={{ textAlign: 'center', marginBottom: 30 }}>{feedback}</Text>
        <Display styles={{ marginBottom: 30 }} isHidden={attempts >= 3}>{formatTextWithAsterisk(displayPinCode)}</Display>
        <Row isHidden={attempts >= 3}>
          <Button onClick={handlePinCode.bind(undefined, '1')}>1</Button>
          <Button onClick={handlePinCode.bind(undefined, '2')}>2</Button>
          <Button onClick={handlePinCode.bind(undefined, '3')}>3</Button>
        </Row>
        <Row isHidden={attempts >= 3}>
          <Button onClick={handlePinCode.bind(undefined, '4')}>4</Button>
          <Button onClick={handlePinCode.bind(undefined, '5')}>5</Button>
          <Button onClick={handlePinCode.bind(undefined, '6')}>6</Button>
        </Row>
        <Row isHidden={attempts >= 3}>
          <Button onClick={handlePinCode.bind(undefined, '7')}>7</Button>
          <Button onClick={handlePinCode.bind(undefined, '8')}>8</Button>
          <Button onClick={handlePinCode.bind(undefined, '9')}>9</Button>
        </Row>
        <Row styles={{ justifyContent: 'center', marginBottom: 0 }} isHidden={attempts >= 3}>
          <Button onClick={handlePinCode.bind(undefined, '0')}>0</Button>
        </Row>
      </Container>
    </main>
  )
}

export default App

// Requirements
// ● Buttons should work with either touch or clicks [DONE]
// ● The pin should be hidden except for the last number [DONE]
// ● Hardcode somewhere in the code right PIN (which eventually will be checked against an API) [DONE]
// ● The pin is always max 4 digits long [DONE]
// ● When the user inputs 4 digits the pin is checked [DONE]
// ● If the inserted PIN is correct the screen displays OK and the pin is reset [DONE]
// ● If the inserted PIN is wrong the screen displays ERROR and the pin is reset [DONE]

// Bonus requirement
// ● Usage of TypeScript [DONE]
// ● After 3 wrong attempts the pin pad locks for 30 secs, showing LOCKED on the display