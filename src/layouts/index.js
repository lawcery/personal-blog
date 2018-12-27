import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';
import canvasNest from '../util/canvas-nest.js'
import style from './index.less'
function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

export default withRouter(
  connect(mapStateToProps)(props => {
    return (
      <IntlProvider locale="en">
        <div>
          {props.children}
          <canvas id="c_n1" className={style.canvas}></canvas>
        </div>
      </IntlProvider>
    );
  }),
);
