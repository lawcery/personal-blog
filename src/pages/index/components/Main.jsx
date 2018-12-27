import style from '../index.less';

function Main(props) {
  return (
    <div className={style.main}>
      <h3>对工作充满激情，每天都要过的精彩</h3>
      <ul>
          <li>
              <p>html、css、javascript</p>
          </li>
          <li>
              <p>react、dva、umi</p>
          </li>
          <li>
              <p>webpack、vue</p>
          </li>
          <li>
              <p>koa</p>
          </li>
      </ul>
    </div>
  );
}


export default Main
