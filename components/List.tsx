'use client'

import { Fragment, ReactElement, useState } from 'react'
import Button from './Button'

type VirtualListProps = {
  width: number,
  height: number,
  itemWidth: number,
  itemHeight: number,
  data: any[],
  buffer?: number,
  renderNode: any,
}

const VirtualList = ({ width, height, itemHeight, itemWidth, data, buffer=3, renderNode }: VirtualListProps): ReactElement => {
  const dataNum = data.length
  // const visibleItemNum = Math.floor(height / itemHeight)
  const colNum = Math.floor(width / itemWidth)
  itemHeight /= colNum
  const visibleItemNum = Math.floor(height / itemHeight)

  buffer = buffer * colNum
  const [start, setStart] = useState(0)
  const end = start + visibleItemNum
  // const startBuffer = start > buffer ? start - buffer : 0
  // const endBuffer = end < dataNum - buffer ? end + buffer : dataNum
  let startBuffer = start > buffer ? start - buffer : 0
  let endBuffer = end < dataNum - buffer ? end + buffer : dataNum
  startBuffer = startBuffer % colNum === 0 ? startBuffer : startBuffer - startBuffer % colNum
  endBuffer = endBuffer % colNum === 0 ? endBuffer : endBuffer - endBuffer % colNum
  // const topH = startBuffer * itemHeight
  // const botH = (dataNum - endBuffer) * itemHeight
  const topH = startBuffer * itemHeight
  const botH = (dataNum - endBuffer) * itemHeight


  const handleScroll = (e: any) => {
    let scrollTop = e.target.scrollTop;
    let index = Math.floor(scrollTop / itemHeight)
    setStart(index)
  }

  const [flag, setFlag] = useState(true)
  return (
    <div>
      <Button className='mb-2' onClick={() => {setFlag(f => !f)}} value={flag ? 'hidden' : 'show'} />
      <div
        style={{ width: width, height: height, border: 'solid 2px gray'}}
        onScroll={handleScroll}
        className='flex flex-wrap overflow-scroll justify-center'
      >
        <div style={{height: topH}}></div>
        {flag && data.slice(startBuffer, endBuffer).map(i => {
          return <Fragment key={i.id}>{renderNode(i)}</Fragment>
        })}
        <div style={{height: botH}}></div>
      </div>
    </div>
  )
}

export default VirtualList