正确地址：https://github.com/xiaohuoni/umi-antd-pro    是从umijs的列子点进去的链接

1、路由自己写在 route.js里面的，请求得到。

2、connect写法：
方式1：
  const { productsMaModel: { pepleList }} = this.props;
  export default connect(({ productsMaModel }) => ({ productsMaModel}))(Products)
  //productsMaModel是对应的model名字，拿到的数据都在productsMaModel大对象中。

方式2：connect的语法糖，传的也是productsMaModel是对应的model名字。
  @connect(({ productsMaModel }) => ({  productsMaModel}))
  const { productsMaModel: { pepleList }} = this.props;
  export default Products;



