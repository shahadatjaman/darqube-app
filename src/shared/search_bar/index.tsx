import { FC } from "react";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";
interface PropsTypes {
  placeholder: string;
  onFocus: () => void;
  onChange: () => void;
  value: any;
  name?: string;
}

const SearchBar: FC<PropsTypes> = (props) => {
  const { placeholder, onChange, onFocus, value } = props;
  return (
    <div className="input-wrapper  input-bg">
      <div className="ml-4 mr-2  rounded-full">
        <AiOutlineSearch className="text-xl" />
      </div>
      <input
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        className="input-bg input-styled"
      />
    </div>
  );
};

export default SearchBar;
