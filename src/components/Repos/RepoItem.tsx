import { getLanguageColor } from "@/lib/theme/themeUtil";
import { RepoItemType } from "@/lib/types/api/repoType";
import { formatStartsCount } from "@/lib/util/numbers";
import moment from "moment";
import React from "react";
import { GoRepo, GoStar, GoPrimitiveDot } from "react-icons/go";
import Tag from "../common/Tag";

interface RepoItemProps {
    repo: RepoItemType;
    styleClasses?: string;
}

const RepoItem: React.FC<RepoItemProps> = ({ repo, styleClasses }) => {

    const getIcon = (name: string) => {
        switch (name) {
            case "star":
                return <GoStar />
            case "dot":
                return <GoPrimitiveDot color={getLanguageColor('java')} />
            default:
                return null
        }
    }

    const footerItems = [
        {
            icon: getIcon('star'),
            title: formatStartsCount(Number(repo.stargazers_count)),
            key: "stars"
        },
        {
            icon: getIcon('dot'),
            title: repo.language,
            key: "language"
        },
        {
            title: `Updated ${moment(repo.updated_at).fromNow()}`,
            key: "updated_at"
        },
        {
            title: repo.open_issues > 0 ? `${repo.open_issues} ${repo.open_issues > 1 ? 'issues' : 'issue'} needs help` : '',
            key: "issues"
        }
    ]

    return <div
        className={[
            'border-b pb-2 mb-1',
            styleClasses,
        ].join(' ')} >
        <div className="flex items-center">
            <GoRepo />
            <a href={repo.html_url} className="ml-4 text-base text-blue-600">{repo.full_name}</a>
        </div>
        <p className="text-sm ml-8 text-slate-700">{repo.description}</p>
        <div className="mt-2 flex flex-wrap ml-8">
            {repo.topics && repo.topics.length > 0 && repo.topics.map((topic) => {
                return <Tag styleClass="mt-1" key={topic} title={topic} />
            })}
        </div>
        <div className="mt-2 flex flex-wrap ml-8">
            {footerItems.map(item => {
                return <div className="flex items-center mr-4" key={item.key}>
                    {!!item.icon && item.icon}
                    <span className="text-xs ml-1 text-slate-700">{item.title}</span>
                </div>
            })}
        </div>
    </div>
};

export default RepoItem;