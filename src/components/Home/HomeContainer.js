import {connect} from 'react-redux';
import Home from './Home.js';

const mapStateToProps = state => ({
  title: state.app.home.title,
  subtitle: state.app.home.subtitle,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);