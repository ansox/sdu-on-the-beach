import { Suspense } from "react";
import Messages from "./Messages";
import StyledButton from '../../../components/StyledButton'
import Link from "next/link";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function MessageBoardPage() {
  return <>
    <Suspense fallback={<p>Loading...</p>}>
      <section className="w-full py-4 flex justify-center items-center">
      <Link href='/main/message'><StyledButton>Enviar mensagem</StyledButton></Link> 
      </section>
      <Messages />
    </Suspense>
  </>
}