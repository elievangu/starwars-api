//npm import
import { connect } from 'react-redux';

//local import
import Header from '../Components/UI/Header';

const mapStateToProps = (state) => {
  return {
    category: state.category.charAt(0).toUpperCase() + state.category.slice(1)
  }
}

const HeaderApp = connect(
  mapStateToProps,
  null
)(Header)

export default HeaderApp;