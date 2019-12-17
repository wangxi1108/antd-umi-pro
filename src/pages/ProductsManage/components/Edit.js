import React, { Component } from 'react'
import{Input,Button } from 'antd'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes:''
    }
  }

  componentDidMount () {
    console.log('拿父亲的',this.props.like)
  }

  change = (e) => {
    e.preventDefault()
    // console.log(11, e.target.value)
    this.setState({
      likes:e.target.value
    })
  }

  save = () => {
    this.props.childFun(this.state.likes)
  }

  render () {
    const { like } = this.props
    console.log('like',like)
    return (
      <div>
        <Input maxLength={10} placeholder="输入" style={{ width: '200px' }} onChange={this.change} />
        <Button type='primary' onClick={this.save}>保存</Button>
      </div>
      )
    }
}

export default Edit;

