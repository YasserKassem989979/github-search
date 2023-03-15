import { queryByTestId, render, getByTestId } from '@testing-library/react'
import InputText from './index';
import '@testing-library/jest-dom'

test("InputText renders successfully", () => {
    render(<InputText defaultValue={"input value"} placeholder='input placeholder' data-testid="input-element" />);

    const element = getByTestId(document.documentElement, 'input-element');
    const notExistElement = queryByTestId(document.documentElement, 'does-not-exist');

    expect(element).toBeInTheDocument()
    expect(element).toBeInstanceOf(HTMLInputElement)
    expect(element.getAttribute('placeholder')).toEqual('input placeholder')
    expect(element.getAttribute('value')).toEqual('input value')
    expect(notExistElement).not.toBeInTheDocument()
})