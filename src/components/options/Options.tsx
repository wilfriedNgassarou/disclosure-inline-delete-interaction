import { MouseEvent, useState } from "react";
import Love from "../svgs/Love";
import Trash from "../svgs/Trash";
import Share from "../svgs/Share";
import Edit from "../svgs/Edit";
import Duplicate from "../svgs/Duplicate";

interface Props {
  isOpen: boolean
}

export default function Options({ isOpen }: Props) {
  const [state, setState] = useState<'' | 'confirm-active' >('');
  const [optionsClassname, setOptionsClassName] = useState('d-none');

  if(isOpen && !optionsClassname.includes('block')) {
    setOptionsClassName('block');

    setTimeout(() => {
      setOptionsClassName('block show-options')
    }, 100);
  }

  if(!isOpen && optionsClassname.includes('show-options') ) {
    setOptionsClassName('block')

    setTimeout(() => {
      setOptionsClassName('d-none')
    }, 250);
  }

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement ;

    if( target.closest('.delete-button-wrapper') ) {
      setState('confirm-active')
      return 
    }

    if(target.className == 'btn-white') {
      setState('') ;
    }
    
  }

  return (
    <article 
      className={`options ${optionsClassname} `}
    >
      <div className="options-header">
        <span>More Options</span>
      </div>
      <div className="options-body">
        <div>
          <span>
            <Edit />
          </span>
          <span>Edit</span>
        </div>
        <div>
          <span> <Duplicate /> </span>
          <span>Duplicate</span>
        </div>
        <div>
          <span> <Love /> </span>
          <span>Favourite</span>
        </div>
        <div>
          <span> <Share /> </span>
          <span>Share</span>
        </div>
      </div>
      <div
        onClick={handleClick} 
        className={`options-footer ${state}`}
      >
        <div className="delete-button-wrapper">
          <div>
            <span><Trash /></span>
            <span>Delete</span>
          </div>
        </div>
        <div 
          className="confirm-delete-button-wrapper"
        >
          <div>
            <span className="btn-red">Yes, Delete</span>
            <span className="btn-white">Cancel</span>
          </div>
        </div>
      </div>
    </article> 
  )
}