import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function MainLayout({children}) {
  const router = useRouter();

  return (
    <>
      <Header/>
      <Menu />  
     
      <main>{children}</main>
    </>
  )
}