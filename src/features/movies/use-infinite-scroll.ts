import { useEffect } from 'react'

type InfiniteScrollOptions = {
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
  offset?: number
}

const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  offset = 300,
}: InfiniteScrollOptions) => {
  useEffect(() => {
    function handleScroll() {
      const scrollTop = globalThis.scrollY
      const windowHeight = globalThis.innerHeight
      const fullHeight = globalThis.document.documentElement.scrollHeight

      const isNearBottom = scrollTop + windowHeight >= fullHeight - offset

      if (isNearBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    }

    globalThis.addEventListener('scroll', handleScroll)
    return () => globalThis.removeEventListener('scroll', handleScroll)
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, offset])

  return null
}

export default useInfiniteScroll
