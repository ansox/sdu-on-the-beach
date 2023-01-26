
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function MainLayout({children}) {

  return (
    <>
      <Header/>
      <Menu />  
     
      <main>{children}</main>
    </>
  )
}