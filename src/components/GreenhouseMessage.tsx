import greenHouse from "../assets/greenhouse.png";
import redHouse from "../assets/redhouse.png";

interface GreenhouseProps {
  message: string;
  isUse?: boolean;
}
const GreenhouseMessage = ({ message, isUse }: GreenhouseProps) => {
  return (
    <div className={"greenhouseMessage__container"} style={isUse ? {backgroundColor:"#01D6A3"} : {backgroundColor:"#E9576F"}}>
      <div className={"greenhouseMessage__message"}>
        <p>{message}</p>
      </div>
      <div className={"greenhouseMessage__img"} style={isUse ? {backgroundColor:"#70EEE2"} : {backgroundColor:"#FF719C"}}>
          {
              isUse ? (<img src={greenHouse} alt="Use a Greenhouse"/>) : (<img src={redHouse} alt="Do not use a Greenhouse"/>)
          }
      </div>
    </div>
  );
};

export default GreenhouseMessage;
