import Image from "next/image";
import { request } from "../../lib/data";

export default (props: any) => {
    const {ticket} = props;

    const imgLoader = (img: any) => {
        return img.src;
    }

    return <>
        <h1>{ticket.name}</h1>
        <Image loader={imgLoader} src={ticket.photo.url} width="60" height="60" alt="profile pic"/>
    </>
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

async function loadTicketByCode(code: string) {
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
}

export async function getStaticProps(context: any) {
    const data = await loadTicketByCode(context.params.slug);
    
    return {
      props: { ticket: data.tickets[0] },
    }
}

export async function getStaticPaths() {
    const data: any = await loadAllTickets();

    return {
        paths: data.tickets.map((ticket: any) => ({params: {slug: ticket.code}})),
        fallback: false
    }
}