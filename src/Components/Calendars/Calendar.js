import{ useState, useEffect } from 'react';
import styles from "./Calendar.module.css";

function Calendar() {
    const today = new Date();
    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);

    const divArr = [];
    for (let i = 0; i < 42; i++) {
        divArr.push(i);
    }
    
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

    const date = new Date(year, month, 0).getDate();
    const day = new Date(year, month - 1, 1).getDay();
         
    useEffect (() => {
        prevMonth();
        nextMonth();
    }, []);

    return (
        <div className={styles.calender_box}>
            <div className={styles.header}>
                <div>
                    <h1>{month < 10 ? '0' + month : month}</h1>
                    <h4>{year}</h4>
                </div>
                <div>
                    <button onClick={prevMonth}>←</button>
                    <button onClick={nextMonth}>→</button>
                </div>
            </div>

            <ul className={styles.days}>
                <li key='Sun'>Sun</li>
                <li key='Mon'>Mon</li>
                <li key='Tue'>Tue</li>
                <li key='Wed'>Wed</li>
                <li key='Thu'>Thu</li>
                <li key='Fri'>Fri</li>
                <li key='Sat'>Sat</li>
            </ul>
            <div className={styles.date_dox}>
                {divArr.map(e => <div key={e} id={'date' + e}>
                    <span>{e >= day && e <= date + day - 1? date + ((e + 1) - (date + day)): null}</span>
                </div>)}
            </div>
            
        </div>
    )
}

export default Calendar;