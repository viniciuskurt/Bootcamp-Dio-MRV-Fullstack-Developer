import Item from './components/Item';

const App = () => {
  return(
    <>
      <h1>Primeira aplicação com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
    </>
  )
}

export default App;

//Também poderia ser:

//function app (){
//  return(
//    <h1>Hello World</h1>
//  )
//}

//ou

//export default function app (){
//  return(
//    <h1>Hello World</h1>
//  )
//}