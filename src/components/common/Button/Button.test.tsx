import { queryByTestId, render, getByTestId } from '@testing-library/react'
import Button from './index';
import '@testing-library/jest-dom'

test("Button renders successfully", () => {
    render(<Button data-testid="button-element" title='I am Button' />);

    const element = getByTestId(document.documentElement, 'button-element');
    const notExistElement = queryByTestId(document.documentElement, 'does-not-exist');

    expect(element).toBeInTheDocument()
    expect(element).toBeInstanceOf(HTMLButtonElement)
    expect(element).toHaveTextContent('I am Button')
    expect(notExistElement).not.toBeInTheDocument()
})