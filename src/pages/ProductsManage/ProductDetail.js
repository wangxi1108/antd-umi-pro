import React, { Component } from 'react'
import { Tag, Button, Icon } from 'antd'
import Edit from './components/Edit'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 20,
      editShow: false,
      hobby:['球球']
    }
  }

  editFun = () => {
    this.setState({
      editShow:true
    })
  }

  callback = (val) => {
    // console.log('callback', val)
    // 不能用数组直接push,要报错。。。。
    const { hobby } = this.state
    this.setState({
      hobby: [...hobby, val],
      editShow: false
    })
  }

  render () {
    // const { type, editShow,location } = this.props
    // console.log('location', location)// 获取当前地址参数
    const { type, editShow, hobby } = this.state
    let editInput = null
    if (editShow) {
      editInput = <Edit startHobby={hobby} childFun={this.callback} />
    } else {
      editInput= <Button onClick={this.editFun}>点击添加修改<Icon type="form" /></Button>
    }

    return (
      <div>
        <p> 基础语法：条件渲染。用了</p>
        <p>怎样 全局状态 设置与获取？？</p>
        {
          type === 20 ? <h3> 直接在标签的花括号{`{}`}写逻辑语句 </h3>:<i>就是这样写的</i>
        }
        <h4>1、添加个子组件</h4>
        <div>
          爱好：
          {
            hobby.map((ele) => (<Tag color="red" key={ele}>{ele}</Tag>))
          }
          {/* <Button onClick={this.editFun}>点击修改<Icon type="form" />
          </Button> */}
          {editInput}
        </div>
      </div>
      )
    }
}

export default ProductDetail;

