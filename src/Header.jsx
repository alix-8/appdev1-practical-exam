import Title from './Title';
import { LIBRARY_NAME, OWNER_NAME } from './constants';

function highlighter(text) {
  return <span>{text} ✨</span>;
}

function Header() {
  const section = "Book Collection";
  const subSection = "Featured Picks";

  const totalBooks = 12;
  const borrowedBooks = 3;


  return (
    <>
        <Title />
        <h2>Welcome to the {LIBRARY_NAME}!</h2>
        <p>{highlighter("Popular!")}</p>

        <p>Owned by {OWNER_NAME}</p>
        
        {/* template literal */}
        <p>Section: {`${section} - ${subSection}`}</p>

        {/* numeric expression */}
        <p>Available Books: {totalBooks - borrowedBooks}</p>


    </>
  );
}

export default Header;