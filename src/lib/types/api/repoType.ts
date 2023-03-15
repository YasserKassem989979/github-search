export type RepoItemType = {
    id: number;
    name: string;
    full_name: string;
    private: false;
    owner: {
        id: number;
        avatar_url: string;
        url: string
    };
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    languages_url: string;
    created_at: string;
    updated_at: string;
    size: number;
    stargazers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    allow_forking: boolean;
    topics: string[];
    visibility: "public" | "private";
    forks: number;
    open_issues: number;
    watchers: number;
};