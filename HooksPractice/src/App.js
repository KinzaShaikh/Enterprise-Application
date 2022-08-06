import { useContext, useReducer, useRef, useState } from 'react';

function App(){
const count = useRef(0);
const inputVal = useRef('')
function handleChange(){
  count.current+=1;
  console.log(count.current)
}
function getVal(){
  console.log(inputVal.current.value)
  inputVal.current.focus()
}

function reducer(state,action){
    if(action.type==='increment'){
      return state+=1;
    }
}

const [state,dispatch] = useReducer(reducer,0);

return(
  
    <>
    <h1>Hi</h1>
    <h1>{state}</h1>
    <button onClick={()=>{
      dispatch({type:'increment'})
    }}>Click me</button>

{/* 
  <h1>{count.current}</h1>
  <button onClick={handleChange}>Click</button>
  <br/>
  <input type={'text'} name="name" ref={inputVal}/>
  <button onClick={getVal}>Get value</button> */}
    </>
  )
}




// function B(){
//   return(
//     <>
//     <h1>B Component</h1>
//     <C/>
//     </>
//   )
// }

// function C(){
//   return(
//     <>
//     <h1>C Component</h1>
//     <D/>
//     </>
//   )
// }

// function D(){
//   const stu = useContext(StudentContext);
//   const sub = useContext(SubjectContext);
//   return(
//     <>
//     <h1>D Component</h1>
//    <h2>Hi I am {stu.name} and my id is {stu.id} My subject is {sub.name} and I have scored {sub.score}</h2>
//     </>
//   )
// }

// function App() {
//   const [stu,setstu] = useState({name:"kinza",id:9})
//   const [sub,setSub] = useState({name:"EAD",score:100})
//   return (
//     <>
//     <h1>Hi</h1>
//   <SubjectProvider value={sub}>
//   <StudentProvider value={stu}>
//     <A/>
//   </StudentProvider>      
  
//   </SubjectProvider>
//       </>
//   );
// }

export default App;
