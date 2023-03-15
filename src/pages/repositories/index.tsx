import Head from 'next/head'
import Header from '@/components/common/Header'
import Filter from '@/components/Filter'
import ReposList from '@/components/Repos'
import { useRouter } from 'next/router'
import { useCallback } from 'react';
import fetcher, { DEFAULT_PER_PAGE } from '@/lib/util/fetcher';
import { SEARCH_TYPE_VALUES } from '@/lib/types/constant'
import useSWRInfinite from "swr/infinite";
import Button from '@/components/common/Button'

const getURl = (page: number, q: any) => `/repositories?${q ? "q=" + q + "&" : ""}page=${page}&per_page=${DEFAULT_PER_PAGE}`;

export default function Repos() {
    const router = useRouter();
    const { query } = router;
    const { q } = query;

    //fetch data 
    const {
        data,
        size,
        setSize,
        isLoading,
        error
    } = useSWRInfinite(
        (index) => getURl(index + 1, q),
        fetcher
    );

    const onSearch = useCallback((text: string) => {
        router.replace(`/repositories?q=${text}`)
    }, [router]);

    const repos = data ? [].concat(...data.map(batch => batch.items)) : [];
    const isLoadingMore =
        isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.items?.length === 0;
    const isReachingEnd =
        isEmpty || (data && data[data.length - 1]?.items?.length < DEFAULT_PER_PAGE);
    return (
        <>
            <Head>
                <title>Repositories Search</title>
                <meta name="description" content="GitHub Repositories Search" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header onSearch={onSearch} placeholder={q} />
            <main>
                <div className="grid grid-cols-1 md:grid-cols-4 p-4">
                    <div className='md:col-span-1'><Filter type={SEARCH_TYPE_VALUES.repositories} query={q ? String(q) : ''} /></div>
                    <div className='md:col-span-2 px-4 pb-4'>
                        <h3 className='text-lg font-semibold border-b-2 pb-4 mb-4'>{data?.[0]?.total_count} repository results</h3>
                        <ReposList repos={repos} loading={isLoading} error={error} />
                        {!isLoading&& !error && !isReachingEnd && <div className='flex justify-center mt-4'>
                            <Button
                                styleClass='w-full capitalize flex justify-center border border-slate-400'
                                disabled={isLoadingMore || isReachingEnd}
                                onClick={() => setSize(size + 1)}
                                title={isLoadingMore
                                    ? "loading..."
                                    : "load more"} />
                        </div>}
                    </div>
                </div>
            </main>
        </>
    )
}

