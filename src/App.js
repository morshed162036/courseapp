import logo from './logo.svg';
import './App.css';
import {add,sub,div,mult} from './Calculation';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){
  return(
    <>
    <ol>
      <li>Sum of Two Number Is {add(40, 4)}</li>
      <li>Sub of Two Number Is {sub(30, 3)}</li>
      <li>Div of Two Number Is {div(10, 3)}</li>
      <li>Mult of Two Number Is {mult(12, 3)}</li>
    </ol>
  </>
  )
}

export default App;
