//npm import
import { connect } from 'react-redux';

//local import
import Article from '../Components/UI/Article';

const mapStateToProps = (state) => {

}

const ArticleApp = connect(
  mapStateToProps,
  null
)(Article)

export default ArticleApp;