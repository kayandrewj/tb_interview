import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Main from './main';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
