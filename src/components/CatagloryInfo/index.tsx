import * as React from "react"
import { ICatagloryInfo, IPersonInfo } from "src/interfaces/cataglory";
import ItemSelector from "../ItemSelector";
import './index.less'

// TODO:cataglory component 
interface IProps {
  personList: IPersonInfo[]
}
export default function CatagloryInfo({ personList }: IProps) {
  const INIT_INDEX = 0
  const [currentIndex, setCurrentIndex] = React.useState(INIT_INDEX)
  const currentPerson = personList[currentIndex]
  return (
    <div className='cataglory-list'>
      <div className="cataglory-container">
        <div className="person-container">
          <div className="person-info">
            <div className="person-info-field">
              <div className="person-info-title">从事领域</div>
              <div className="person-info-value">
                {currentPerson.field}
              </div>
            </div>
            <div className="person-info-descri" >
              <div className="person-info-title">主要事迹</div>
              <div className="person-info-value">
                {currentPerson.description}
              </div>
            </div>
          </div>
          <div className="person-pic c-flex-column-center">
            <div className="person-pic-img c-flex-column-center">
              <img src={currentPerson.img} alt="" />
            </div>
            <div className="person-pic-name">{currentPerson.name}</div>
          </div>
        </div>
        <div className="item-selector-list c-flex-row-center">
          {
            Object.keys(personList).map(index =>
              <div className='item-selector-item' key={index}>
                <ItemSelector index={+index + 1} cb={() => setCurrentIndex(+index)} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}