import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 256.36,
      locationOfExpenditure: "Garage",
      date: new Date(2024, 2, 1),
    },
    {
      id: "e2",
      title: "Insurance claim",
      amount: 566,
      locationOfExpenditure: "Insurance Office",
      date: new Date(2024, 2, 4),
    },
    {
      id: "e3",
      title: "Paint",
      amount: 200,
      locationOfExpenditure: "Home Improvement Store",
      date: new Date(2024, 2, 3),
    },
    {
      id: "e4",
      title: "Gadgets",
      amount: 869,
      locationOfExpenditure: "Electronics Store",
      date: new Date(2024, 2, 2),
    },
  ];

  const expenseItems = [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        locationOfExpenditure={expense.locationOfExpenditure}
      />
    );
  }

  return (
    <div>
      <h2>Let's go for the last ride!</h2>
      <p>Put the Medal on the Pedal!!</p>
      <NewExpense/>
      {expenseItems}
      
      
      
    </div>
  );
}

export default App;
