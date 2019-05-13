import React, {Component} from 'react';
import { connect } from 'react-redux';
import Data from '../../mock_data/MOCK_DATA.json';
// Components
import { List } from '../../components/List';
// Redux
import { isSent} from '../../actions';
// Document Title
import { DocumentTitle } from '../../components/DocumentTitle';

class Main extends Component {

	componentWillMount(){
		const { sent } = this.props;
		sent(false);
	}

	render(){
  	return (
  		<DocumentTitle title="Main">
  			<List data={Data} title="Inbox"/>
  		</DocumentTitle>
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