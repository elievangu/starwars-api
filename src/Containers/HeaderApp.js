//npm import
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
//local import
import Header from '../Components/UI/Header';

const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const HeaderApp = withRouter(connect(
  mapStateToProps,
  null
)(Header))

export default HeaderApp;