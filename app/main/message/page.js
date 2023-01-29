'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StyledButton from '../../../components/StyledButton';

export default function Message() {
  const cols = 35;
  const rows = 4;

  const router = useRouter();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [sending, setSending] = useState(false);

  async function sendMessage() {
    const url = '/api/message';
    const body = {
      message,
      name: 'anso'
    }

    try {
      const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })

      if (!result.ok) {
        throw new Error('Sem conexão no momento');
      }

      return result;
    }
    catch(error) {
      alert('Sem conexão no momento');
    }
  }

  async function handleClick(ev) {
    setSending(true);
    ev.preventDefault();
    try {
      await sendMessage();
      router.back();
    }
    catch(error) {
      setSending(false);
      alert(error);
    }
  }

  function handlerMessage(ev) {
    setMessage(ev.target.value);
  }

  return <form className="flex flex-col gap-6 items-center pt-12">
  <p>Entre com a sua mensagem:</p>
  <textarea className="border-2 rounded-md text-slate-500" rows={rows} cols={cols} onChange={handlerMessage}></textarea>
  <StyledButton disabled={sending} onClick={handleClick}>
    {
      sending ? 'Sending...' : 'Enviar'
    }

  </StyledButton>
</form>
}