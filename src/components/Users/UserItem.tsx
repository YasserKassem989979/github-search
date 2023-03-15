import React from "react";
import { UserItemType } from "@/lib/types/api/userType";
import Image from "next/image";

interface UserItemProps {
    user: UserItemType;
    styleClasses?: string;
}

const UserItem: React.FC<UserItemProps> = ({ user, styleClasses }) => {
    return <div
        data-testid="user-item"
        className={[
            'border-b pb-2 mb-1',
            styleClasses,
        ].join(' ')} >
        <div className="flex items-center">
            <Image alt="profile avatar" src={user.avatar_url} width={48} height={48} className="rounded-full" />
            <a href={user.html_url} className="ml-4 text-base text-blue-600">{user.login}</a>
        </div>
    </div>
};

export default UserItem;