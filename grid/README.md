# grid

来自微信群里的一道面试题：  
1、构建一个n\*n的格子(n从输入框填写)，默认背景色都是白色，鼠标指针指上去的格子底色要变成红色，鼠标移出时复原。  
2、鼠标点击格子时背景色固定为蓝色，指针hover时也不变红，再次点击时复原成未点击的状态。  
3、格子大小可以用css控制，底色变化用JS实现。  

题目分析：  
1、应该先实现最小单元格鼠标交互效果。  
2、实现n*\n网格效果。  
3、实现输入框控制n的值。  

Grid组件实现：
1、GridItem 为最小单元格、里面包含2个变量：当前点击状态(onoff)、当前背景颜色值(color)  
2、GridRow 为网格中的一行，这一行中有n个最小单元格：以div标签为基准，设置样式display:'flex'，以达到n个最小单元格并排一行显示的效果。  
3、Grid 为由n个GridRow组成的网格。
4、使用<input type='number' />来作为输入框，控制n的变化。

关键的知识点：  
1、react hook：useState 的用法。  
2、父组件给子组件传递属性值(参数)。由于父组件和子组件都是函数组件，所以子组件在获取props时不需要加this。  

补充说明：
各个组件其实应该分别定义在不同的.js文件中，不应该都定义在grid.js中。

Grid源码：
https://github.com/puxiao/react-hook-component/blob/master/grid/grid.js
