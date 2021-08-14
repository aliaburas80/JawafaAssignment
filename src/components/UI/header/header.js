import menuIcon from "../../../public/images/icon/menu.svg";
import bell from "../../../public/images/icon/bell.svg";
import style from "./header.module.scss";
import person from "../../../public/images/ali.jpg";
import logo from "../../../public/images/logo.png";
const HeaderJawava = (props) => {
  return (
    <header className={style.header}>
      <div className = {style.informations}>
        <div className={style.imageContainer}>
          <img className={style.menuIcon} src={menuIcon} alt="menu icon" />
        </div>
        <span className={style.infoPersonName}>{props.headerType || 'Client'}</span>
      </div>
      <div>
        <div className={style.imageContainerLogo}>
          <img className={style.logoImage} src={logo} alt="logo" />
        </div>
      </div>
      <div className = {style.informations}>
        <div>
          <div className={style.imageContainer}>
            <img className={style.bellImage} src={bell} alt="notifecations" />
          </div>
        </div>
        <span className={style.infoPersonName}>{props.name || 'Ali Abu Ras'}</span>
        <div className={style.imageContainerPerson}>
          <img className={style.personImage} src={person} alt="Ali" />
        </div>
      </div>
    </header>
  );
};
export default HeaderJawava;
