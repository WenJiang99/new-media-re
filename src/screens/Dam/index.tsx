import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { DAM_DATA } from "../../lib/data/dam"
import { RouteComponentProps } from "react-router"
import { Button } from "antd"
import Background from "../../components/Background"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/dam/bg.png'

export default function School({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={DAM_DATA}
          wrapperColor='#660000' color='#F9E0AA' textColor='#5A2A00'
          fieldTitle='从事领域' />
      </div>
    </div>
  )
}

