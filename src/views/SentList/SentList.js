import React from 'react';
import { List } from '../../components/List';
import { connect } from 'react-redux';

const SentList = (props) => {
	const { sentList } = props;
  return (
  	<div>
    	<List data={sentList.list} title={'Enviados'}/>
    	{ sentList.list.length === 0 && <h1>No has enviado mensajes aun D: </h1>}
   	</div>
  )
}

const mapStateToProps = (state) => {
  return {
    sentList: state.sentList
  };
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SentList);