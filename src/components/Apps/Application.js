import appsData from '../mocks/App.json'
import './Application.css'

const Application = () => {
  return (
    <>
        <div className='apps-container'>
            {appsData.map((item,index) => (
                <img key = {index} src={item.src} alt={item.name} />
            ))}
        </div>
    </>
  )
}

export default Application