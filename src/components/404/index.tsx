import { Link } from '@tanstack/react-router'
import Button from '../button'
import { Cluster, Cover } from '../layouts'

const NotFound = () => {
  return (
    <Cover className="min-h-screen mt-30 px-5 lg:px-10 xl:px-20 space-y-10">
      <Cluster
        justify="justify-center"
        align="items-center"
        className="h-[70dvh] flex-col text-4xl"
      >
        <h3>404 Not Found</h3>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </Cluster>
    </Cover>
  )
}

export default NotFound
