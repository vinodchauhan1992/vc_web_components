import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import VCToggleButton from '../app/components/vcToggleButton/VCToggleButton';

describe('VCToggleButton component tests', () => {
  const props = {
    label: 'label',
    onClicked: jest.fn(),
  };

  it('renders component unchanged', () => {
    const { container } = render(<VCToggleButton {...props} />);
    expect(container).toMatchSnapshot();
  });

  //   it('renders a heading', () => {
  //     render(<VCToggleButton />);

  //     const heading = screen.getByRole('heading', { level: 1 });

  //     expect(heading).toBeInTheDocument();
  //   });
});
