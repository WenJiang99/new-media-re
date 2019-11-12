import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { PAGE_MOCK_INFO } from "../../lib/data/page"
import { SCHOOL_DATA } from "../../lib/data/school"
import PageMenuButton from "../../components/PageMenuButton"
import { RouteComponentProps } from "react-router"


export default function School({history }: RouteComponentProps) {

  return (
    <div className='school-page c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={SCHOOL_DATA} color='#f4d278' fieldTitle='人物简评' />
      </div>
    </div>
  )
}

