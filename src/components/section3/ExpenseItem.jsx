import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./style.scss";

const ExpenseItem = (props) => {
  return (
    <Card className="card">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
