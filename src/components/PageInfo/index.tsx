import * as React from "react"
import "./index.less"
import wrapperPic from "../../assets/images/pages/wrapper.png"
import wrapperButtonPic from "../../assets/images/pages/button.png"
import TagItem from "../TagItem"

export interface IProps {
  title: string
  pageInfo: ICatagloryInfo
  orient: 'horizonal' | 'vertical'
}
export interface ICatagloryInfo {
  [k: string]: IPersonInfo[]
}

export interface IPersonInfo {
  name: string
  field: string
  description: string,
  img: string,
}

export default function PageInfo({ title, pageInfo, orient }: IProps) {

  const [isOpen, setIsOpen] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(-1)
  const cataglory: string[] = Object.keys(pageInfo)
  return (
    <div className="page-info-component">
      <div className="page-container">
        <div className="page-buttons">
          <div className={"page-buttons-wrapper" + (isOpen ? " open-wrapper" : " ")} >
            <img src={wrapperPic} alt="" />
          </div>
          <div className={"page-buttons-button " + (isOpen ? "open-wrapper-button" : "unopen-wrapper-button")} onClick={() => setIsOpen(true)}>
            <img src={wrapperButtonPic} alt="" />
          </div>
        </div>
        <div className="page-cataglory">
          <div className="page-cataglory-title">{title}</div>
          <div className="page-cataglory-items">
            <ul>
              {cataglory.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}