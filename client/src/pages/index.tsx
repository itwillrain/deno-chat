import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';

interface IMessage {
  text: string;
}

const Home: NextPage = () => {
  const [messages, setMessage] = useState<IMessage[]>([]);
  const [text, setText] = useState('');

  const getMessages = useCallback(async () => {
    const res = await fetch('https://itwillrain-deno-chat.deno.dev/messages');
    const data = await res.json();
    setMessage(data);
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  const onSendMessage = useCallback(async () => {
    await fetch('https://itwillrain-deno-chat.deno.dev/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text,
      }),
    });
    setText('');
    getMessages();
  }, [text]);

  return (
    <>
      <div>{JSON.stringify(messages)}</div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={onSendMessage}>Add</button>
    </>
  );
};

export default Home;
