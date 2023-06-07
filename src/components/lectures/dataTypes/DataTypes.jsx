const DataTypes = () => {
  const num1 = 1;
  const num2 = num1;

  console.log(`${num2} from DataTypes lecture`);

  const person = {
    name: "Andrew",
  };

  // const secondPerson = person;

  const secondPerson = {
    ...person,
  };

  person.name = "Jacob"; // this updates the person const but not the secondPerson directly

  console.log(person); // prints Jacob
  console.log(secondPerson); // prints Andrew

  return (
    <div className="DataTypes_" id="dataTypes">
      <h1>DataTypes</h1>
      <code>
        {`const num1 = 1;`}
        <br />
        {`const num2 = num1;`}
        <br />
        <br />
        {"console.log(`${num2} from DataTypes lecture`);"}
        <br />
        <br />
        {`
  
  const person = {
    name: "Andrew",
  };
    `}
        <br />
        <br />
        {`// const secondPerson = person;`}
        <br />
        <br />
        {`const secondPerson = {
          ...person,
          };`}
        <br />
        <br />
        person.name = "Jacob"; // this updates the person const but not the secondPerson directly
        <br />
        <br />
        console.log(person); // prints Jacob
        <br />
        console.log(secondPerson); // prints Andrew
        <br />
      </code>
    </div>
  );
};
export default DataTypes;
