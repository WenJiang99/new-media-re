import * as React from "react"
import "./index.less"
import wrapperPic from "../../assets/images/pages/wrapper.png"
import wrapperOpenPic from "../../assets/images/pages/wrapper_open.png"
import wrapperButtonPic from "../../assets/images/pages/button.png"
import TagItem from "../TagItem"
import { ICatagloryInfo } from "../../interfaces/cataglory"
import CatagloryInfo from "../CatagloryInfo"

export interface IProps {
  title: string
  pageInfo: ICatagloryInfo
  orient: 'horizonal' | 'vertical'
  color?: string
}


export default function PageInfo({ title, pageInfo, orient, color }: IProps) {
  const INIT_INDEX = null

  const [isOpen, setIsOpen] = React.useState(false)
  const [currentKey, setCurrentKey] = React.useState(INIT_INDEX)
  const [showTag, setShowTag] = React.useState(false)
  const cataglory: string[] = Object.keys(pageInfo)

  React.useEffect(() => {
    isOpen && setTimeout(() => setShowTag(true), 1000)
  }, [isOpen])

  return (
    <div className="page-info-component page-open-transition">
      <div className="page-container content-show-transition">
        {
          currentKey ?
            <div className="cataglory-open-transition page-open">
              {/* <div className="cataglory-wrapper">
                <img src={wrapperOpenPic} alt="" />
              </div> */}
              <div className="page-open-wrapper">
                <div className={"tag-list"}>
                  {
                    cataglory.map(item => (
                      <div className={"tag-item " + (item === currentKey ? "active-item" : "")} key={item} >
                        <TagItem title={item} cb={() => setCurrentKey(item)} />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='cataglory-info' style={{ backgroundColor: color || '#ffff99' }}>
                <CatagloryInfo personList={pageInfo[currentKey]} />
              </div>
            </div>
            :
            <div className="page-unopen">
              <div className={"tag-list " + (showTag ? "tag-list-open" : "tag-list-unopen")}>
                {
                  cataglory.map(item => (
                    <div className={"tag-item"} key={item} >
                      <TagItem title={item} cb={() => setCurrentKey(item)} />
                    </div>
                  ))
                }
              </div>
              <div className="page-unopen-info" style={{ backgroundColor: color || '#ffff99' }}>
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
        }
      </div>
    </div>
  )
}