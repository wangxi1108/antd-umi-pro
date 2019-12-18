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
    const {startHobby} = this.props
    window.console.log('拿父亲的hobby',startHobby)
  }

  change = (e) => {
    e.preventDefault()
    this.setState({
      likes:e.target.value
    })
  }

  save = () => {
    const { likes } = this.state
    const { childFun } = this.props
    // this.props.childFun(likes)
    childFun(likes)
    this.setState({
      likes:''
    })
  }

  render () {
    return (
      <div>
        <Input maxLength={10} placeholder="输入" style={{ width: '200px' }} onChange={this.change} />
        <Button type='primary' onClick={this.save}>保存</Button>
      </div>
      )
    }
}

export default Edit;

