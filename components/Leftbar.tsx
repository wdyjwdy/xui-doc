'use client'

import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'

const links = [
  {id: 1, label: 'Button', route: '/button'},
  {id: 2, label: 'Input', route: '/input'},
  {id: 3, label: 'Notify', route: '/notify'},
]

const Leftbar = () => {
  const pathname = usePathname()
  
  return (
    <section>
      <div className='p-5 flex flex-col text-center'>
        <div>
          <h1 className='text-5xl'>XUI</h1>
        </div>
        <div className='flex flex-col gap-5 mt-10'>
          {links.map(link => {
            const isActive = pathname === link.route
            console.log(isActive)
            return (
              <Button
                value={link.label}
                href={link.route}
                key={link.id}
                type='primary'
                primary={isActive}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Leftbar