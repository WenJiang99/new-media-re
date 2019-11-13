import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { CARRIER_DATA } from "../../lib/data/carrier"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/carrier/bg.png'
import Background from "../../components/Background"

export default function Gymnasium({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={CARRIER_DATA}
          wrapperColor='#660000' color='#F9E0AA' textColor='#5A2A00'
          fieldTitle='主要领域' />
      </div>
    </div>
  )
}

