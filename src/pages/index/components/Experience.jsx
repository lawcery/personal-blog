import style from '../index.less';

function Experience(props) {
  return (
    <div className={style.experience}>
      {/* <h3>个人经历</h3>
      <div className={style.enterprise}>
        <p>2015年-2018年初&nbsp;&nbsp;&nbsp;&nbsp;人民日报社国家人文历史杂志社</p>
        <p>2018年初-2018年12月&nbsp;&nbsp;&nbsp;&nbsp;北京千闻云计算科技有限公司(学霸君1对1)</p>
      </div>
      <h3>工作经验</h3>
      <div className={style.enterprise}>
        <p>2015年-2018年初&nbsp;&nbsp;&nbsp;&nbsp;人民日报社国家人文历史杂志社</p>
        <p>2018年初-2018年12月&nbsp;&nbsp;&nbsp;&nbsp;北京千闻云计算科技有限公司(学霸君1对1)</p>
      </div> */}
      <h3>丰富的工作经验，曾就职两家公司</h3>
      <div className={style.enterprise}>
        <p className={style.time_now}>现在</p>
        <div className={style.detail}>
            <span className={style.personal_logo}><img src={require('../../../assets/header_img.jpg')} /></span>
            <div className={style.desc}>
                <p>一名待业在家写博客的妹子，跪求内推🙁</p>
                <ul>
                    <p>附上个人评价~</p>
                    <li>1.	三年多前端工作经验，熟练使用html、css高度还原设计稿，有处理兼容问题的能力</li>
                    <li>2.	有react、vue实际项目经历</li>
                    <li>3.	umi、webpack、babel、eslint 搭建标准化开发框架</li>
                    <li>4.	熟练使用Ant-design、Element-ui、mint-ui等ui库</li>
                    <li>5.	熟悉 git 协作管理及 npm 包管理，熟悉git子模块，熟悉 NGINX 层转发代理的解决方案</li>
                    <li>6.	了解koa，有用koa+node.js开发过给邮箱发邮件的功能</li>
                    <li>7.	了解gitlab-ci 自动化构建及部署</li>
                    <li>8.	目前精力专注于性能优化、组件封装、公共方法等</li>
                    <li>9.	定期关注新技术，喜欢挑战性的工作</li>
                </ul>
            </div>
        </div>
        <p className={style.time}>2018/12</p>
        <div className={style.detail}>
            <span className={style.experience_logo}><img src={require('../../../assets/xbj_logo.png')} /></span>
            <div className={style.desc}>
                <p>北京千闻云计算科技有限公司(学霸君1对1)  <span> ——web前端开发工程师</span></p>
                <ul>
                    <p>主要负责老师上课系统的框架设计</p>
                    <li>1、选择react作为主开发框架</li>
                    <li>2、umi 打包，提升性能</li>
                    <li>3、dva做数据管理</li>
                    <li>4、hybrid 页面与框架入口独立，木偶组件与智能组件职责清晰</li>
                    <li>5、静态资源部署 CDN，每次更新入口 HTML 及 HASH 资源</li>
                    <li>6、gitlab-ci 实现自动化构建及部署</li>
                </ul>
            </div>
        </div>
        <p className={style.time}>2018/03</p>
        <div className={style.detail}>
            <span className={style.experience_logo}><img src={require('../../../assets/gl_logo.png')} /></span>
            <div className={style.desc}>
                <p>人民日报社国家人文历史百代旅行事业部  <span> ——web前端开发工程师</span></p>
                <ul>
                    <p>主要负责百代旅行官网、国家人文历史官网、百代后台管理系统</p>
                    <li>1、选择react作为主开发框架, webpack打包</li>
                    <li>2、dva做数据管理</li>
                    <li>3、Ant-design完成页面展示</li>
                    <br/>
                    <p>涉及到的技术主要包括:</p>
                    <li>三方登录（QQ、微信）、swiper、音视频播放、灯箱、OSS数据存储，animation动画效果等</li>
                </ul>
            </div>
        </div>
        <p className={style.time}>2015/07</p>
      </div>
    </div>
  );
}


export default Experience
