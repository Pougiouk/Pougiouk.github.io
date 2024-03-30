import NavButton from "./NavButton.jsx"

export default function HamburgerMenu() {
  return(
    <>
      <NavButton where="Home"/>
      <NavButton where="Recipies"/>
      <NavButton where="Projects"/>
    </> 
  )
}