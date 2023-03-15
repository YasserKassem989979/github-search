import { queryByTestId, render, getByTestId, screen } from '@testing-library/react'
import UserItem from '../UserItem';
import '@testing-library/jest-dom';
import { UserItemType } from '@/lib/types/userType';

const user: UserItemType = {
    "login": "MMKV",
    "id": 28454084,
    "avatar_url": "https://avatars.githubusercontent.com/u/28454084?v=4",
    "html_url": "https://github.com/MMKV",
    "type": "User",
}

test("UserItem Component renders successfully", () => {
    render(<UserItem user={user} />);

    const element = getByTestId(document.documentElement, 'user-item');
    const imgElement = screen.getByAltText("profile avatar")
    const notExistElement = queryByTestId(document.documentElement, 'does-not-exist');

    expect(element).toBeInTheDocument()
    expect(element).toBeInstanceOf(HTMLDivElement)
    expect(imgElement).toBeInTheDocument()
    expect(element).toHaveTextContent(user.login)
    expect(notExistElement).not.toBeInTheDocument()
})