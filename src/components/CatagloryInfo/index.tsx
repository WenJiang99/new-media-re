import * as React from "react"
import { ICatagloryInfo, IPersonInfo } from "../../interfaces/cataglory";
import ItemSelector from "../ItemSelector";
import './index.less'
import { isMobile } from "../../lib/commons/ulti";

// TODO:cataglory component 
interface IProps {
  personList: IPersonInfo[],
  fieldTitle?: string
  descriTitle?: string
  initIndex: number
  color?: string
}
export default function CatagloryInfo({ personList, fieldTitle, descriTitle, initIndex, color }: IProps) {
  const INIT_INDEX = 0
  // 移动端滚动修复
  // const scrollable  (window.innerWidth < 450 && window.orientation === 0) || (window.innerWidth < 900 && window.orientation === 90)
  const scrollable = isMobile()
  const [currentIndex, setCurrentIndex] = React.useState(INIT_INDEX)
  let currentPerson = currentIndex >= personList.length ? personList[0] : personList[currentIndex]


  console.log(window.orientation, 'direction')
  return (
    <div className='cataglory-list'>
      <div className="cataglory-container">
        <div className="person-container">
          <div className="person-info">
            <div className="person-info-field">
              <div className="person-info-title">
                {fieldTitle || '从事领域'}
              </div>
              <div className="person-info-value">
                {currentPerson.field}
              </div>
            </div>
            <div className="person-info-descri" style={{
              overflow: scrollable ? 'auto' : 'hidden'
            }}>
              <div className="person-info-title descri-title">
                {descriTitle || '主要事迹'}
              </div>
              <div className="descri-info">
                <div className="person-info-value">
                  {currentPerson.description}
                </div>
              </div>
            </div>
          </div>
          <div className="person-pic">
            <div className="person-pic-img c-flex-column-center">
              <img src={currentPerson.img} alt="" />
            </div>
            <div className="person-pic-name">{currentPerson.name}</div>
          </div>
        </div>
        <div className="item-selector-list c-flex-row-center">
          {
            Object.keys(personList).map(index =>
              <div className='item-selector-item' key={index + "keyeeeee"}>
                <ItemSelector index={+index + 1} cb={() => setCurrentIndex(+index)} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}