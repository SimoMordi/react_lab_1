import { useState } from 'react'
import './index.css'

const ColorChanger = () => {

  const [backgroundColor, setbackgroundColor] = useState()
  const colorArray = ['red', 'green', 'purple', 'blue']

  const randomColor = () => {
    const randomColorIndex = Math.floor(Math.random() * colorArray.length)
    return colorArray[randomColorIndex]
  }
  return (
    <div>

      <button className={backgroundColor} onClick={() => setbackgroundColor(randomColor())}>Random Color</button>

    </div>
  )
}

export default ColorChanger

