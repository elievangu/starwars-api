//npm import
import { connect } from 'react-redux';

//local import
import Counter from '../Components/UI/Counter';


const mapStateToProps = (state) => {
  
  return {
    page: state.counter.page,
    pageNumber: state.counter.pageNumber
  }
}

const CounterApp = connect(
  mapStateToProps,
  null
)(Counter)

export default CounterApp;