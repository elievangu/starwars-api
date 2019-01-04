//npm import
import { connect } from 'react-redux';

//local import
import Nav from '../Components/UI/Nav';
import { showHome, showPeople, showPlanets, showSpecies, showStarships, showVehicles } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {

onHomeClick: () => {
  dispatch(showHome())
},

onPeopleClick: () => {
  dispatch(showPeople())
},

onPlanetsClick: () => {
  dispatch(showPlanets())
},

onSpeciesClick: () => {
  dispatch(showSpecies())
},

onStarshipsClick: () => {
  dispatch(showStarships())
},

onVehiclesClick: () => {
  dispatch(showVehicles())
}
  }
}

const NavApp = connect(
  null,
  mapDispatchToProps
)(Nav)

export default NavApp;