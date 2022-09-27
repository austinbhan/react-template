export default function AboutMe() {
  function handleGoBack() {
    window.location.replace('/');
  }
  return (
    <>
      <p>This is the About Me Page</p>
      <button onClick={handleGoBack}>Take me back</button>
    </>
  );
}
