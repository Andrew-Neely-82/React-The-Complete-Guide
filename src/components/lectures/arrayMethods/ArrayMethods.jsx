const ArrayMethods = () => {
  const numbers = [1, 2, 3];

  const doubleNumArray = numbers.map((num) => {
    return num * 2;
  });

  console.log(numbers);
  console.log(doubleNumArray); // prints the numbers array, but every number is doubled

  return (
    <div className="ArrayMethods_" id="ArrayMethods">
      <h1>Refreshing Array Methods</h1>
      <code>
        const numbers = [1, 2, 3];
        <br />
        {`const doubleNumArray = numbers.map((num) => {
          return num * 2;
        });`}
        <br />
        <br />
        console.log(numbers);
        <br />
        console.log(doubleNumArray); // prints the numbers array, but every number is doubled
      </code>
    </div>
  );
};
export default ArrayMethods;
