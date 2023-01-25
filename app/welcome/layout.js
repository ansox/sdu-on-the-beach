export default function WelcomeLayout({children}) {
  return <div className="bg-[#ffc800] w-full flex h-screen flex-col items-center gap-4 pt-44">
    <p className="text-xl antialiased	font-semibold">Digite o código de seu ticket</p>
    {children}
  </div>
}