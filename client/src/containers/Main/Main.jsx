import Form from "../../components/Form/Form";
import Chat from "../../components/Chat/Chat";
import Services from "../../services/Services";
import { useEffect, useState } from "react";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If the loading state is true, then we want to add a new message to the array
    if (loading) {
      setMessages((prevState) => [
        ...prevState,
        {
          message: "",
          type: "bot",
          id: generateUniqueID(),
          loading: true,
        },
      ]);
    }
    // If the loading state is false, then we want to update the last message in the array
    else {
      setMessages((prevState) => {
        const newState = [...prevState];
        const lastItem = newState[newState.length - 1];
        if (lastItem) {
          lastItem.message = lastMessage;
          lastItem.loading = false;
        }

        return newState;
      });
    }
  }, [loading]);

  const generateMessages = async (text) => {
    setMessages((prevState) => [
      ...prevState,
      {
        message: text.trim(),
        type: "user",
        id: generateUniqueID(),
      },
    ]);

    setLoading(true);
    const response = await Services.fetchResponse(text);
    if (!response.status === 200) return false;

    setTimeout((prevState) => {
      const { bot } = response.data;
      setLastMessage(bot.trim());
      setLoading(false);
    }, 1000);
  };

  const generateUniqueID = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000000000);
    const hex = random.toString(16);

    return `id-${timestamp}-${hex}`;
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <Chat messages={messages} />
      <Form generateMessages={generateMessages} loading={loading} />
    </main>
  );
};

export default Main;
