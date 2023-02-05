// Simple goal list app with possibility to add / remove goals
import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  // dummy default goals
  const [courseGoals, setCourseGoals] = useState([
    {text: 'Do all exercises!', id: 'g1'},
    {text: 'Finish the course!', id: 'g2'}
  ]);

  // handler to add new goals to existing array with spread operator, unshift adds the element to the beginning of the array
  // receive data from Course Input component
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
      return updatedGoals;
    });
  };

  // handler to remove goals with id filter
  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  // conditional content to display if there are no goals found
  let content = (
      <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
  );

  // conditional content to display if at least 1 goal exist
  if (courseGoals.length > 0) {
    content = (
        <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
    );
  }

  return (
      <div>
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler}/>
        </section>
        <section id="goals">
          {/*conditional content output*/}
          {content}
        </section>
      </div>
  );
};

export default App;
