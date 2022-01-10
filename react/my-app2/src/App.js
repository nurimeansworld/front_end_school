import './App.css';

function Hello(props){
  // const name = props.name;
  // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const numComponentsArray = num.map((i) => (
  //   <h1 key={i.toString()}>
  //     안녕~ {name} {i}호~
  //   </h1>
  // ));

  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };
  const resultProductList = productList.products.map((item, idx) => (
    <div key={item.id}>
      <h2>{idx+1}. {item.title}</h2>
      <p>{item.price}원</p>
    </div>
  ));

  return(
    // <>
    //   <h1>안녕~ {name} 1호~</h1>
    //   <h1>안녕~ {name} 2호~</h1>
    //   <h1>안녕~ {name} 3호~</h1>
    // </>
    <>
      {/* {numComponentsArray} */}
      {resultProductList}
    </>
  )
}

function App() {
  return (
   <Hello name="licat"/>
  );
}

export default App;

