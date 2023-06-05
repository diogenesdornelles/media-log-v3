import { it, expect, describe } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Test Data component', () => {
  it('should be inputs equal to empty after click clear', () => {
    render(<App />);
    const number = screen.getByTestId('number');
    const empresa = screen.getByTestId('empresa');
    const parte = screen.getByTestId('parte');
    const ano = screen.getByTestId('ano');
    fireEvent.change(number, { target: { value: 58154545 } });
    fireEvent.change(empresa, { target: { value: 'Empresa' } });
    fireEvent.change(parte, { target: { value: 'José' } });
    fireEvent.change(ano, { target: { value: 2005 } });
    const btnClear = screen.getByTestId('btn-clear-data');
    userEvent.click(btnClear);
    setTimeout(() => {
      expect(number).toHaveValue('');
      expect(empresa).toHaveValue('');
      expect(ano).toHaveValue('');
      expect(parte).toHaveValue('');
    }, 500);
  });
});
