import React from 'react';
import Data from '../../mock_data/MOCK_DATA.json';
import { List } from '../../components/List';

const Main = (props) => {
  return (
  	<List data={Data} title={'Inbox'}/>
  )
}

export default Main;