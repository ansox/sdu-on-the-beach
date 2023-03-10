'use client'

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { request } from '../../lib/data';
import { setCookie } from 'nookies';

export default function WelcomePage() {
  async function isTicketValid(code) {
    const query = `query Tickets {
      tickets(where: {code: "${code.toUpperCase()}"}) {
        code
      }
    }
    `;

    const data = await request({query});

    return data.tickets.length > 0;
  }

  function handlerInputChange(ev) {
    setTicket(ev.target.value);
    setShowError(false);
  }

  async function handlerButtonClick() {
      if (!ticket) {
          setShowError(true);
          return;
      }

      const isValid = await isTicketValid(ticket);

      if (isValid) {
        setCookie(null, 'ticketName', ticket.toUpperCase(), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        localStorage.setItem('name', ticket.toUpperCase());
        router.push(`/main/ticket/`);
      }
  }

  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [ticket, setTicket] = useState('');

    return  <>
      <StyledInput onChange={handlerInputChange} />
      {
          showError &&
          <p className="text-red-500">Ticket inválido</p>
      }
      <StyledButton onClick={handlerButtonClick}>Enviar</StyledButton>
    </>
}