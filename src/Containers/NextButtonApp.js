//npm import
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
//local import
import NextButton from '../Components/UI/NextButton';
import { fetchNextPage } from '../Actions/index';


const mapDispatchToProps = (dispatch) => {
  return {
    handleNextClick: () => {
      dispatch(fetchNextPage())
    }
  }
}

const NextButtonApp = withRouter(connect(
  null,
  mapDispatchToProps
)(NextButton))

export default NextButtonApp;
