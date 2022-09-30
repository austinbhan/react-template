// Import the Form Components Here
import {
  InputControl,
  FormButton,
  SelectControl,
  TextAreaControl,
  CheckboxControl
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

        <InputControl
          label="Date"
          required
          type="date"
          name="date"
          placeholder="pick a date"
        />

        <SelectControl
          label="Letter"
          required
          name="letter"
          placeholder="select a letter"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </SelectControl>

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="tell me about yourself"
        />

        <CheckboxControl legend="do you accept?" label="Yes" />

        <FormButton text="Submit"/>
      </form>
    </>
  );
}


