//npm import
import { connect } from 'react-redux';

//local import
import Section from '../Components/UI/Section';


const mapStateToProps = (state) => {

}

const SectionApp = connect(
  mapStateToProps,
  null
)(Section)

export default SectionApp;