import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { GOVERMENT_DATA } from "../../lib/data/goverment"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/government/bg.png'
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
          pageInfo={GOVERMENT_DATA}
          wrapperColor='#1F9494' color='#B9CCBC' textColor='#5B7877'
          fieldTitle='主要职务' />
      </div>
    </div>
  )
}

