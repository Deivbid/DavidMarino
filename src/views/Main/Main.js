import React, {Component} from 'react';
import { connect } from 'react-redux';
import Data from '../../mock_data/MOCK_DATA.json';
import { List } from '../../components/List';
import { isSent} from "../../actions";

class Main extends Component {

	componentWillMount(){
		const { sent } = this.props;
		sent(false);
	}

	render(){
  	return (
  		<List data={Data} title="Inbox"/>
  	);
	};
};

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = {
  sent: isSent
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);