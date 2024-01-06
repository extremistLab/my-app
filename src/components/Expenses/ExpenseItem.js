import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) => {
  // Title state
  const [title, setTitle] = useState(props.title);

  // Deletion state
  const [isDeleted, setIsDeleted] = useState(false);

  // Amount state
  const [amount, setAmount] = useState(props.amount);

  // Click handler for title
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  // Delete handler
  const deleteHandler = () => {
    setIsDeleted(true);
  };

  // Update amount handler
  const updateAmount = () => {
    setAmount(100);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail
        amount={amount}
        locationOfExpenditure={props.locationOfExpenditure}
        title={title}
      />
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={clickHandler}>Click</button>
      <button onClick={updateAmount}>Set Amount to 100</button>
    </Card>
  );
};

export default ExpenseItem;
