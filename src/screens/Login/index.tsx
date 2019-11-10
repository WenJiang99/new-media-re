import * as React from "react"
import { Link } from "react-router-dom"
import { MAP_SPLIT_IMG_COUNT, MAP_IMG_ROOT_PATH } from "../../lib/commons/contants"
import { Button } from "antd"
export default function Login({ history }) {
  const imgPathList = []
  function createImgPath() {
    for (let i = 0; i < MAP_SPLIT_IMG_COUNT; i++) {
      imgPathList.push(MAP_IMG_ROOT_PATH + i + ".png")
    }
  }
  createImgPath()
  return (
    <div className="login-page">
      <Button onClick={() => history.push("/home")}>Home</Button>
      <Button onClick={() => history.push("/user")}>User</Button>
      <div className="img-container">
        {/* {imgPathList.map((item, index) => {
          return (
            <div className="img-item" key={item}>
              <img src={require("../../" + item)} />
            </div>)
        })} */}
      </div>
    </div>
  )
}