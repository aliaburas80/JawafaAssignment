import InputBox from "../../form/input";
import style from "./searchBox.module.scss";
import searchIcon from "../../../public/images/icon/search.png";
const SearchBox = (props) => {
  
  const getInputValue = (value) => {
    console.log(" ---> value", value);
  };

  return (
    <div className={style.searchBox}>
      <div className={style.iconContainer}>
        <img src={searchIcon} className={style.searchicon} alt="search" />
      </div>
      <InputBox getValue={getInputValue} classes={`${style.inputStyles}`} placeHolder="Search"/>
    </div>
  );
};

export default SearchBox;
