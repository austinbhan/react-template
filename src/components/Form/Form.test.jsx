import {  render, screen } from '@testing-library/react';
import {
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
} from '../FormComponents/FormComponents.jsx';

test ('Input Control', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);
});

test('Select Control', async () => {
  render(
    <SelectControl label="Animal" name="animal" required>
      <option>Cat</option>
      <option>Dog</option>
      <option>Bird</option>
    </SelectControl>
  );

  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.options.length).toBe(3);
  const placeHolderOption = selectControl.options[0];
  expect(placeHolderOption.textContent).toBe('Cat');
  expect(placeHolderOption.disabled).toBe(false);    
});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Do you accept?"
      label="Yes"
      name="accept"
      required
    />
  );

  const legend = screen.getByText('Do you accept?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('Submit Button', async () => {
  render(<FormButton text="Submit Me" />);

  const button = screen.getByRole('button');
  expect(button.textContent).toBe('');
});
