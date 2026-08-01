import BookOne from "./BookOne";
import BookTwo from "./BookTwo";
import BookThree from "./BookThree";
import Divider from "../Divider";

function Booklist() {
    return (
        <>
            <BookOne />
            <Divider />
            <BookTwo />
            <Divider />
            <BookThree />
        </>
    )
}

export default Booklist;