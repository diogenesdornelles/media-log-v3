// eslint-disable-next-line no-unused-vars
import { it, expect, describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import App from '../../App';

describe('Test Result component', () => {
  it('should be displayed float number after change input values', async () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const btnMoreRows = getByTestId('more-rows');
    fireEvent.click(btnMoreRows);
    const liInputs = getAllByTestId('li-input');
    const tiInputs = getAllByTestId('ti-input');
    fireEvent.change(tiInputs[0], { target: { value: '85' } });
    fireEvent.change(liInputs[0], { target: { value: '480' } });
    fireEvent.change(tiInputs[1], { target: { value: '90' } });
    fireEvent.change(liInputs[1], { target: { value: '420' } });
    expect(parseFloat(liInputs[1])).toBeTypeOf('number');
    expect(parseFloat(tiInputs[1])).toBeTypeOf('number');
  });
});
