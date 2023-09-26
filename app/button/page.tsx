'use client'
import React from 'react'
import Button from '@/components/Button'

const title = 'Input'
const data = [
  {id: 1, tag: 'type', ele: <Button />, code: "<Button />"},
  {id: 2, tag: 'type', ele: <Button type='primary' />, code: "<Button type='primary' />"},
  {id: 3, tag: 'type', ele: <Button type='danger' />, code: "<Button type='danger' />"},
  {id: 4, tag: 'primary', ele: <Button primary/>, code: "<Button primary/>"},
  {id: 5, tag: 'primary', ele: <Button primary type='primary' />, code: "<Button primary type='primary' />"},
  {id: 6, tag: 'primary', ele: <Button primary type='danger' />, code: "<Button primary type='danger' />"},
  {id: 7, tag: 'disable', ele: <Button disable />, code: "<Button disable />"},
  {id: 8, tag: 'href', ele: <Button href='/button' />, code: "<Button href='/button'>"},
  {id: 9, tag: 'className', ele: <Button className='bg-black text-white' />, code: "<Button className='dark' />"},
  {id: 10, tag: 'onClick', ele: <Button value='Click Me' onClick={() => {alert('hello')}} />, code: "<Button value='Click Me' onClick={() => {alert('hello')}} />"},
  {id: 11, tag: 'value', ele: <Button value='Hello' />, code: "<Button value='Hello' />"},
]

const tags = Array.from(new Set(data.map(item => item.tag)))

const page = () => {
  return (
    <div>
      <h1 className='text-5xl mb-10 text-center'>{title}</h1>
      {tags.map((tag, index) => <Show key={index} tag={tag}/>)}
    </div>
  )
}

const Show = ({ tag }: { tag: string }) => {
  return (
    <>
      <h2 className='text-3xl my-10'>🌀{tag}</h2>
      <div className='flex flex-col gap-10'>
        {data.filter(item => item.tag === tag).map(item => {
          return (
            <div key={item.id} className='flex gap-10 items-center'>
              {item.ele}
              <p>{item.code}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default page