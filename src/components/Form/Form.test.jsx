import {  render, screen } from '@testing-library/react';
import {
//   CheckboxControl,
//   FormButton,
  InputControl,
  SelectControl,
//   TextAreaControl,
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

// test('Select Control', async () => {
//   render(
//     <SelectControl label="Animal" name="animal" required>
//       <option>Cat</option>
//       <option>Dog</option>
//       <option>Bird</option>
//     </SelectControl>
//   );

    
// });
