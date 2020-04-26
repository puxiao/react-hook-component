# 使用useContext和useReducer实现操作全局共享数据

激动的心，颤抖的手，忘掉Redux，拥抱 React Hook！

#### 实现原理
用 useContext 实现“获取全局数据”  
用 userReducer 实现“修改全局数据”  

#### 实现思路
1、用React.createContext()定义一个全局数据对象；  
2、在父组件中用 userReducer 定义全局变量xx和负责抛出修事件的dispatch；  
3、在父组件之外，定义负责具体修改全局变量的处理函数reducer，根据修改xx事件类型和参数，执行修改xx的值；  
4、在父组件中用 <XxxContext.Provider value={{xx,dispathc}}> 标签把 全局共享数据和负责抛出修改xx的dispatch；  
5、在子组件中用 useContext 获取全局变量；
6、在子组件中用 xxContext.dispatch 去抛出修改xx的事件，携带修改事件类型和参数；  

#### 伪代码演示

假设React组件需求为：  
1、有全局数据变量count；  
2、不同层级的子组件均可获取并修改全局变量count；  

父组件 伪代码如下：  

    import CountContext from './CountContext';

    const initialCount = 0; //定义count的默认值

    //修改count事件处理函数，根据修改参数进行处理
    function reducer(state, action) {
      //注意这里先判断事件类型，然后结合携带的参数param 来最终修改count
      switch (action.type) {
        case 'add':
            return state + action.param;
        case ...
      }
    }

    function ParentComponent() {
      //定义全局变量count，以及负责抛出修改事件的dispatch
      const [count, dispatch] = useReducer(reducer, initialCount);

     //请注意：value={{count,dispatch} 是整个代码的核心，把负责抛出修改count的抛出对象dispatch暴露给所有子组件
      return <CountContext.Provider value={{count,dispatch}}>
          <div>
            ParentComponent - count={count}
            <ComponentA />
            <ComponentB />
            <ComponentC />
          </div>
        </CountContext.Provider>
    }

    export default ParentComponent;


子组件 伪代码如下：  

    import CountContext from './CountContext';
    
    function ChildCopmpoent() {
      //引入全局共享对象
      const countContext = useContext(CountContext);

      const doHandler = () => {
        //若想修改全局count，先获取count对应的修改抛出事件对象dispatch，然后通过dispatch将修改内容抛出
        //抛出的修改内容为：{type:'add',param:xxx}，即告诉count的修改事件处理函数，本次修改的类型为add，参数是param
        //这里的add和param完全是根据自己实际需求自己定义的
        countContext.dispatch({type:'add',param:xxx});
      }

      return <div>
          {countContext.count}
        </div>
    }
    
    export default ChildCopmpoent;


本文件夹中创建了3个子组件，ComponentA、ComponentB、ComponentC，他们分别可以实现对全局变量 count 的获取与修改。  
并且任何一个子组件的修改，都会立即反映在其他子组件中。  

至此通过 React Hook，实现了类似 Redux 全局数据管理效果。
