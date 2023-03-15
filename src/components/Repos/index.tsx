import React, { memo } from "react";
import { RepoItemType } from "@/lib/types/api/repoType";
import RepoItem from "./RepoItem";
import LoadingSpinner from "../common/Loading";

interface ReposListProps {
    repos: RepoItemType[];
    loading: boolean;
    error?: string
}

const ReposList = ({ repos, loading, error }: ReposListProps) => {

    if (error) {
        return <h3 className="text-xl italic text-red-300">Something Went Wrong!</h3>
    }

    if (loading) {
        return <div className="flex justify-center">
            <LoadingSpinner />
        </div>
    }

    if (repos && repos.length === 0) {
        return <h3 className="text-xl italic">We couldn’t find any repositories matching your search</h3>
    }

    return <React.Fragment>
        {repos.length > 0 && repos.map((repo) => {
            return <RepoItem repo={repo} key={repo.id} />
        })}
    </React.Fragment>

};

export default memo(ReposList);