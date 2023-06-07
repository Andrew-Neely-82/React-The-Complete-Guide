const Classes = () => {
  class Human {
    gender = "Male";

    printGender = () => {
      console.log(this.gender);
    };
  }

  class Person extends Human {
    name = "Andrew";

    printMyName = () => {
      console.log(this.name);
    };
  }

  const person = new Person();
  person.printMyName();
  person.printGender();

  return (
    <div className="Classes_" id="classes">
      <div className="Classes_info">
        <h1>Classes, Properties and Methods</h1>
        <code>
          <>
            class Human &#123;
            <br />
            &nbsp;&nbsp;gender = "Male";
            <br />
            <br />
            &nbsp;&nbsp;printGender = () ={">"} &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(this.gender);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            &#125;
            <br />
            <br />
            class Person extends Human &#123;
            <br />
            &nbsp;&nbsp;name = "Andrew";
            <br />
            <br />
            &nbsp;&nbsp;printMyName = () ={">"} &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log(this.name);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            &#125;
            <br />
            <br />
            const person = new Person();
            <br />
            person.printMyName();
            <br />
            person.printGender();
          </>
        </code>
      </div>
    </div>
  );
};

export default Classes;
