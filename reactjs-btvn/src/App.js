import React, { Component } from 'react';
import Logo from './components/Logo';
import ListDice from './components/ListDice';
import Button from './components/Button';

// var arrDice = [
//     '/images/dice1.png',
//     '/images/dice2@2x.png',
//     '/images/dice3@2x.png',
//     '/images/dice4@2x.png',
//     '/images/dice5@2x.png',
//     '/images/dice6@2x.png',
// ]

// function getDiceIndex(number) {
//   return number - 1;
// }

// function randomDice() {
//   return getDiceIndex(Math.floor(Math.random() * 6 + 1));
// }

// function App() {
//   const [dice1, setDice1] = useState(0);
//   const [dice2, setDice2] = useState(0);

//   function handleClick(evt) {
//     console.log('3. handleClick [App.js]', evt.target);
//     const random1 = randomDice();
//     const random2 = randomDice();
//     setDice1(random1);
//     setDice2(random2);
//   }

//   const src1 = arrDice[dice1];
//   const src2 = arrDice[dice2];
//   // Cách truyền event từ bên trong ra bên ngoài
//   return (
//     <div>
//       <div className="container">
//         <Logo />
//         <ListDice
//           src1={src1}
//           src2={src2}
//         />
//         <Button onClick={handleClick} />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
    //    arrDice : [
    //     {img:'/images/dice1.png'},
    //     {img:'/images/dice2@2x.png'},
    //     {img:'/images/dice3@2x.png'},
    //     {img:'/images/dice4@2x.png'},
    //     {img:'/images/dice5@2x.png'},
    //     {img:'/images/dice6@2x.png'},
    // ]
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    console.log('run');
  }
    render() {

      
      return (
          <div>
      <div className="container">
         <Logo />
        <ListDice
         src1={this.src1}
          src2={this.src2}
       />
        <Button onClick={this.handleClick} />
       </div>
     </div>
        );
    }
}


export default App;