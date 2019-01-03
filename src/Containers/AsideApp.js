//npm import
import { connect } from 'react-redux';

//local import
import Aside from '../Components/UI/Aside';

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const AsideApp = connect(
  mapStateToProps,
  null
)(Aside)

export default AsideApp;