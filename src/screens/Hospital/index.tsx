import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { HOSPITAL_DATA } from "../../lib/data/hospital"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/hospital/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={HOSPITAL_DATA}
          wrapperColor='#73572E' color='#F4D278' textColor='#5A2A00'
          fieldTitle='主要领域' />
      </div>
    </div>
  )
}

