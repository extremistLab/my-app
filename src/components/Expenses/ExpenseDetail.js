function ExpenseDetail(props){

    return (
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div>{props.locationOfExpenditure}</div>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    );
}

export default ExpenseDetail;