import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"
import { COURT_DATA } from "../../lib/data/court"
import PageMenuButton from "../../components/PageMenuButton"
import { RouteComponentProps } from "react-router"

interface IProps {

}
export default function Court({history }: RouteComponentProps) {

  return (
    <div className='c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={COURT_DATA} color='#f4d278' fieldTitle='职务介绍' />
      </div>
    </div>
  )
}

