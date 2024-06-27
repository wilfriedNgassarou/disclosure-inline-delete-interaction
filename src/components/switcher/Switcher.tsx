import { Dispatch, SetStateAction, useState } from "react"

interface Props {
  setOptionsIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Switcher({ setOptionsIsOpen }: Props) {
  const [displayClassname, setDisplayClassname] = useState(false) ;

  function handleClick() {
    setDisplayClassname(true) 
  }

  function handleAnimationEnd() {
    setDisplayClassname(false)
    setOptionsIsOpen(true)
  }

  return (
    <div onClick={handleClick} className="switcher-container">
      <div onAnimationEnd={handleAnimationEnd}  className={`switcher ${displayClassname ? 'switch' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}