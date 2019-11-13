import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { BANK_DATA } from "../../lib/data/bank"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"
import bg from '../../assets/images/pages/bank/bg.png'
import Background from "../../components/Background"

export default function Bank({ history }: RouteComponentProps) {

  return (
    <div className='page c-flex-column-center c-use-background'>
      <Background img={bg} />
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo
          title='档案袋'
          orient='horizonal'
          pageInfo={BANK_DATA}
          color='#f4d278' textColor='#4A513B' wrapperColor='#4A513B'
          fieldTitle='主要领域' />
      </div>
    </div>
  )
}

