import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expeseTitle = 'Car Insurance';
  const expenseAmmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expeseTitle}</h2>
        <div className="expense-item__price">{expenseAmmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
