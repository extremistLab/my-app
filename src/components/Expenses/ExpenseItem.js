import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';


function ExpenseItem(props) {
    
    const deleteHandler = () => {
        // Find the parent element (Card) and remove it
        const expenseItemElement = document.getElementById(props.id);
    
        if (expenseItemElement) {
          expenseItemElement.remove();
        }
      };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetail amount={props.amount}
            locationOfExpenditure={props.locationOfExpenditure}
            title={props.title}/>
            <button onClick={deleteHandler}>Delete</button>
        </Card>
        
    );
}

export default ExpenseItem;

