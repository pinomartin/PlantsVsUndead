import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'

interface SelectBoxProps {
    color: string;
    title: string;
    value: string;
    buttonBackgroundColor: string;
    arrowColor: string;
}
const SelectBox = ({ color, title, value, buttonBackgroundColor, arrowColor }:SelectBoxProps) => {
    
    return (
        <div className="selectBox__container" style={{backgroundColor: color}}>
            <button className="selectBox__button selectBox__leftButton" style={{backgroundColor: buttonBackgroundColor}}><BsFillCaretLeftFill style={{color:arrowColor}}/></button>
            <p className="selectBox__title">{title}</p>
            <button className="selectBox__button selectBox__rightButton" style={{backgroundColor: buttonBackgroundColor}}><BsFillCaretRightFill style={{color:arrowColor}}/></button>
        </div>
    )
}

export default SelectBox
