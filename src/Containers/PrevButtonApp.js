//npm import
import { connect } from 'react-redux';

//local import
import PrevButton from '../Components/UI/PrevButton';
import prevPage from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    handlePrevClick: () => {
      dispatch(prevPage())
    }
  }
}

const PrevButtonApp = connect(
  null,
  mapDispatchToProps
)(PrevButton)

export default PrevButtonApp;