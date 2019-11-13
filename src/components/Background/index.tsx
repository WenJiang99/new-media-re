import * as React from 'react'
import './index.less'

interface Props {
  img: string,
  opacity?: number
  layer?: number
}
export default function Background({ img, opacity, layer }: Props) {
  return (
    <div className="page-background c-i-am-background" style={{ opacity: opacity || 0.5, zIndex: layer || -99 }}>
      <img src={img} alt="" />
    </div>
  )
}