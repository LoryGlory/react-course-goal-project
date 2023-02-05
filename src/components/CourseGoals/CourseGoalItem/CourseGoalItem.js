// Course Goal Item component
import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {

  // handler to send id of to be deleted goal to deleteItemHandler in App.js
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
  );
};

export default CourseGoalItem;
