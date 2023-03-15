import React from "react";
import UserItem from "./UserItem";
import LoadingSpinner from "../common/Loading";
import { UserItemType } from "@/lib/types/userType";

interface UserListProps {
    users: UserItemType[];
    loading: boolean;
    error?: string
}

const UserList = ({ users, loading, error }: UserListProps) => {

    if (error) {
        return <h3 className="text-xl italic text-red-300">Something Went Wrong!</h3>
    }

    if (loading) {
        return <div className="flex justify-center">
            <LoadingSpinner />
        </div>
    }

    if (users && users.length === 0) {
        return <h3 className="text-xl italic">We couldn’t find any users matching your search</h3>
    }

    return <React.Fragment>
        {users.length > 0 && users.map((user) => {
            return <UserItem user={user} key={user.id} />
        })}
    </React.Fragment>

};

export default UserList;