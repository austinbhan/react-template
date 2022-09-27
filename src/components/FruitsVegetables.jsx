export default function FruitsVegetables() {
  function handleGoBack() {
    window.location.replace('/');
  }

  return (
    <>
      <p>This is a list of fruits and vegetables</p>
      <button onClick={handleGoBack}>Take me back</button>
    </>
  );
}
