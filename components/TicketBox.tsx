import Image from "next/image";

export default function TicketBox(props: any) {
    const { data } = props;

    const imgLoader = (img: any) => {
        return img.src;
    }

    return <>
        <h1>{data.name}</h1>
        <Image loader={imgLoader} src={data.photo.url} width="60" height="60" alt="profile pic"/>
    </>
}