import AddClientButton from "../../components/UI/buttons/addClientButton";
import HeaderJawava from "../../components/UI/header/header";
import SearchBox from "../../components/UI/search/search";
import SideMenu from "../../components/UI/sideMenu/SideMenu";
import TableOfContent from "../../components/UI/table/table";
import AddNewClient from "../addNewClient/AddNewClient";
import style from "./client.module.scss";
import {useState} from 'react'
const Client = (props) => {
  const [showHide,showHideHandler] = useState(false)
  const closeMeHandler = (value) => {
    showHideHandler(value)
  }

  const showAddClientHandler = ()=> {
    showHideHandler(true)
  }
  return (
    <div>
      {showHide && <AddNewClient closeMe={closeMeHandler}/>}
      <HeaderJawava />
      <div className={style.container}>
        <SideMenu />
        <div className={style.centerContainer}>
          <div className={style.centerFlex}>
            <SearchBox />
            <AddClientButton clickHandler={showAddClientHandler}  buttonTitle='Add Client'/>
          </div>
          <TableOfContent />
        </div>
      </div>
    </div>
  );
};
export default Client;
