import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { TERRACE_DATA } from "../../lib/data/terrace"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/terrace/bg.png'
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
          pageInfo={TERRACE_DATA}
          wrapperColor='#7FC8BB' color='#FAF6B8' textColor='#5BA997'
          fieldTitle='主要领域' />
      </div>
    </div>
  )
}

