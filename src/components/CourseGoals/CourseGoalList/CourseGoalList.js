// Course Goal List to display Course Goal Items
import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
      // map items array and display Course Goal Item component for each element
      <ul className="goal-list">
        {props.items.map(goal => (
            <CourseGoalItem
                key={goal.id}
                id={goal.id}
                onDelete={props.onDeleteItem}
            >
              {goal.text}
            </CourseGoalItem>
        ))}
      </ul>
  );
};

export default CourseGoalList;
