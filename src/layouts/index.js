import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';

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
        </div>
      </IntlProvider>
    );
  }),
);
