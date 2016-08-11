import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/list-viewController';
import * as articleListActions from '../actions/list-actions';


function mapStateToProps(state) {
  return {
    list: state.listReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(articleListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

