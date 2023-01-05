import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="Screen">
      <Textfit mode="single" max={70}>
        {value}
      </Textfit>
    </div>
  );
};

export default Screen;