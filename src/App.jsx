import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import ReactDOM from 'react-dom'

//test
var elems = [
  {
    id:1,
    name:'a',
    message:'message',
    title:"title"
  },
  {
    id:2,
    name:'ab',
    message:'message',
    title:"title"
  },
  {
    id:3,
    name:'abc',
    message:'message',
    title:"title"
  },
  {
    id:4,
    name:'abcd',
    message:'message',
    title:"title"
  }
]

ReactDOM.render(<Sidebar elems={elems}
  onElemClick={(id)=>{console.log(id)}}
  onElemClose={(id)=>{console.log(id+' closed')}} />,
document.getElementById('content'))
