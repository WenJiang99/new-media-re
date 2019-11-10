import * as React from "react"
import "./index.less"
import { ITagInfo } from "src/interfaces/tag"
import TagItem from "../TagItem"

interface IProps {
  tagList: ITagInfo[],
  orient: 'horizontal' | 'vertical'
}
export default function TagList({ tagList, orient }: IProps) {

  return (
    <div className="tag-list-component">
      <div className="tag-list-container">
        <div className={"tag-list-items " + (orient === 'horizontal' ? 'horizontal-list' : 'vertical-list')}>
          {tagList.map(item => <TagItem title={item.text} cb={item.cb} />)}
        </div>
      </div>
    </div>
  )

}