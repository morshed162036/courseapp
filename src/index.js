// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// //ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>

//   //1:
//   // <h1>Hello world!!</h1> ,
//   // document.getElementById('root')

//   //2:
//   // <div> 
//   // <h1>Hello world!!</h1>
//   // <p>Complet course</p>
//   // </div>,
//   // document.getElementById('root')

//   //3:
//   // [
//   // <h1>Hello world!!</h1>,
//   // <p>Complet course</p>
//   // ],
//   // document.getElementById('root')

//   //4:
//   // <React.Fragment>
//   //   <h1>Hello world!!</h1>
//   //   <p>Complet course</p>
//   // </React.Fragment>,
//   //   document.getElementById('root')

//   //5:
//   // <>
//   //   <h1>Hello world!!</h1>
//   //   <p>Complet course</p>
//   // </>,
//   //   document.getElementById('root')

//   //JSX practice
//   // <>
//   //   <h1>Netflix Pick</h1>
//   //   <p>List of 2 Best Series.</p>
    
//   //   <ol>
//   //   <li> Dark</li>
//   //   <li>Extra curricular</li>
//   //   </ol>
//   // </>,
//   // document.getElementById("root")
// //);

// // JSX Expression
// // const name = 'Morshed';
// // ReactDOM.render(
// //   <>
// //     <h1>My Name is {name}</h1>
// //     { <p>My lucky number is {2**3}</p>/*only Expression allowed, condition are not */}
// //     <p>My lucky number is {Math.random()*100}</p>
// //   </>, document.getElementById("root")
// // );

// //Template Literals
// const fname = 'Morshed';
// const lname = 'Ahmed';
//ReactDOM.render(
//   <>
//   {/* <h1>My Name is {fname+lname}</h1> */}
//   {/* <h1>My Name is {fname+" "+lname}</h1> */}
//   {/* <h1>My Name is {`${fname} ${lname}`}</h1> */}
//   <h1>{`My Name is ${fname} ${lname}`}</h1>
//   { <p>My lucky number is {2**3}</p>/*only Expression allowed, condition are not */}
//   <p>My lucky number is {Math.random()*100}</p>
//   </>, document.getElementById("root")
// );
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 const fullName = 'Morshed Ahmed';
 const currDate = new Date().toLocaleDateString();
 const currTime = new Date().toLocaleTimeString();
 const img1 = "https://picsum.photos/200/300";
 const img2 = "https://picsum.photos/250/300";
 const img3 = "https://picsum.photos/300/300";
 const link = "https://youtube.com";
 ReactDOM.render(
  <>
    {/* <h1 contentEditable="true">My Name Is {fullName}</h1> */}
    <p>Todays Date is {currDate}</p>
    <p>Current Time is {currTime}</p>
    <h1 className = "heading">My Name Is {fullName}</h1>
 
    
    <div className='img_div'>
    <img src={img1} alt="RandomImage"/>
    <img src={img2} alt="RandomImage"/>
    <a href={link} target="_parent">
    <img src={img3} alt="RandomImage"/>
    </a>
    </div>
  </>, document.getElementById("root")
 );