import './ContextMenu.css'
import optionsData from '../mocks/Options.json';

const ContextMenu = ({menuPosition}) => {
  if(!menuPosition.left) return
  return (
    <>
      <div className='context-menu' style = {menuPosition}>
        <div>
          {optionsData.map((item,index) => (
            <div className='context-menu-inner'>
              <div key = {index}>{item.name}</div>
              <ul className='context-sub'>
                {item.suboptions && item.suboptions.map((suboption,subindex) => (
                  <li key ={subindex}>{suboption.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContextMenu