//npm import
import { connect } from 'react-redux';

//local import
import Counter from '../Components/UI/Counter';


const mapStateToProps = (state) => {
  
  return {
    page: state.page,
    pageNumber: state.counter
  }
}

const CounterApp = connect(
  mapStateToProps,
  null
)(Counter)

export default CounterApp;