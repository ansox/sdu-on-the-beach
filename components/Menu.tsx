import Link from "next/link";

export default function Menu() {
  return <div className="h-12 flex justify-around items-center border-y border-solid border-slate-300">
    <Link className="text-slate-400" href='/main/ticket'>Ticket</Link>
    <Link className="text-slate-400" href='/main/schedule'>Agenda</Link>
    <Link className="text-slate-400" href="/main/message-board">Mural</Link>
    {/* <Link className="text-slate-400" href="/main//chalenges">Desafios</Link> */}
  </div>
}