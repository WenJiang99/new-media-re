import * as React from 'react'
import { Link } from "react-router-dom"
import './index.less'
import pic from "../../assets/images/004.jpg"

import { Button } from "antd"
import VPageInfo from '../../components/VPageInfo'


export default function Home({ history }) {
  const canvasRef = React.useRef(null)
  const [canvasW, setCanvasW] = React.useState(100)
  function createCanvas() {
    const ctx = canvasRef.current.getContext("2d")
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(canvasW, 0)
    ctx.lineTo(canvasW, canvasW)
    ctx.lineTo(0, canvasW)
    ctx.fillStyle = "#fff"
    ctx.fill()
    // ctx.closePath()
  }
  let i = 10
  React.useEffect(() => {
    createCanvas()
    setInterval(() => {
      setCanvasW(200)

    }, 1000)
  })
  return (
    <div className="main">
      <VPageInfo />
    </div>
  )
}
