//npm import
import { connect } from 'react-redux';

//local import
import Aside from '../Components/UI/Aside';

const mapStateToProps = (state) => {

}

const AsideApp = connect(
  mapStateToProps,
  null
)(Aside)

export default AsideApp;