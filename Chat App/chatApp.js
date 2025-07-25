class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, text: 'Hello there!', sender: 'other' },
        { id: 2, text: 'Hi! How are you?', sender: 'me' }
      ]
    };
  }

  handleSendMessage = (messageText) => {
    const newMessage = {
      id: this.state.messages.length + 1,
      text: messageText,
      sender: 'me'
    };
    
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage]
    }));
    
    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMessage = {
        id: this.state.messages.length + 2,
        text: 'Thanks for your message!',
        sender: 'other'
      };
      this.setState(prevState => ({
        messages: [...prevState.messages, replyMessage]
      }));
    }, 1000);
  };

  render() {
    return (
      <div className="chat-app">
        <div className="chat-header">
          <h1>Simple Chat</h1>
        </div>
        <MessageList messages={this.state.messages} />
        <MessageInput onSendMessage={this.handleSendMessage} />
      </div>
    );
  }
}
