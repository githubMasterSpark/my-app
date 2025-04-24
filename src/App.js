import './App.css';

function MyButton() {
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
      <MyButton />
    </div>
  );
};
