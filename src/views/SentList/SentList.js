import React from 'react';
// Redux
import { connect } from 'react-redux';
import { List } from '../../components/List';
// Document Title
import { DocumentTitle } from '../../components/DocumentTitle';

const SentList = (props) => {
	const { sentList } = props;
  return (
  	<DocumentTitle title="Sent List">
      <div>
    	  <List data={sentList.list} title="Enviados"/>
    	  { sentList.list.length === 0 && <h1>No has enviado mensajes aun D: </h1>}
      </div>
   	</DocumentTitle>
  )
}

const mapStateToProps = (state) => {
  return {
    sentList: state.sentList
  };
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SentList);