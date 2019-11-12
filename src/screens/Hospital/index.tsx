import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"
import { COSMODROME_DATA } from "../../lib/data/cosmodrome"
import { TRANSPORTATION_DATA } from "../../lib/data/transportation"
import { HOSPITAL_DATA } from "../../lib/data/hospital"
import PageMenuButton from "../../components/PageMenuButton"
import { RouteComponentProps } from "react-router"


export default function Hospital({ history }: RouteComponentProps) {

  return (
    <div className='cosmodrome-page c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={HOSPITAL_DATA} color='#f4d278' fieldTitle='领域贡献' />
      </div>
    </div>
  )
}

