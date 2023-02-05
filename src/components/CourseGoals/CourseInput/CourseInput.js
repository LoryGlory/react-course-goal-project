// Course Input Component to add new goals
import React, {useState} from 'react';
import styles from './CourseInput.module.css';
import Button from '../../UI/Button/Button';


const CourseInput = props => {
  // state management for entered text + validity
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  // check if entered value is bigger than 0, set value to setEnteredValue
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  // handler for form submission, if value is empty: return, if not: add to existing data in App.js updatedGoals array
  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
      // conditional styling depending on input validity
      <form onSubmit={formSubmitHandler}>
        <div className={`${styles['form-control']} && ${!isValid && styles.invalid}`}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler}/>
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
  );
};

export default CourseInput;
