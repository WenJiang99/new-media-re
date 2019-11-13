import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { SCHOOL_DATA } from "../../lib/data/school"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/school/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={SCHOOL_DATA} color='#f4d278' fieldTitle='人物简评' />
      </div>
    </div>
  )
}

