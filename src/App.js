import React, { useEffect, useState } from 'react'
function App () {
  const [darkTheme, setDarkTheme] = useState({ background: 'white', color: 'black' })
  const [isDark, setIsDark] = useState(false)
  const [styleButton, setStyleButton] = useState({ background: 'black', color: 'white' })
  const [buttonText, setButtonText] = useState('Dark')
  const [info, setInfo] = useState('Welcome!')
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  const changeBg = () => {
    console.log()
    if (isDark === false) {
      setIsDark(true)
      setDarkTheme({ background: 'black', color: 'white' })
      setStyleButton({ background: 'white', color: 'black' })
      setButtonText('Light')
    } else {
      setIsDark(false)
      setDarkTheme({ background: 'white', color: 'black' })
      setStyleButton({ background: 'black', color: 'white' })
      setButtonText('Dark')
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date().toLocaleTimeString())
      if (new Date().getHours() > 5 && new Date().getHours() < 12) {
        setInfo('Good morning')
      } else if (new Date().getHours() > 11 && new Date().getHours() < 18) {
        setInfo('Good afternoon')
      } else if (new Date().getHours() > 17 && new Date().getHours() < 24) {
        setInfo('Good evening')
      } else if (new Date().getHours() > 23 && new Date().getHours() < 6) {
        setInfo('Good night')
      } else {
        setInfo('Error')
      }
    }, 1000)
  })
  return (
    <div className="App" style={ darkTheme }>
      <input type="button" value={buttonText} style={styleButton} onClick={changeBg}/>
      <div className='clock'>
        <div>{date}</div>
        <div style={{ fontSize: '50px' }}>{info}</div>
      </div>
    </div>
  )
}

export default App
