//npm import
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//local import
import Section from '../Components/UI/Section';


const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const SectionApp = withRouter(connect(
  mapStateToProps,
  null
)(Section))

export default SectionApp;