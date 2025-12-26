import { useEffect, useRef, useState } from 'react';
import { PAGE_SIZE } from '../constants/search';

interface UseInfiniteScrollOptions {
  totalItems: number;
}

export const useInfiniteScroll = ({ totalItems }: UseInfiniteScrollOptions) => {
  const loaderWrapperRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(totalItems / PAGE_SIZE);
  const visibleCount = page * PAGE_SIZE;

  const resetPage = () => {
    setPage(1);
    loaderWrapperRef.current?.scrollTo(0, 0);
  };

  useEffect(() => {
    const $loader = loaderRef.current;
    const $loaderWrapper = loaderWrapperRef.current;

    if (!$loader || !$loaderWrapper) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(prevPage => Math.min(lastPage, prevPage + 1));
        }
      },
      { threshold: 0, root: $loaderWrapper },
    );

    observer.observe($loader);

    return () => observer.unobserve($loader);
  }, [lastPage]);

  return {
    loaderWrapperRef,
    loaderRef,
    page,
    visibleCount,
    resetPage,
  };
};
