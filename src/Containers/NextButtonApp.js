//npm import
import { connect } from 'react-redux'

//local import
import NextButton from '../Components/UI/NextButton';
import { nextPage } from '../Actions/index';


const mapDispatchToProps = (dispatch) => {
  return {
    handleNextClick: () => {
      dispatch(nextPage())
    }
  }
}

const NextButtonApp = connect(
  null,
  mapDispatchToProps
)(NextButton)

export default NextButtonApp;
