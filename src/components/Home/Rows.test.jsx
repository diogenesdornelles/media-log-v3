import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Test Rows component', () => {
  it('should be inputs equal to empty after click clear', () => {
    render(<App />);
    const liInput = screen.getByTestId('li-input');
    const tiInput = screen.getByTestId('ti-input');
    const btnMoreRows = screen.getByTestId('more-rows');
    fireEvent.change(liInput, { target: { value: 480 } });
    fireEvent.change(tiInput, { target: { value: 85 } });
    const btnClear = screen.getByTestId('clear-li-ti');
    for (let i = 0; i < 6; i++) {
      userEvent.click(btnMoreRows);
    }
    userEvent.click(btnClear);
    setTimeout(() => {
      expect(liInput).toHaveValue('');
      expect(tiInput).toHaveValue('');
    }, 500);
  });
});
