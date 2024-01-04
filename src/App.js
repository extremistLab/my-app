import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 256.36,
      date: new Date(2024, 2, 1),
      locationOfExpenditure: "Garage",
    },
    {
      id: "e2",
      title: "Insurance claim",
      amount: 566,
      date: new Date(2024, 2, 4),
      locationOfExpenditure: "Insurance Office",
    },
    {
      id: "e3",
      title: "Paint",
      amount: 200,
      date: new Date(2024, 2, 3),
      locationOfExpenditure: "Home Improvement Store",
    },
    {
      id: "e4",
      title: "Gadgets",
      amount: 869,
      date: new Date(2024, 2, 2),
      locationOfExpenditure: "Electronics Store",
    },
  ];



  return (
    <div>
      <h2>Let's go for the last ride!</h2>
      <p>This is me!!</p>
      
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} 
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
