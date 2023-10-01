'use client'
import React, { useState } from 'react'
import VirtualList from '@/components/List'
import ShowData from '@/components/ShowData'
import Button from '@/components/Button'

const lists = Array(12000).fill(0).map((value, index) => ({ id: index, text: 'list-' + index}))

const Card_1 = ({ text }: { text: string }) => {
  return <div className='h-8 w-60 bg-slate-400 border-2 rounded-md text-center'>{text}</div>
}
const Card_2 = ({ text }: { text: string }) => {
  return <div className='h-8 w-28 bg-slate-400 border-2 rounded-md text-center'>{text}</div>
}
const Card_3 = ({ text }: { text: string }) => {
  return <div className='h-8 w-20 bg-slate-400 border-2 rounded-md text-center'>{text}</div>
}

const List = () => {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      <Button className='mb-2' onClick={() => {setFlag(f => !f)}} value={flag ? 'hidden' : 'show'} />
      <div style={{ width: 250, height: 320, border: 'solid 2px gray'}} className='overflow-auto flex flex-col items-center'>
        {flag && lists.map(i => <Card_1 key={i.id} text={i.text} />)}
      </div>
    </div>
  )
}

const data = [
  {
    id: 0,
    tag: 'List',
    ele: <List />,
    code: '<List data={data} />'
  },
  {
    id: 1,
    tag: 'Virtual List',
    ele: <VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={240} renderNode={Card_1}/>,
    code: "<VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={240} renderNode={Card_1}/>"
  },
  {
    id: 2,
    tag: 'Virtual List',
    ele: <VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={112} renderNode={Card_2}/>,
    code: "<VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={112} renderNode={Card_2}/>"
  },
  {
    id: 3,
    tag: 'Virtual List',
    ele: <VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={80} renderNode={Card_3}/>,
    code: "<VirtualList data={lists} width={250} height={320} itemHeight={32} itemWidth={80} renderNode={Card_3}/>"
  },
]

const page = () => {
  return <ShowData data={data} title='List' />
}

export default page