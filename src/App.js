import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks=['Razzak', 'Alomgir','Shuvo','Jafor','Salman']
 const products=[
   {name:"Photoshop", price:'$99.99'},
   {name:"Ellustratior", price:'$90.99'},
   {name:"Pdf Reader", price:'$6.89'},
   {name:"Adobe Premiure", price:'$242.89'}
  ]

  const friends=[
    {name:'Rahim', age:'21'},
    {name:'Sampod', age:'29'},
    {name:'Kamal', age:'22'}
]

  const nayoksName=nayoks.map(nayok=> nayok)
  console.log(nayoksName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <p>I am a react Person</p>
       <Counter> </Counter>
       <Users> </Users>
       <ul>
         {
           nayoks.map(nayok=> <li>{nayok}</li>)
         }
        {
          products.map(product=> <li>{product.name}</li>)
        }
       </ul>
       {
         products.map(product=> <Product product={product}></Product>)
       }
       {
         friends.map(fd=><Myfriends friend={fd}></Myfriends>)
       }

       <Todus></Todus>

      </header>
    </div>
  );
}

function Product(props){
  const productStyle= {
    border:'1px solid gray',
    borderRaidus:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price}=props.product;
  return(
    <div style={productStyle}>
  <h3>{name}</h3>
  <h5>{price}</h5>
  <button>Buy Now</button>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'2px solid red', width:'400px', margin:'5px'}}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession:{props.job} </p>
    </div>

  );
}

function Myfriends(props){
  const {name, age}=props.friend;
  return(
    <div style={{border:'2px solid green', margin:'5px' ,width:'200px', height:'150px'}}>
      <h3>{name}</h3>
     <h4>{age}</h4>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count +1);
  const handleDecrease =() => setCount(count-1);
  return(
      <div>
        <h2>Count:{count}</h2> 
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
  );

}

function Todus(){
  const [users, setTodo] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=> res.json())
    .then(data =>setTodo(data))
  })
  return(
    <div>
      <h3>Dynamic Todus:{users.length} </h3>
    </div>
  );
}


export default App;
