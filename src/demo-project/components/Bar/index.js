// 封装图标bar组件
import * as echarts from 'echarts';
import {useEffect, useRef} from 'react';

function Bar({title, xData, yData, style}) {
  const domRef = useRef();
  /**
   * 如果异步请求函数需要依赖一些数据的变化而重新执行
   * 推荐把它写到useEffect内部
   * 统一不抽离函数到外面 只要涉及到异步请求的函数 都放到useEffect内部
   * 本质区别：写到外面每次组件更新都会重新进行函数初始化 这本身就是一次性能消耗
   * 而写到useEffect中 只会在依赖项发生变化时 函数才会进行重新初始化
   * 避免性能损失
   */
  useEffect(() => {
    const initEcharts = () => {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(domRef.current);
      // 绘制图表
      myChart.setOption({
        title: {
          text: title,
        },
        tooltip: {},
        xAxis: {
          data: xData,
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: yData,
          },
        ],
      });
    };
    initEcharts();
  }, [title, xData, yData, style]);
  return (
    <>
      <div ref={domRef} style={style}></div>
    </>
  );
}

export default Bar;
