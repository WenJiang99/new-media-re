import * as React from 'react'
import './index.less'
import { RouteComponentProps } from 'react-router'
import { Button, Icon } from 'antd'

export default function PageMenuButton({ history }) {
  return (
    <div className="button-group c-flex-row-center">
      <Button onClick={() => history.goBack()}>
        <Icon type='double-left'></Icon>
      </Button>
      <Button onClick={() => history.push('/home')}>
        <Icon type='home'></Icon>
      </Button>
      <Button onClick={() => history.goForward()}>
        <Icon type='double-right'></Icon>
      </Button>
    </div>
  )
}
