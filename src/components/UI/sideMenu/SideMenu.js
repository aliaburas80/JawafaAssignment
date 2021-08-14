import style from './sideMenu.module.scss'
const SideMenu = (props) => {
    return(
        <div className={style.sideMenuContainer} >
            <div className={style.sideMenuItems}>Client</div>
        </div>
    )
}
export default SideMenu;