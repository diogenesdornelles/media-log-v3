import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Test Nav component', () => {
  it('should render logo', () => {
    render(<Nav />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
