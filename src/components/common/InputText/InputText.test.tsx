import { queryByTestId, render, getByTestId,fireEvent } from '@testing-library/react'
import InputText from './index';
import '@testing-library/jest-dom'

test("InputText renders successfully", () => {
    const { getByTestId } = render(<InputText  placeholder='input placeholder' data-testid="input-element" />);

    const element = getByTestId('input-element') as HTMLInputElement;
    const notExistElement = queryByTestId(document.documentElement, 'does-not-exist');
    fireEvent.change(element, { target: { value: 'Hello World' } });

    expect(element).toBeInTheDocument()
    expect(element).toBeInstanceOf(HTMLInputElement)
    expect(element.placeholder).toEqual('input placeholder')
    expect(element.value).toBe('Hello World');
    expect(notExistElement).not.toBeInTheDocument()
})