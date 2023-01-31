import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.back}>
            <div>
                <p><a href="https://map.naver.com/v5/search/%EC%97%B4%EB%B0%A9%EA%B5%90%ED%9A%8C/place/35396013?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,2,dh" target="_black">주소: 경남 양산시 삼호동부6길 18</a></p>
                <p>email: fellowshipic2010@gmail.com</p>
                <p>전화번호: 055-386-1080</p>
            </div>
            <div>
                <p>youtube:</p>
                <ul>
                    <li><a href="https://www.youtube.com/@user-fq7fk4ek2q" target="_black">한국: 열방교회</a></li>
                    <li><a href="https://www.youtube.com/@internationalfellowshipchu7911" target="_black">영어: International Fellowship Church</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;