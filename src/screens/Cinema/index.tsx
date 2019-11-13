import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { CINEMA_DATA } from "../../lib/data/cinema"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/cinema/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋'
          orient='horizonal'
          pageInfo={CINEMA_DATA}
          wrapperColor='#474443' color='#D2CDE6' textColor='#5E5872'
          fieldTitle='主要情节' />
      </div>
    </div>
  )
}

