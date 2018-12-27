import Link from 'umi/link';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import Count from './components/Count';
import Header from './components/Header'
import Main from './components/Main'
import Experience from './components/Experience'

import styles from './index.less';

function App(props) {
  return (
    <div className={styles.normal}>
      <Header />
      <Main />
      <Experience />
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname,
    text: state.global.text,
  };
})(App);
