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
      console.log('callback',val)
      this.setState({
        hobby:['渣儿','啊哈']
      })
      // this.setState({
      //   editShow: false
      // })
    }

  

  render () {
    // const { type, editShow,location } = this.props
    // console.log('location', location)// 获取当前地址参数
    const { type, editShow, hobby } = this.state
    console.log('hobby',hobby)
    let editInput = null
    if (editShow) {
      editInput = <Edit like="原始爱好" childFun={this.callback} />
    } else {
      editInput= <Button onClick={this.editFun}>点击修改<Icon type="form" /></Button>
    }

    return (
      <div>
        <p> 基础语法：条件渲染。用一下 全局状态 设置与获取？？</p>
        {
          type===10?<h3> 有点夸张</h3>:<i>这样也行？</i>
        }
        <h4>添加个子组件</h4>
        <div>
          爱好：
          {
            hobby.map((ele,index) => (<Tag color="red" key={`hb${index}`}>{ele}</Tag>))
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

