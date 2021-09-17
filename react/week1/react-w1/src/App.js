
import './App.css';

function ToDo(props) {
  return (    
      <li>{props.description} , {props.endDate}</li>
  );
}


export default ToDo;
