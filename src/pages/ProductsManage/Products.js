import React, { Component } from 'react'
import { Table, Divider, Form, Input, Select, DatePicker, Button, Modal,Tag } from 'antd'
import Link from 'umi/link';
import router from 'umi/router';
import { connect } from 'dva'
import moment from 'moment'
import styles from './Products.less'

// 添加表单
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const { Option } = Select;
const { RangePicker } = DatePicker;
const statusType = [
  { label: '未开单', value: '10' },
  {label:'成功',value:'20'},
  {label:'失败',value:'30'}
]
// @connect(({ productsMaModel }) => ({
//   productsMaModel}))
@Form.create()
// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }
  

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      addVisible: false,
      addform: {
        name: '',
        age: '',
        address:''
      }
    }
  } 
  

  componentDidMount () {
    const { dispatch } = this.props;
    dispatch({
      type: 'productsMaModel/nameFun',
    })
    dispatch({
      type: 'productsMaModel/getUsers',
    })
  }

  dateChange=(value, dateString)=> {
    // console.log('正确时间', dateString);
  }

  // 选择框写法
  // handleSelectChange = (val,aa) => {
  //   console.log(11,val,aa)
  // }

// 查询-------点击两次才？？？
  handleSubmit = e => {
    e.preventDefault();
    const { form:{getFieldsValue},dispatch} = this.props;
    const values = getFieldsValue()
    if (values.date && values.date.length>0) {
      values.startTime = moment(values.date[0]).format('YYYY-MM-DD')
      values.endTime = moment(values.date[1]).format('YYYY-MM-DD')
    } else {
      values.startTime = ''
      values.endTime=''
    }
    // console.log('条件', values)
    // 删除字段
    delete values.date
    dispatch({
      type: 'productsMaModel/searchParamsChange',
      payload: {
        // pageIndex: 1,
        ...values
      }
    })
    dispatch({ type: 'memberList/getUsers'})
    const { productsMaModel: {queryParams } } = this.props;
    // console.log('页面',queryParams)

  };

  handleReset = () => {
    const {form,dispatch} = this.props
    form.resetFields()
    dispatch({type: 'productsMaModel/resetSearchParams'})
  }

// 分页
  pageChange = (page) => {
    const { dispatch} = this.props;
    dispatch({
      type: 'productsMaModel/searchParamsChange',
      payload: {
        pageIndex: page
      }
    })
  }

  pageSizeChange = (current, size) => {
    const { dispatch} = this.props;
    dispatch({
      type: 'productsMaModel/searchParamsChange',
      payload: {
        pageIndex:1,
        pageSize: size
      }
    })
  }

  // 新增
  showModal = () => {
    this.setState({
      addVisible: true,
    });
  };

  handleOk = () => {
    const { form:{getFieldsValue}} = this.props;
    const values = getFieldsValue()
    this.setState({
      addVisible: false,
    });
    console.log(values, 22, values.addform)
    
  };

  handleCancel = e => {
    this.setState({
      addVisible: false,
    });
  };

  // 路由跳转
  goDetail = (key) => { 
    router.push({
      pathname: 'ProductDetail',
      query: {
        userId:key
      }
    })
  };

  render () {
    const { productsMaModel: { pepleList, queryParams } } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {addVisible,addform} = this.state
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        render: age => (
          <span>
            <Tag color={age > 112?'blue':'red'}>{age}</Tag>
          </span>
        ),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            {/* <a>record.name: {record.name}</a> */}
            {/* <Link to='ProductDetail?userId=010'>{record.name}</Link> */}
            <a onClick={this.goDetail.bind(this,record.key)}>{record.name}-详情</a>
            {/* <Link to="/productsManage/ProductDetail">{record.name}</Link> */}
            <Divider type="vertical" />
            <a>删除{record.key}</a>
          </span>
        ),
      },
    ];

    return (
      <div className={styles.product}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item label="用户名">
            {getFieldDecorator('name')(
              <Input placeholder="name" />,
            )}
          </Form.Item>
          <Form.Item label="年龄">
            {getFieldDecorator('age')(
              <Input type="age" placeholder="age" />,
            )}
          </Form.Item>
          <Form.Item label="状态">
            {getFieldDecorator('status')(
              <Select
                className={styles.width200}
                placeholder="请选择"
              >
                {
                  statusType.map((ele,index) => (
                    <Option value={ele.value} key={`s${index}m`}>{ele.label}</Option>
                  ))
                }
              </Select>,
          )}
          </Form.Item>
          <Form.Item label="日期">
            {getFieldDecorator('date')(
              <RangePicker
                format="YYYY-MM-DD"
                placeholder={['开始时间', '结束时间']}
                onChange={this.dateChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button type="default" onClick={this.handleReset}>清空</Button>
          </Form.Item>
        </Form>
        <Button type="default" onClick={this.showModal}>新增</Button>
        <Modal
          title="新增"
          visible={addVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              确认
            </Button>,
          ]}
        >
          <Form {...formItemLayout} ref="addform">
            <Form.Item label="用户名">
              {getFieldDecorator('addform.name')(
                <Input placeholder="addform.name" />,
            )}
            </Form.Item>
            <Form.Item label="年龄">
              {getFieldDecorator('addform.age')(
                <Input placeholder="addform.age" />,
            )}
            </Form.Item>
            <Form.Item label="地址">
              {getFieldDecorator('addform.address')(
                <Input placeholder="addform.address" />,
            )}
            </Form.Item>
          </Form>
        </Modal>
        <Table
          columns={columns}
          dataSource={pepleList}
          pagination={{
            pageSize: queryParams.pageSize,
            current: queryParams.pageIndex,
            total: pepleList.length,
            showSizeChanger: true,
            pageSizeOptions: ['2', '5', '10'],
            onChange: this.pageChange,
            onShowSizeChange:this.pageSizeChange,
            showTotal:(total, range)=>`${range[0]}-${range[1]} 总共${total}条`
        }}
        />
      </div>
    )
  }
}

export default connect(({ productsMaModel }) => ({ productsMaModel}))(Products)
// export default Products;


