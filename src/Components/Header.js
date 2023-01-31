import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_box}>
                <a className={styles.ifc_logo} href="/">
                    <p>대한예수교 장로회</p>
                    <p>IFC 열방교회</p>
                </a>
                <div className={styles.menu_btn}>
                    <a href="/introduce">교회 소개</a>
                    <a href="/calendars">교회 일정</a>
                    <a href="/sketchMap">오시는 길</a>
                </div>
            </div>
        </div>
    );
}

export default Header;