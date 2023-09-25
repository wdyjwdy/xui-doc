import React, { Fragment } from 'react'
import Button from '@/components/Button'

const data = [
  {id: 1, ele: <Button />, code: "<Button />"},
  {id: 2, ele: <Button type='primary' />, code: "<Button type='primary' />"},
  {id: 3, ele: <Button type='danger' />, code: "<Button type='danger' />"},
  {id: 4, ele: <Button primary/>, code: "<Button primary/>"},
  {id: 5, ele: <Button primary type='primary' />, code: "<Button primary type='primary' />"},
  {id: 6, ele: <Button primary type='danger' />, code: "<Button primary type='danger' />"},
]

const page = () => {
  return (
    <div>
      <h1 className='text-5xl mb-10'>Button</h1>
      <div className='flex flex-col gap-10'>
        {data.map(item => {
          return (
            <div key={item.id} className='flex gap-10 items-center'>
              {item.ele}
              <p>{item.code}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page