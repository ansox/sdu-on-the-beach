
import { useRouter } from "next/router";
import { useState } from "react";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";
import { request } from "../lib/data";

export default function Page() {
    async function load() {
        const query = `query Tickets {
            tickets {
              code
              name
              photo {
                url
              }
            }
          }
        `;

        const data = await request({query});

        return data;
    }

    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const [ticket, setTicket] = useState('');

    function handlerInputChange(ev: any) {
        setTicket(ev.target.value);
        setShowError(false);
    }

    function handlerButtonClick() {
        if (!ticket) {
            setShowError(true);
            return;
        }

        load();
        localStorage.setItem('name', ticket);
        router.push('/main');
    }

    return (
        <div className="bg-[#ffc800] w-full flex h-screen flex-col items-center gap-4 pt-44">
            <p className="text-xl antialiased	font-semibold">Digite o código de seu ticket</p>
            <StyledInput onChange={handlerInputChange} />
            {
                showError &&
                <p className="text-red-500">Ticket inválido</p>
            }
            <StyledButton onClick={handlerButtonClick}>Enviar</StyledButton>
         </div>
    )
}