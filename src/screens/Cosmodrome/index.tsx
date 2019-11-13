import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { COSMODROME_DATA } from "../../lib/data/cosmodrome"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/cosmodrome/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={COSMODROME_DATA}
          wrapperColor='#1F9494' color='#B9CCBC' textColor='#5B7877'
          fieldTitle='主要职务' />
      </div>
    </div>
  )
}

