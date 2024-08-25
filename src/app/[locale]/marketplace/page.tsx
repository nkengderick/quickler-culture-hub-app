import Marketplace from '@/components/(containers)/Marketplace'
import DashLayout from '@/components/(layout)/DashBoardContainer'
import React from 'react'

const page = () => {
  return (
    <DashLayout>
      <Marketplace />
    </DashLayout>
  )
}

export default page