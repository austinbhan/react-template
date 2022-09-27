import { Outlet, Link } from 'react-router-dom';

export default function FruitsVegetables() {
  function handleGoBack() {
    window.location.replace('/');
  }

  return (
    <>
      <p>This is a list of fruits and vegetables</p>
      <Link to="fruits">Take me to fruits</Link>
      <button onClick={handleGoBack}>Take me back</button>
      <Outlet />
    </>
  );
}
