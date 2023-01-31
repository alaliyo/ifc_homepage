import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Clock from "../Components/Calendars/Clock";
import Calendar from "../Components/Calendars/Calendar";
import "./MainBady.module.css";

function Calendars() {
    return (
        <div>
            <Header />
            <main>
                <Clock />
                <Calendar />
            </main>
            <Footer />
        </div>
    );
}

export default Calendars;