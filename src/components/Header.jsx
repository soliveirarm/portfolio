import NavBar from "./NavBar"

function Header() {
  return (
    <Header className="bg-zinc-100 shadow-md transition sticky top-2 rounded-lg h-14 max-w-screen-lg mx-auto flex justify-center items-center z-50">
      <NavBar />
    </Header>
  )
}

export default Header
