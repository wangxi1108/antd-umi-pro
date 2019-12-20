import React, { Component } from 'react'
import { Tag, Button, Icon, Row, Col, Input, Select  } from 'antd'
import Edit from './components/Edit'

const { Option } = Select;
class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 20,
      editShow: false,
      hobby: ['球球'],
      search: {
        userName: 'Setfine Sun',
        status:''
      }
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

  // 选择框写用
  changeVal = (val, type) => {
    const {search} = this.state
    this.setState({
      search: {
        ...search,
        [type]:val
      }
    })
  }

  searchFun = () => {
    console.log('搜索',this.state.search)
  }

  render () {
    // const { type, editShow,location } = this.props
    // console.log('location', location)// 获取当前地址参数
    const { type, editShow, hobby,search } = this.state
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
        <h3>没在form的普通搜索参数</h3>
        <Row gutter={2}>
          <Col span={6}>
            <Input placeholder="名字" value={search.userName} onChange={(e)=>{this.changeVal(e.target.value,'userName')}} />
          </Col>
          <Col span={6}>
            <Select style={{ width: '100%' }} value={search.status} onChange={(val) => { this.changeVal(val,'status') }}>
              <Option value="开始">开始</Option>
              <Option value="结束">结束</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Button icon="search" type="primary" onClick={this.searchFun}>查询</Button>
          </Col>
        </Row>
        
      </div>
      )
    }
}

export default ProductDetail;

