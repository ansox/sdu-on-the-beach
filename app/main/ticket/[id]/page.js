import TicketBox from '../../../../components/TicketBox'
import { request } from '../../../../lib/data'
import { cache } from 'react';

export default async function TicketPage({params}) {
 
  const loadTicketByCode = cache(async (code) => {
    const query = `query Tickets {
        tickets(where: {code: "${code}"}) {
          code
          name
          photo {
            url
          }
        }
      }`;

    const data = await request({query});

    return data;
  })

  const { id } = params;
  
  const data = await loadTicketByCode(id);

  return <div className='w-full flex justify-center'>
    <TicketBox data={ data.tickets[0]} ticketId={id} />
  </div>
}

async function loadAllTickets() {
  const query = `query Tickets {
      tickets {
        code
      }
    }
  `;

  const data = await request({query});

  return data;
}

export async function generateStaticParams() {
  const data = await loadAllTickets();

  return data.tickets.map(ticket => ({id: ticket.code}));
}