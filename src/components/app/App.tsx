import { MouseEvent, useState } from "react";
import Options from "../options/Options";
import Switcher from "../switcher/Switcher";

export default function App() {
  const [optionsIsOpen, setOptionsIsOpen] = useState(false)

  function handleClick(e: MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement ;
    
    if(!target.closest('.options')) {
      setOptionsIsOpen(false) ;
    }
  }

  return (
    <section 
      className="app"
      onClick={handleClick}
    >
      <Switcher
        setOptionsIsOpen={setOptionsIsOpen}
      />
      <Options isOpen={optionsIsOpen} />
    </section>
  )
}