import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import UserMessage from './UserMessage';
class ChatWindow extends React.Component {
    constructor (props){
        super();
        this.url = "wss://streamer.realtimestreamer.com/6bcd6f3f2cc1f726144c343f6d998495/1212/99";
        this.props = props;
        this.state ={
            messages : []
            
        }
        this.connection = null;
        
        

    }
    componentDidMount = ()=>{
        this.connection = new WebSocket(this.url);
        this.connection.onopen = ()=>{
            console.log("Socket connected");
        }
        this.connection.onerror = (err)=>{
            console.log("Connection Closed", err);
        }
        this.connection.onmessage = (data)=>{
            let message = JSON.parse(data.data);
            console.log(message)
            this.insertMessage(message.data, false);    

        }
    }
    insertMessage = (message, mine)=>{
        let tmpMessage = {mine:mine, message: message}
        let prevMessages = this.state.messages;
        prevMessages.push(tmpMessage);
        this.setState({messages:prevMessages});
    }
    sendButton= ()=>{
        if(this.connection && this.connection.readyState == WebSocket.OPEN){
            let a = (this.state.text)
            this.connection.send(a)
            this.insertMessage(a, true);
            this.setState({text:""})
        }


    }
    textChanged = (event)=>{
        this.setState({text: event.currentTarget.value});

    }
    renderMessages = ()=>{
        let tmpRdr = [];
        this.state.messages.forEach(msg=>{
            tmpRdr.push(<UserMessage right={msg.mine} message={msg.message}/>)
        })
        return tmpRdr;

    }
    keyPressed = (event)=>{
        if(event.key=="Enter"){
            this.sendButton();
        }

    }
    render() {

        return (
            <div className="container">
                <div className="row col-lg-10">
                    <div className="col-md-12 chatHeader">
                        <h1>React Support</h1>
                    </div>
                    <div className="col-md-12 messages">
                        {this.renderMessages()}
                        
                    </div>
                    <div className="col-md-12 sendMessage">
                      
                        <input onKeyUp={this.keyPressed} onChange={this.textChanged} value={this.state.text} type="text" className="col-md-11" textinput />
                        <button onClick={this.sendButton} className="sendButton col-md-1 btn-btn-primary">
                            <FontAwesomeIcon icon={faComment} size="lg"/>
                        
                        </button>
                        
                    </div>
                    </div>
                </div>
);

}
}



export default ChatWindow;