const ShowData = ({ title, data }: { title: string, data: any[] }) => {
  const tags = Array.from(new Set(data.map(item => item.tag)))
  return (
    <div>
      <h1 className='text-5xl mb-10 text-center'>{title}</h1>
      {tags.map((tag, index) => <Show key={index} tag={tag} data={data}/>)}
    </div>
  )
}

const Show = ({ tag, data }: { tag: string, data: any[] }) => {
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

export default ShowData