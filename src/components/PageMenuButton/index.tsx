import * as React from 'react'
import './index.less'
import { RouteComponentProps } from 'react-router'
import { Button, Icon } from 'antd'
import { PointType } from '../../lib/commons/map'


export default function PageMenuButton({ history }) {

  const BOUNDARY_POINT: PointType = {
    x: window.innerWidth * 0.9,
    y: window.innerHeight * 0.9
  }

  const INIT_POSITION: PointType = {
    x: window.innerWidth / 2,
    y: 10
  }

  const BOUNDARY_RANGE: number = 20


  const [position, setPosition] = React.useState(INIT_POSITION)
  const [showButton, setShowButton] = React.useState(false)
  return (
    <div className={"button-group c-flex-column-center " + (showButton ? "" : "onshow-button-animation")} draggable
      onDragEnd={(e) => {
        let [x, y] = [e.pageX, e.pageY]
        x < BOUNDARY_RANGE || x < (+BOUNDARY_POINT.x - BOUNDARY_RANGE) && y > BOUNDARY_RANGE && y < (+BOUNDARY_POINT.y - BOUNDARY_RANGE) && setPosition({ x, y })
      }}
      style={{
        top: position.y,
        left: position.x,
        zIndex: 99
      }}
    >
      <div className="button-opener">
        <Button
          size="large"
          onClick={() => setShowButton(!showButton)}
        >
          <Icon type='plus-circle' spin />
        </Button>
      </div>
      {
        showButton ? <div className="button-list c-flex-row-center">

          <div className="button-item">
            <Button onClick={() => history.goBack()}>
              <Icon type='double-left'></Icon>
            </Button>
          </div>
          <div className="button-item">
            <Button onClick={() => history.push('/home')}>
              <Icon type='home'></Icon>
            </Button>
          </div>
          <div className="button-item">
            <Button onClick={() => history.goForward()}>
              <Icon type='double-right'></Icon>
            </Button>
          </div>
        </div>
          :
          null
      }
    </div>
  )
}
