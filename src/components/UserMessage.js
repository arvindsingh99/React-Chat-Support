import React from 'react';
import '../App.css';

class UserMessage extends React.Component{

    user = "data:image/png;base64,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";

    constructor(props){
        super(props);
        this.right = (this.props.right)?"right":"";
        console.log(this.right)
    }

      render(){
          return(
              <div className={"col-md-8 messageContainer "+this.right }>
                <img src={this.user} className="col-md-2 userAvatar" alt="" />
          <p className="userMessage col-md-10">{this.props.message}</p>
                </div>

          );
      }
}

export default UserMessage;