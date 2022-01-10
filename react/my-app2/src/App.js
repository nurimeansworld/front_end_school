import './App.css';

function Hello(props){
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numComponentsArray = num.map((i) => (
    <h1 key={i.toString()}>
      안녕~ {name} {i}호~
    </h1>
  ));

  return(
    // <>
    //   <h1>안녕~ {name} 1호~</h1>
    //   <h1>안녕~ {name} 2호~</h1>
    //   <h1>안녕~ {name} 3호~</h1>
    // </>
    <>
      {numComponentsArray}
    </>
  )
}

function App() {
  return (
   <Hello name="licat"/>
  );
}

export default App;

