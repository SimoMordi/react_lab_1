import { useState } from 'react'
import './index.css'

const ColorChanger = () => {

const [backgroundColor, setbackgroundColor] = useState('red')
const colorArray = ['red', 'green', 'blue', 'yellow', 'purple']

const randomColor = () => {
    const randomColorIndex = Math.floor(Math.random() * colorArray.length) 
    return colorArray[randomColorIndex]
}
  return (
    <div>

      <button className={backgroundColor} onClick={() => setbackgroundColor(randomColorIndex())}>Random Color</button>

    </div>
  )
}

export default ColorChanger

