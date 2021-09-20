
interface ResultProps {
  dataBackgroundColor?: string;
  resultData: number | Object;
  title:string;
  titleBackgroundColor?:string;
}

const Result = ({ dataBackgroundColor, resultData, title, titleBackgroundColor= '' }: ResultProps) => {
  return (
    <div
      className="result__container"
    >
      <div className="result__title" style={{backgroundColor: titleBackgroundColor}}>{title}</div>
      
      <div className="result__percentage" style={{ backgroundColor: dataBackgroundColor }}>{resultData} %</div>
    </div>
  );
};

export default Result;
