//npm import
import { connect } from 'react-redux';

//local import
import PrevButton from '../Components/UI/PrevButton';
import { fetchPrevPage } from '../Actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    handlePrevClick: () => {
      dispatch(fetchPrevPage())
    }
  }
}

const PrevButtonApp = connect(
  null,
  mapDispatchToProps
)(PrevButton)

export default PrevButtonApp;