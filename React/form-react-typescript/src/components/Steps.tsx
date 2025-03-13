import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import './Steps.css'


type stepsProps = {
    currentStep : number,
}
const Steps = ({currentStep} : stepsProps) => {
  return (
    <div className='steps'>
        <div className="steps active">
            <AiOutlineUser/>
            <p>Identificao</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            < AiOutlineStar/>
            <p>Avaliaçao</p>
        </div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <FiSend/>
            <p>Envio</p>
        </div>
    </div>
  )
}
export default Steps
