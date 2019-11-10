import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"

interface IProps {

}
export default function School({ }: IProps) {

  return (
    <div className='school-page'>
      <div className="page-info">
      <PageInfo title='档案袋' orient='horizonal' pageInfo={PAGE_MOCK_INFO} />
      </div>
    </div>
  )
}

