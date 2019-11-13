import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { GYMNASIUM_DATA } from "../../lib/data/gymnasium"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/gymnasium/bg.png'
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
          pageInfo={GYMNASIUM_DATA}
          wrapperColor='#73572E' color='#F4D278' textColor='#5A2A00'
          fieldTitle='体育项目' />
      </div>
    </div>
  )
}

