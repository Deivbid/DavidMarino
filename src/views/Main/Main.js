import React, {Component} from 'react';
import Data from '../../mock_data/MOCK_DATA.json';
import { List } from '../../components/List';
import { isSent} from '../../actions/';
import { connect } from 'react-redux';

class Main extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentWillMount(){
		this.props.isSent(false);
	}

	render(){
  	return (
  		<List data={Data} title={'Inbox'}/>
  	);
	};
};

const mapStateToProps = (state) => {}

const mapDispatchToProps = {
  isSent
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);