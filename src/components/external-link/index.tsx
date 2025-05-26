import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import type { FunctionComponent, PropsWithChildren } from 'react'
import { Cluster } from '../layouts'

const ExternalLink: FunctionComponent<
  PropsWithChildren<{
    href: string
  }>
> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-max underline">
    <Cluster align="items-center" space="gap-2">
      <span>
        <ArrowTopRightOnSquareIcon className="size-4" />
      </span>
      {children}
    </Cluster>
  </a>
)

export default ExternalLink
