import style from '../index.less';

function Header(props) {
  return (
    <div className={style.header}>
      <h3>臧红蕊 <span> 前端开发工程师</span></h3>
      <ul>
          <li><img src={require('../../../assets/phone.png')} alt=""/> 17801096170</li>
          <li><img src={require('../../../assets/email.png')} alt=""/> 1546116427@qq.com</li>
          <li><a href='https://lawcery.github.io' target='_blank'>个人博客</a></li>
      </ul>
    </div>
  );
}


export default Header
