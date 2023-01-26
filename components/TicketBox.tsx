import Image from "next/image";

export default function TicketBox(props: any) {
    const { data, ticketId } = props;

    return <section className="w-3/4 mt-10 border border-slate-300 flex justify-between">
        <div className="w-full">
        <header className="flex flex-row py-3 bg-[#ffc800] w-full items-center">
            <div className="px-4">
            <Image src={data.photo.url} width="70" height="70" alt="profile pic" className="w-14 h-14 object-cover rounded-full"/>
            </div>
            <h1 className="font-bold text-xl antialiased">{data.name}</h1>
        </header>
        <main className="px-4 py-3">
            <p className="text-[#ffc800] font-bold antialiased text-lg">SDU on the Beach</p>
            <p className="text-[#ffc800] font-bold antialiased text-lg" >Passaporte da Alegria</p>
        </main>
        </div>
        <aside className="flex items-center bg-[#ea6244] ">
            <p className="text-white font-semibold antialiased" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>{ticketId}</p>
        </aside>
      
    </section>
}