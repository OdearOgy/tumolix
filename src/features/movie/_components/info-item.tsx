import type { ReactNode } from '@tanstack/react-router'
import type { FunctionComponent } from 'react'
import { Cluster } from '../../../components/layouts'
import type { AlignItems } from '../../../components/layouts/types'

const InfoItem: FunctionComponent<{
  icon?: ReactNode
  label: string
  align?: AlignItems
}> = ({ icon, label, align }) => {
  return (
    <Cluster align={align ?? 'items-start'}>
      {icon && <span className="size-6">{icon}</span>}
      <p>{label}</p>
    </Cluster>
  )
}

export default InfoItem
