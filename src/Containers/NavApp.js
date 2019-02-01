//npm import
import { connect } from 'react-redux';

//local import
import Nav from '../Components/UI/Nav';
import { fetchPosts } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {

    onHomeClick: (category) => {
      dispatch(fetchPosts('films'))
    },

    onPeopleClick: (category) => {
      dispatch(fetchPosts('people'))
    },

    onPlanetsClick: (category) => {
      dispatch(fetchPosts('planets'))
    },

    onSpeciesClick: (category) => {
      dispatch(fetchPosts('species'))
    },

    onStarshipsClick: (category) => {
      dispatch(fetchPosts('starships'))
    },

    onVehiclesClick: (category) => {
      dispatch(fetchPosts('vehicles'))
    }
  }
}

const NavApp = connect(
  null,
  mapDispatchToProps
)(Nav) 

export default NavApp;