import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { COURT_DATA } from "../../lib/data/court"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/court/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={COURT_DATA}
          wrapperColor='#81CEF4' color='#DDE9F1' textColor='#008FD7'
          fieldTitle='主要职务' />
      </div>
    </div>
  )
}

