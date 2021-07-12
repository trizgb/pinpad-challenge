import { FC, useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'

const App: FC = () => {
  const [ pin, setPin ] = useState<string[]>([])
  const [ y, setY ] = useState<string>('')
  const [ feedback, setFeedback ] = useState('Enter your PIN Code')

  const handleX = (value: string) => {
    const nextValues = [...pin, value]
    setPin(nextValues)

    const nextString = nextValues.join('')
    setY(nextString.replace(/\d(?=\d{1})/g, "*"))
  }

  console.log(pin)

  return (
    <div style={{ padding: 20, width: 'fit-content', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', background: '#D0D3D4' }}>
      <p>{feedback}</p>
      <Input styles={{ marginBottom: 20 }}>{y}</Input>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleX.bind(undefined, '1')}>1</Button>
        <Button onClick={handleX.bind(undefined, '2')}>2</Button>
        <Button onClick={handleX.bind(undefined, '3')}>3</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleX.bind(undefined, '4')}>4</Button>
        <Button onClick={handleX.bind(undefined, '5')}>5</Button>
        <Button onClick={handleX.bind(undefined, '6')}>6</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleX.bind(undefined, '7')}>7</Button>
        <Button onClick={handleX.bind(undefined, '8')}>8</Button>
        <Button onClick={handleX.bind(undefined, '9')}>9</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <Button onClick={handleX.bind(undefined, '0')}>0</Button>
      </div>
    </div>
  )
}

export default App

// Requirements
// ● Buttons should work with either touch or clicks [DONE]
// ● The pin should be hidden except for the last number [DONE]
// ● Hardcode somewhere in the code right PIN (which eventually will be checked against an API)
// ● The pin is always max 4 digits long
// ● When the user inputs 4 digits the pin is checked
// ● If the inserted PIN is correct the screen displays OK and the pin is reset
// ● If the inserted PIN is wrong the screen displays ERROR and the pin is reset

// Bonus requirement
// ● Usage of TypeScript
// ● After 3 wrong attempts the pin pad locks for 30 secs, showing LOCKED on the display