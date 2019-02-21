//npm import
import { connect } from 'react-redux';

//local import
import Section from '../Components/UI/Section';


const mapStateToProps = (state) => {
  return {
    name: state.posts.posts.name ? state.posts.posts.name : state.posts.posts.title
  }
}

const SectionApp = connect(
  mapStateToProps,
  null
)(Section)

export default SectionApp;