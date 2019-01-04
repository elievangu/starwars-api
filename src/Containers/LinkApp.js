//npm import
import { connect } from 'react-redux';

//local import
import Link from '../Components/UI/Link';

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
)(Link)

export default LinkApp;