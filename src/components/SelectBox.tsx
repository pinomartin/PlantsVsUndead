interface SelectBoxProps {
  color: string;
  title: string;
  value: number | string;
  buttonBackgroundColor: string;
  data?: Array<any>;
  onChangeValue: (e: any) => void;
}

const SelectBox = ({
  color,
  title,
  value,
  buttonBackgroundColor,
  data,
  onChangeValue,
}: SelectBoxProps) => {
  console.log("data", data);
  return (
    <div className="selectBox__container" style={{ backgroundColor: color }}>
      <select
        name=""
        id=""
        className="selectBox__select"
        style={{ backgroundColor: color }}
        onChange={(e) => onChangeValue(Number(e.target.value))}
      >
        {data &&
          data.map((item: any) => <option className="selectBox__option" value={item.id}>{item.name}</option>)}
      </select>
    </div>
  );
};

export default SelectBox;
