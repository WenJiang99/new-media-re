import * as React from "react"
import "./index.less"
import wrapperPic from "../../assets/images/pages/wrapper.png"
import wrapperOpenPic from "../../assets/images/pages/wrapper_open.png"
import wrapperButtonPic from "../../assets/images/pages/button.png"
import TagItem from "../TagItem"
import { ICatagloryInfo } from "../../interfaces/cataglory"
import CatagloryInfo from "../CatagloryInfo"
import { Button, Modal, Input, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import Background from "../Background"
import openBg from "../../assets/images/pages/wrapper_open.png"
import { DEFAULT_PAGE_COLOR, DEFAULT_WRAPPER_COLOR, DEFAULT_TEXT_COLOR } from "../../lib/commons/color"

type IProps = {
  title: string
  pageInfo: ICatagloryInfo
  orient: 'horizonal' | 'vertical'
  color?: string
  fieldTitle?: string
  descriTitle?: string
  wrapperColor?: string
  textColor?: string
}


export default function PageInfo({ title, pageInfo, orient, color, fieldTitle, descriTitle, wrapperColor, textColor }: IProps) {
  const INIT_INDEX = null
  const [MAX_FONT, MIN_FONT, FONT_STEP, INIT_FONT_SIZE] = [19, 12, 1, 14]
  const [REACH_MAX, REACH_MIN, MODAL_INIT] = [1, -1, 0]
  const [INIT_PAGE_WIDTH, PAGE_H_W_FACTOR, PAGE_CONTENT_FACTOR, PAGE_MIN_WIDTH] = [1050, 650 / 1050, 0.7, 1300]
  const INIT_PAGE_COLOR = color || DEFAULT_PAGE_COLOR


  const [isReset, setIsReset] = React.useState(false)
  const [pageColor, setPageColor] = React.useState(INIT_PAGE_COLOR)
  const [fontColor, setFontColor] = React.useState(textColor || DEFAULT_TEXT_COLOR)
  const [pageWidth, setPageWidth] = React.useState(INIT_PAGE_WIDTH)
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentKey, setCurrentKey] = React.useState(INIT_INDEX)
  const [showTag, setShowTag] = React.useState(false)
  const [fontSize, setFontSize] = React.useState(INIT_FONT_SIZE)
  const [showModal, setShowModal] = React.useState(MODAL_INIT)
  const cataglory: string[] = Object.keys(pageInfo)

  React.useEffect(() => {
    isOpen && setTimeout(() => setShowTag(true), 1000)
  }, [isOpen])

  React.useEffect(() => {

  })

  function initWindow() {
    window.innerWidth < PAGE_MIN_WIDTH ? setPageWidth(PAGE_MIN_WIDTH * PAGE_CONTENT_FACTOR) : setPageWidth(window.innerWidth * PAGE_CONTENT_FACTOR)
  }
  window.onresize = initWindow
  window.onload = initWindow
  return (
    <div className="page-info-component page-open-transition" style={{
      width: pageWidth + 'px',
      height: pageWidth * PAGE_H_W_FACTOR + 'px',
    }}>

      <div className="page-container content-show-transition" >
        {
          currentKey ?
            <div className="cataglory-open-transition page-open">
              <div className="button-groups c-flex-column-center">
                <Button onClick={() => fontSize >= MAX_FONT ? setShowModal(REACH_MAX) : setFontSize(fontSize + FONT_STEP)}>A+</Button>
                <Input
                  type='color'
                  placeholder={pageColor}
                  onChange={(e) => {
                    setPageColor(e.target['value'])
                  }}
                />
                <Input
                  type='color'
                  onChange={(e) => {
                    setFontColor(e.target['value'])
                  }}
                />

                <Button onClick={() => fontSize <= MIN_FONT ? setShowModal(REACH_MIN) : setFontSize(fontSize - FONT_STEP)}>A-</Button>
              </div>
              <Modal
                title='字体调节'
                keyboard={true}
                width={280}
                visible={showModal === REACH_MIN || showModal === REACH_MAX}
                onOk={() => setShowModal(MODAL_INIT)}
                onCancel={() => setShowModal(MODAL_INIT)}
              >字体不能再{showModal === REACH_MIN ? '小' : '大'}啦</Modal>
              <div className="page-open-wrapper c-use-background" style={{
                backgroundColor: wrapperColor || DEFAULT_WRAPPER_COLOR
              }}>
                {/* <Background img={openBg} opacity={1} layer={1} /> */}
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
              <div className='cataglory-info' style={{
                backgroundColor: pageColor || INIT_PAGE_COLOR,
                fontSize: fontSize + "px",
                color: fontColor || DEFAULT_TEXT_COLOR
              }}>
                <CatagloryInfo personList={pageInfo[currentKey]} fieldTitle={fieldTitle} descriTitle={descriTitle} initIndex={0} color={pageColor} />
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
              <div className="page-unopen-info" style={{
                backgroundColor: color || DEFAULT_PAGE_COLOR
              }}>
                <div className="page-buttons">
                  <div className={"page-buttons-wrapper" + (isOpen ? " open-wrapper" : " ")} style={{
                    backgroundColor: wrapperColor || DEFAULT_WRAPPER_COLOR
                  }} >
                    {/* <img src={wrapperPic} alt="" /> */}
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