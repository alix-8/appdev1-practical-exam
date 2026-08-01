import BookOne from "./BookOne";
import BookTwo from "./BookTwo";
import BookThree from "./BookThree";
import Divider from "../Divider";
import "./Booklist.css";

function Booklist() {
    return (
        <div className="book-list-container">
            <BookOne/>
            <Divider />
            <BookTwo/>
            <Divider />
            <BookThree />
        </div>
    )
}

export default Booklist;