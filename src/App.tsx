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
  const [ timeLeft, setTimeLeft ] = useState(10)

  const handlePinCode = (value: string) => {
    const nextValues = [...pinCode, value].slice(0, 4)
    setPinCode(nextValues)

    const nextString = nextValues.join('')
    setDisplayPinCode(nextString)
  }

  const resetPinPad = () => {
    setAttempts(0)
    setTimeLeft(10)
    setFeedback('Enter your PIN Code')
  }

  useEffect(() => {
    if (!timeLeft || !attempts) resetPinPad()
  }, [ timeLeft, attempts ])

  useEffect(() => {
    if (displayPinCode.length === 4) {
      if (displayPinCode !== pinCodeMock) {
        setFeedback('Incorrect PIN Code 🔴')
        setPinCode([])
        setDisplayPinCode('')
        if (attempts < 3) setAttempts(attempts + 1)
      }

      if (displayPinCode === pinCodeMock) {
        setFeedback('Correct PIN Code ✅')
        setPinCode([])
        setDisplayPinCode('')
        setAttempts(0)
      }
    }
  }, [ displayPinCode, attempts ])

  useEffect(() => {
    if (!timeLeft) return

    if (attempts === 3) {
      setFeedback('Maximun attempts reached')
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [ timeLeft, attempts ])

  return (
    <main style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Text styles={{ textAlign: 'center', marginBottom: 30 }}>{feedback}</Text>
        <Display styles={{ marginBottom: 30 }} isHidden={attempts === 3 && timeLeft > 0}>{formatTextWithAsterisk(displayPinCode)}</Display>
        <Row styles={{ width: 100, padding: 10, border: '2px solid #E8E8E8', borderRadius: '5px' }} isHidden={attempts < 3 || timeLeft === 0}>
          <Text styles={{ fontFamily: 'Source Code Pro, monospace' }}>{timeLeft} secs</Text>
        </Row>
        <Row isHidden={attempts === 3 && timeLeft > 0}>
          <Button onClick={handlePinCode.bind(undefined, '1')}>1</Button>
          <Button onClick={handlePinCode.bind(undefined, '2')}>2</Button>
          <Button onClick={handlePinCode.bind(undefined, '3')}>3</Button>
        </Row>
        <Row isHidden={attempts === 3 && timeLeft > 0}>
          <Button onClick={handlePinCode.bind(undefined, '4')}>4</Button>
          <Button onClick={handlePinCode.bind(undefined, '5')}>5</Button>
          <Button onClick={handlePinCode.bind(undefined, '6')}>6</Button>
        </Row>
        <Row isHidden={attempts === 3 && timeLeft > 0}>
          <Button onClick={handlePinCode.bind(undefined, '7')}>7</Button>
          <Button onClick={handlePinCode.bind(undefined, '8')}>8</Button>
          <Button onClick={handlePinCode.bind(undefined, '9')}>9</Button>
        </Row>
        <Row styles={{ justifyContent: 'center', marginBottom: 0 }} isHidden={attempts === 3 && timeLeft > 0}>
          <Button onClick={handlePinCode.bind(undefined, '0')}>0</Button>
        </Row>
      </Container>
    </main>
  )
}

export default App
