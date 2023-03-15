import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from "swr";
import fetcher, { DEFAULT_PER_PAGE } from '@/lib/util/fetcher';
import { SEARCH_TYPE_VALUES } from '@/lib/types/constant';
import Filter from '@/components/Filter';
import UserList from '@/components/Users';
import Pagination from '@/components/common/Pagination';
import Header from '@/components/common/Header';
import useViewport from '@/hooks/useViewPort';
import useSWRInfinite from "swr/infinite";
import Button from '@/components/common/Button'

const getURl = (page: number, q: any) => `/users?${q ? "q=" + q + "&" : ""}page=${page}&per_page=${DEFAULT_PER_PAGE}`;


export default function Users() {
  const { vw } = useViewport();
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
    router.replace(`/users?q=${text}`)
  }, []);

  const users = data ? [].concat(...data.map(batch => batch.items)) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.items?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.items?.length < DEFAULT_PER_PAGE);


  return (
    <>
      <Head>
        <title>Users Search</title>
        <meta name="description" content="Github search users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header onSearch={onSearch} placeholder={q} />
      <main>
        <div className="grid grid-cols-1 md:grid-cols-4 p-4">
          <div className='md:col-span-1'><Filter type={SEARCH_TYPE_VALUES.users} query={q ? String(q) : ''} /></div>
          <div className='md:col-span-2 px-4 pb-4'>
            <h3 className='text-lg font-semibold border-b-2 pb-4 mb-4'>{data?.[0]?.total_count} users results</h3>
            <UserList users={users} loading={isLoading} error={error} />
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
