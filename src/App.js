import './App.css';

function MyButton() {
  alert("test");
  const handleClick = () => {
    alert("this is a button, which should take to another page i think");
  };
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp(){
  return (
    <div>
      <h1>Welcome to my app</h1>
      <p>I have no idea what's going on and
          I used the create thingamabob before realizing it was
          depreciated???.</p>
          <newline></newline>
      <p>I copy pasted the button from a react tutorial; it does
          nothing on purpose apparently.</p>
      <MyButton />
    </div>
  );
};
