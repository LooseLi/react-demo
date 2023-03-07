import './index.scss';
import Bar from '@/demo-project/components/Bar';
/**
 * 思路：
 * 1. 看官方文档 把echarts加入项目
 *    如何在react获取dom -> useRef
 *    在什么地方获取dom节点 -> useEffect
 * 2. 不抽离定制化的参数 先把最小的demo跑起来
 * 3. 按照需求 哪些参数需要自定义 抽象出来
 */
const Home = () => {
  return (
    <>
      {/* 渲染Bar组件 */}
      <Bar title="前端主流框架" xData={['Vue', 'React', 'Angular']} yData={[20, 30, 40]} style={{width: '500px', height: '300px'}} />
      <Bar
        title="前端主流框架满意度调查"
        xData={['不满意', '一般', '满意']}
        yData={[100, 200, 300]}
        style={{width: '500px', height: '300px'}}
      />
    </>
  );
};

export default Home;
