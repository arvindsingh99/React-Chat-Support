import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
class FloatBtn extends React.Component{
  constructor(props){
      super(props);
      this.props = props;
  }
    render(){
  return (
    <Button
    className="floatBtn"
    onClick={this.props.pressHandler}
    variant="success"
    size="lg"
    >
<FontAwesomeIcon icon={faComment} size="lg"/>
</Button>

  );
}
}

export default FloatBtn;
