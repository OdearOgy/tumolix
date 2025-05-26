import type { FunctionComponent } from 'react'
import { Cluster, Cover } from '../layouts'
import Spiral from '../spiral'

const DefaultLoader: FunctionComponent<{
  className?: string
}> = ({ className }) => {
  return (
    <Cover className="min-h-screen">
      <Cluster justify="justify-center" align="items-center" className="flex-col text-4xl">
        <Spiral className={className} />
      </Cluster>
    </Cover>
  )
}

export default DefaultLoader
