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
  const [showTag, setShowTag] = React.useState(false)
  const cataglory: string[] = Object.keys(pageInfo)

  React.useEffect(() => {
    // isOpen && setTimeout(() => setShowTag(true), 1000)
    isOpen && setShowTag(true)
  }, [isOpen])

  return (
    <div className="page-info-component">
      <div className="page-container">
        <div className={"tag-list " + (showTag ? "tag-list-open" : "tag-list-unopen")}>
          {
            cataglory.map((item, index) => (
              <div className="tag-item" key={item}>
                <TagItem title={item} cb={() => setCurrentIndex(index)} />
              </div>
            ))
          }
        </div>
        {
          currentIndex > -1 ?
            <div>
              {currentIndex}
            </div>
            :
            <div className="page-unopen-info">

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
        }
      </div>
    </div>
  )
}