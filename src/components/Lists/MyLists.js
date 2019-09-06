import React from 'react';
import PropTypes from 'prop-types';

import MyListsItem from './MyListsItem';
import { IonList } from '@ionic/react';

const MyLists = props => {
  const listItems = (props.lists || []).map(list => {
    return (
      <MyListsItem
        key={list.id}
        listId={list.id}
        name={list.name}
        description={list.description}
        createdAt={list.createdAt}
      />
    );
  });

  return <IonList lines="none">{listItems}</IonList>;
};

MyLists.propTypes = {
  className: PropTypes.string
};

export default MyLists;
