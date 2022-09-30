// Import the Form Components Here
import {
  InputControl
} from '../FormComponents/FormComponents';

export default function Form() {
  return (
    <>
      <form>
        <InputControl
          label="Name"
          name="name"
          placeholder="your name"
        />
      </form>
    </>
  );
}


