import TicketBox from "../../../components/TicketBox";
import { cookies } from 'next/headers';
import { Suspense } from "react";

export default function TicketPage() {
  const nextCookies = cookies();
  const ticket = nextCookies.get('ticketName');

  return <div className="flex justify-center">
    <Suspense fallback={<p>Loading...</p>}>
      <TicketBox ticket={ticket.value}/>
    </Suspense>
  </div>
}