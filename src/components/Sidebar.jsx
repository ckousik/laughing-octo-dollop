import React, {PropTypes} from 'react'
import Element from './Element.jsx'

const Sidebar = ({elems,onElemClick,onElemClose})=>{
  return (
    <ul>
      {
        elems.map((elem)=>{
          return (
            <Element key={elem.id} onClick={()=>onElemClick(elem.id)} onClose={()=>onElemClose(elem.id)}
              title={elem.title} name={elem.name} message={elem.message}></Element>
          )
        })
      }
    </ul>
  )
}

Sidebar.propTypes = {
  onElemClick: PropTypes.func.isRequired
}

export default Sidebar;
