import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';

interface IMessage {
  text: string;
}

const Home: NextPage = () => {
  const [messages, setMessage] = useState<IMessage[]>([]);
  const getMessages = useCallback(async () => {
    const res = await fetch('https://itwillrain-deno-chat.deno.dev/messages');
    const data = await res.json();
    setMessage(data);
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  return <>{JSON.stringify(messages)}</>;
};

export default Home;
