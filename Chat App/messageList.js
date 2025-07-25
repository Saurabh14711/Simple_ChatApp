function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message.id} className={`message ${message.sender}`}>
          <div className="message-content">
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}