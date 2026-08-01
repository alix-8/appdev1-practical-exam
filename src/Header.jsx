import Title from './Title';
import { LIBRARY_NAME, OWNER_NAME } from './constants';

function Header() {
  return (
    <>
      <Title />
      <h2>Welcome to the {LIBRARY_NAME}!</h2>
      <p>Owned by {OWNER_NAME}</p>
    </>
  )
}

export default Header;