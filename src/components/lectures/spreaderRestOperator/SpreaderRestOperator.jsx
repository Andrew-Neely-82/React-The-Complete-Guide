const SpreaderRestOperator = () => {
  const numbers = [1, 2, 3];

  const newNumbers = [...numbers, 4]; // makes a new array and adds the 4 to the end of the numbers array it inherits

  console.log(newNumbers); // prints numbers but adds 4 to the end

  const person = {
    name: "Andrew",
  };

  const newPerson = {
    ...person,
    age: 34,
  };

  console.log(newPerson);

  const filter = (...args) => args.filter((el) => el === 1);

  console.log(filter(1, 2, 3));

  return (
    <div>
      <h1>Spreader and Rest Operators</h1>
      <div>
        <code>
          {"const numbers = [1, 2, 3]; "}
          <br />
          {`const newNumbers = [...numbers, 4];`}
          <br />
          {`console.log(newNumbers); // makes a new array and adds the 4 to the end of the numbers array it inherits`}
          <br />
          const person = &#123; name: "Andrew", &#125;;
          <br />
          <br />
          const newPerson = &#123; ...person, age: 34, &#125;;
          <br />
          {`console.log(newPerson);`}
          <br />
          <br />
          {`  const filter = (...args) => args.filter((el) => el === 1); `}
          <br />
          {`console.log(filter(1, 2, 3)); // prints out an array of only one: [1]`}
        </code>
      </div>
    </div>
  );
};

export default SpreaderRestOperator;
