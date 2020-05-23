# buycar

实现一个非常简单的 购物车详情页 商品编辑功能。  

业务实现逻辑：  
1、useBuycarData.js 负责管理整个购物清单数据的逻辑，内部定义一个 reducer 的函数，用来处理各种数据修改。同时对外暴露3个对象：list(购买清单列表信息)、cost(清单总费用)、dispatch(修改数据状态的dispatch)  
2、Buycar.js 负责购物清单页的全部可视化对象，通过使用 useBuycarData() 获取清单数据并分发给各个模块。  
3、BuycarContext.js 负责提供全局数据共享  
4、List.js  负责渲染全部清单列表，通过useContext()获取 BuycarContext，将共享对象中的 list数据和dispatch对象 通过属性传值 传递给子组件。  
5、ListItem.js 负责渲染单条清单，将父组件 List 传递过来的清单信息显示出来，当发生修改(改数量或删除本条清单)时，通过 dispatch 将要进行的操作告知 useBuycarData。  
6、PayBt.js 负责显示清单总费用和实现“订单提交”。  

补充说明：OneProductData.js、OneItemData.js
由于未使用TypeScript编写，所以临时用2个数据模型代替。  
OneProductData.js 用来定义 某商品的属性信息 数据模型(商品pid、商品名称、商品单价) 
OneItemData.js 用来定义 购物清单上的单条记录 数据模型(除商品信息外，还有购买数量、费用小计)
