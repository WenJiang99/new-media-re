import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"
import { COSMODROME_DATA } from "../../lib/data/cosmodrome"
import { TRANSPORTATION_DATA } from "../../lib/data/transportation"
import PageMenuButton from "../../components/PageMenuButton"
import { RouteComponentProps } from "react-router"

interface IProps {

}
export default function School({ history }: RouteComponentProps) {

  return (
    <div className='cosmodrome-page c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={TRANSPORTATION_DATA} color='#f4d278' fieldTitle='主要职务' />
      </div>
    </div>
  )
}

