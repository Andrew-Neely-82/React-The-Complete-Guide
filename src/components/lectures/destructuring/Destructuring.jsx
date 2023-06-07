const Destructuring = () => {
  const numbers = [1, 2, 3];

  const [num1, , num2] = numbers;
  console.log(`${num1} from destructuring lesson`);
  console.log(`${num2} from destructuring lesson`);

  return (
    <div className="Destructuring_">
      <h1>Destructuring</h1>
      <code>
        {`
          const numbers = [1, 2, 3];`}
        <br />
        {`
          const [num1, , num2] = numbers;
        `}
        <br />
        {`
          console.log(num1); 
        `}
        <br />
        {`
        console.log(num2);
        `}
      </code>
    </div>
  );
};

export default Destructuring;
