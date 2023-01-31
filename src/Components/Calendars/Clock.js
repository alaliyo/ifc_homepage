import{ useState, useEffect } from 'react';
import styles from './Clock.module.css';

function Clock() {
    const [dates, setDates] = useState('');
    const today = new Date();
    const daysObj = {
        '0': '일', '1': '월', '2': '화', '3': '수', '4': '목', '5': '금', '6': '토'
    }
    const year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    const day = today.getDay();  // 요일
    let hours = today.getHours(); // 시간
    let minutes = today.getMinutes(); // 분
    let meridiem = 'am';

    if (Number(month) < 10) {
        month = '0' + month;
    }

    if (Number(date) < 10) {
        date = '0' + date;
    }

    if (Number(hours) > 12) {
        hours -= 12;
        meridiem = 'pm';
    }

    if (Number(hours) < 10) {
        hours = '0' + hours;
    }

    if (Number(minutes) < 10) {
        minutes = '0' + minutes;
    }

    const newDates = () => {
        setDates(`${year} / ${month} / ${date} ${daysObj[day]}  ${hours}:${minutes}${meridiem} `)
    }

    useEffect(() => {
        newDates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h2 className={styles.clock}>{dates}</h2>
        </div>
    );
}

export default Clock;