import * as React from "react"
import "./index.less"


interface IProps {
  title: string,
  cb?: () => {}
}
export default function TagItem({ title, cb }: IProps) {
  const [isShow, setIsShow] = React.useState(false)
  function _cb() {
    setIsShow(!isShow)
    cb && cb()
  }
  return (
    <div className={"tag-item-component " + (isShow ? "show-item" : "")} onClick={_cb}>
      <div className={"tag-container"}>
        <div className="tag-title">
          {title}
        </div>
      </div>
    </div>
  )
}