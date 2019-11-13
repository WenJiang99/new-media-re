import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { TRANSPORTATION_DATA } from "../../lib/data/transportation"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/transportation/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={TRANSPORTATION_DATA}
          wrapperColor='#1F9494' color='#B9CCBC' textColor='#5B7877'
          fieldTitle='主要领域' />
      </div>
    </div>
  )
}

