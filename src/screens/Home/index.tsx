import * as React from "react"
import "./index.less"
import { Button, Input, BackTop } from "antd"
import { H_W_FACTOR, MAP_INIT_WIDTH } from "../../lib/commons/contants"
import mapPic, { str2arr, PointType, MAP_FIELD_LIST, FieldType, adjustMapFieldPoint } from "../../lib/commons/map"
import { createCanvas, clearCanvas, ITipInfo } from "../../lib/commons/canvas"

const INIT_TIP_OBJ: ITipInfo = {
  point: {
    x: 0,
    y: 0
  },
  text: ""
}

export default function User({ history }) {
  const [imgWidth, setImgWidth] = React.useState(MAP_INIT_WIDTH)
  const [renderCanvas, setRenderCanvas] = React.useState(null)
  const [mapFieldList, setMapFieldList] = React.useState(MAP_FIELD_LIST)
  const canvasRef = React.useRef(null)
  const tipObj: ITipInfo = INIT_TIP_OBJ


  function adjustMapFieldList() {
    setMapFieldList(adjustMapFieldPoint(imgWidth / MAP_INIT_WIDTH))
  }

  function handleResize() {
    setImgWidth(document.body.clientWidth)
  }
  function initWindow() {
    setImgWidth(document.body.clientWidth)
  }

  React.useEffect(() => {
    renderCanvas ? createCanvas(canvasRef.current.getContext("2d"), renderCanvas, tipObj)
      : clearCanvas(canvasRef.current.getContext("2d"), { x: 0, y: 0 }, { x: imgWidth, y: imgWidth * H_W_FACTOR })
  }, [renderCanvas])

  React.useEffect(() => {
    adjustMapFieldList()
  }, [imgWidth])


  window.onresize = handleResize
  window.onload = initWindow


  const fieldStyle = {
    width: imgWidth + "px",
    height: imgWidth * H_W_FACTOR + "px",
  }
  return (
    <div className="home-page">
      <div className="map-container" style={fieldStyle}>
        <canvas id="map-canvas" className="map-canvas" ref={canvasRef} width={fieldStyle.width} height={fieldStyle.height} />
        <img src={mapPic} useMap="#home-map" className="map-img" id="map-img" style={fieldStyle} />
        <map name="home-map" id="home-map">
          {
            mapFieldList.map(field => <area
              key={field.field}
              shape="poly"
              coords={field.field}
              href={field.router}
              onMouseOver={(e) => {
                setRenderCanvas(str2arr(field.field, 1))
                tipObj.point.x = e.pageX
                tipObj.point.y = e.pageY
                tipObj.text = field.description
              }}
              onMouseOut={() => setRenderCanvas(false)}
            />)
          }
        </map>
        <BackTop />
      </div>
    </div>
  )
}