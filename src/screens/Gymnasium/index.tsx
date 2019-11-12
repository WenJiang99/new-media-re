import * as React from "react"
import "./index.less"
import PageInfo from "../../components/PageInfo"
import { GYMNASIUM_DATA } from "../../lib/data/gymnasium"
import { Button, Icon } from "antd"
import { RouteComponentProps } from "react-router"
import PageMenuButton from "../../components/PageMenuButton"


export default function Gymnasium({ history }: RouteComponentProps) {

  return (
    <div className='cosmodrome-page c-flex-column-center'>
      <PageMenuButton history={history} />
      <div className="page-info">
        <PageInfo title='档案袋' orient='horizonal' pageInfo={GYMNASIUM_DATA} color='#f4d278' fieldTitle='体育项目' />
      </div>
    </div>
  )
}

