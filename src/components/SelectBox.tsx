interface SelectBoxProps {
  color: string;
  title: string;
  value: number | string;
  buttonBackgroundColor: string;
  arrowColor: string;
  data?: Array<any>;
  onChangeValue: (e: any) => void;
  // onBackPress?: () => void;
  // onForwardPress?: () => void;
  // isDisabled?: boolean;
}

const SelectBox = ({
  color,
  title,
  value,
  buttonBackgroundColor,
  arrowColor,
  data,
  onChangeValue,
}: SelectBoxProps) => {
  console.log("data", data);
  return (
    <div className="selectBox__container" style={{ backgroundColor: color }}>
      <select
        name=""
        id=""
        className=""
        onChange={(e) => onChangeValue(Number(e.target.value))}
      >
        {data &&
          data.map((item: any) => <option value={item.id}>{item.name}</option>)}
      </select>
    </div>
  );
};

export default SelectBox;
