import Image from "next/image";

export default function TicketBox(props: any) {
    const { data, ticketId } = props;

    return <section className="w-3/4 mt-10 border border-slate-300 flex justify-between">
        <div>
        <header className="flex flex-row py-3">
            <div className="px-4">
            <Image src={data.photo.url} width="70" height="70" alt="profile pic" className="w-14 h-14 object-cover rounded-full"/>
            </div>
            <h1 className="font-bold text-xl antialiased">{data.name}</h1>
        </header>
        <main className="px-4 pb-3">
            <p className="text-[#ffc800] font-semibold text-lg">SDU on the Beach</p>
            <p className="text-[#ffc800] font-semibold text-lg" >Passaporte da Alegria</p>
        </main>
        </div>
        <aside className="flex items-center border-l">
            <p style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>{ticketId}</p>
        </aside>
      
    </section>
}