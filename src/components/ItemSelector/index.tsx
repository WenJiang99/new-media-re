import * as React from "react"
import './index.less'

interface IProps {
  index: number
  cb?: () => any
  color?: string
}

export default function ItemSelector({ index, cb, color }: IProps) {
  function _cb() {
    cb && cb()
  }
  return (
    <div className="item-selector" onClick={() => _cb()} style={{ backgroundColor: color || 'darkgrey' }}>
      <div className="item-selector-container">
        <div className="item-selector-index">{index}</div>
      </div>
    </div>

  )
}