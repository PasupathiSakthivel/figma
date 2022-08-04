

import React,{useState,useEffect,useRef} from 'react';
// function ajith(){
//   let saravana=[];
//   for(let i=0;i<1000;i++){
// saravana.push(i)
//   }
//   return saravana;
// }
function Pp() {
//   const [saravana1, setstate1] = useState(20)
//   const [saravana2, setstate2] = useState(20)
//   const[page,page1]=useState('posts')
// const [response,setresponse]=useState([])

// const [todo,settodo]=useState({})
const[val,setval]=useState('')
// const inputref=useRef(1);
const count=useRef(0);

// function showDom(){

// }

useEffect(()=>{
  //inputref.current.focus()
  count.current=count.current+1;
}
)
  // useEffect(()=>{


  //   // setstate2(saravana1*2)
  // //   fetch('https://jsonplaceholder.typicode.com/todos/5')
  // // .then(response => response.json())
  // // .then(json => settodo(json))
  // fetch(`https://jsonplaceholder.typicode.com/${page}`)
  // .then(response => response.json())
  // .then(json => setresponse(json))
  // },[page]);
  
// const [saravana, setstate] = useState(ajith())
return (
  <div>

<input 
// ref={inputref}
value={val}
type="text"
placeholder='enter name'
onChange={(e)=>setval(e.target.value)}/>
{/* <button onClick={showDom}>click</button> */}
 {/*<h1>{saravana1}</h1>
 <h1>{saravana2}</h1>*/}
<p>{val}</p>
<p>{count.current}</p>
{/* <h1>{JSON.stringify(todo)}</h1> */}
{/* <button onClick={()=>page1('posts')}>post</button>
<button onClick={()=>page1('comments')}>comments</button>
<p>{JSON.stringify(response)}</p> */}
        {/* <button onClick={()=>setstate1(saravana1+1)}>click</button> */}
        {/* <button onClick={()=>setstate2(saravana2+1)}>click</button>  */}

        </div>
);
//return <button onClick={()=>{setstate([...saravana,1])}}>{saravana.length}</button>
// function updateCount(){
//   //setstate((prevCount)=>prevCount+1);
//   // setstate((prevCount)=>prevCount+1);
//   // setstate((prevCount)=>prevCount+1);

// }
    // return (
    //   <div>
        
        
    //   </div>  
    // );
}

export default Pp ;
