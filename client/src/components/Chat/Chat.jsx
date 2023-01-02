import Message from "../Message/Message";

const Chat = ({ messages }) => {
  return (
    <div className="w-full flex-1 overflow-y-auto text-white">
      {messages &&
        messages.map((message) => (
          <Message
            message={message.message}
            type={message.type}
            id={message.id}
            key={message.id}
            loading={message.loading}
          />
        ))}
    </div>
  );
};

export default Chat;
