//npm import
import { connect } from 'react-redux';

//local import
import AppLink from '../Components/UI/AppLink';

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch()
    }
  }
}

const LinkApp = connect(
  null,
  mapDispatchToProps
)(AppLink)

export default LinkApp;