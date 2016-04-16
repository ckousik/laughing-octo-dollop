import React,{PropTypes} from 'react'

const Element = ({name,title,message,onClick,onClose})=>{
  return (
    <li onClick={onClick}>
      <div className="container">
        <button onClick={onClose}>close</button>
        <p>{title}</p>
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </li>
  )
}

Element.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Element;
