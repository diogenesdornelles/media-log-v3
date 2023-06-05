import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Test Title component', () => {
  it('should render title', () => {
    render(<Title />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
  it('should render paragraph', () => {
    render(<Title />);
    const paragraph = screen.getByTestId('paragraph');
    expect(paragraph).toBeInTheDocument();
  });
});
