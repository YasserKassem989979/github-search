import { queryByTestId, render, getByTestId, screen } from '@testing-library/react'
import Header from './index';
import '@testing-library/jest-dom'

test("Header renders successfully", () => {
    render(<Header data-testid="header-element" />);

    const element = getByTestId(document.documentElement, 'header-element');
    const imgElement = screen.getByAltText("Github logo")
    const notExistElement = queryByTestId(document.documentElement, 'does-not-exist');

    expect(element).toBeInTheDocument()
    expect(imgElement).toBeInTheDocument()
    expect(element).toBeInstanceOf(HTMLElement)
    expect(notExistElement).not.toBeInTheDocument()
})