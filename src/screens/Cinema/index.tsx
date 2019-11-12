import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"
import { CINEMA_DATA } from "../../lib/data/cinema"
import PageMenuButton from "../../components/PageMenuButton"
import { RouteComponentProps } from "react-router"

interface IProps {

}
export default function School({history }: RouteComponentProps) {

  return (
    <div className='school-page c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={CINEMA_DATA} fieldTitle='影片名称' descriTitle='主要情节' />
      </div>
    </div>
  )
}

