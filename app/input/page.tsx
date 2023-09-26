'use client'
import React from 'react'
import Input from '@/components/Input'

const title = 'Input'
const data = [
  {id: 1, tag: 'width', ele: <Input />, code: "<Input />"},
  {id: 2, tag: 'width', ele: <Input width='small' />, code: "<Input width='small' />"},
  {id: 3, tag: 'type', ele: <Input value='123' />, code: "<Input value='123' />"},
  {id: 4, tag: 'type', ele: <Input value='123' type='password' />, code: "<Input value='123' type='password' />"},
  {id: 5, tag: 'label', ele: <Input label='Name: ' />, code: "<Input label='Name: ' />"},
  {id: 6, tag: 'disabled', ele: <Input disabled />, code: "<Input disabled />"},
  {id: 7, tag: 'className', ele: <Input className='bg-slate-400 border-slate-700' />, code: "<Input className='dark' />"},
  {id: 8, tag: 'prefix and suffix', ele: <Input prefix='www.' />, code: "<Input prefix='www.' />"},
  {id: 9, tag: 'prefix and suffix', ele: <Input suffix='.com' />, code: "<Input suffix='.com' />"},
  {id: 10, tag: 'prefix and suffix', ele: <Input prefix='www.' suffix='.com' />, code: "<Input prefix='www.' suffix='.com' />"},
  {id: 11, tag: 'prefix and suffix', ele: <Input prefix='www.' prefixEnable />, code: "<Input prefix='www.' prefixEnable />"},
  {id: 12, tag: 'prefix and suffix', ele: <Input suffix='.com' suffixEnable />, code: "<Input suffix='.com' suffixEnable />"},
  {id: 13, tag: 'onChange', ele: <Input onChange={() => {alert('hello')}} />, code: "<Input onChange={() => {alert('hello')}} />"},
  {id: 14, tag: 'onPressEnter', ele: <Input onPressEnter={() => {alert('hello')}} />, code: "<Input onPressEnter={() => {alert('hello')}} />"},
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