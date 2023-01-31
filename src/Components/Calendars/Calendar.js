import{ useState, useEffect } from 'react';
import styles from "./Calendar.module.css";

function Calendar() {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);

    const prevMonth = () => {
        setMonth(e => e - 1);
    }

    const nextMonth = () => {
        setMonth(e => e + 1);
    }

    if (month < 1) {
        setYear(e => e - 1);
        setMonth(e => e + 12);
    }

    if (month > 12) {
        setYear(e => e + 1);
        setMonth(e => e - 12);
    }

    useEffect (() => {
        prevMonth();
        nextMonth();
    }, []);

    return (
        <div className={styles.calender_box}>
            <div className={styles.header}>
                <div>
                    <h2>{month < 10 ? '0' + month : month}</h2>
                    <h5>{year}</h5>
                </div>
                <div>
                    <button onClick={prevMonth}>←</button>
                    <button onClick={nextMonth}>→</button>
                </div>
            </div>

            <ul className={styles.days}>
                <li key='0'>Sun</li>
                <li key='1'>Mon</li>
                <li key='2'>Tue</li>
                <li key='3'>Wed</li>
                <li key='4'>Thu</li>
                <li key='5'>Fri</li>
                <li key='6'>Sat</li>
            </ul>
        </div>
    )
}

export default Calendar;