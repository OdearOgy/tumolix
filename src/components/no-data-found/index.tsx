import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Cluster, Cover } from '../layouts'

const NoDataFound = () => {
  return (
    <Cover className="min-h-screen">
      <Cluster justify="justify-center" align="items-center" className="flex-col text-4xl">
        <MagnifyingGlassIcon className="size-20" />
        <h3>No Data Found</h3>
      </Cluster>
    </Cover>
  )
}

export default NoDataFound
