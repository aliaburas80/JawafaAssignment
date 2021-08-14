import style from "./buttons.module.scss";

const CloseButton = (props) => {
  return (
    <div onClick={props.clickHandler} className={style.closeButton}>
      X
    </div>
  );
};

export default CloseButton;
