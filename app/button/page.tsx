'use client'
import React from 'react'
import Button from '@/components/Button'
import ShowData from '@/components/ShowData'

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

const page = () => {
  return <ShowData data={data} title='Button' />
}

export default page