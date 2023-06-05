// eslint-disable-next-line no-unused-vars
import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event';

describe('Test Result component', () => {
  it('should be displayed float number after change input values', async () => {
    const user = userEvent.setup();
    render(<App />);
    const btnMoreRows = screen.getByTestId('more-rows');
    await user.click(btnMoreRows);
    const liInputs = screen.getAllByTestId('li-input');
    const tiInputs = screen.getAllByTestId('ti-input');
    fireEvent.change(tiInputs[0], { target: { value: '85' } });
    fireEvent.change(liInputs[0], { target: { value: '480' } });
    fireEvent.change(tiInputs[1], { target: { value: '90' } });
    fireEvent.change(liInputs[1], { target: { value: '420' } });
    console.log(tiInputs[0].value);
    const result = screen.getByRole('result');
    screen.debug(result);
  });
});
