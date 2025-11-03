import React from 'react'

const statsData =[
    {count:"5K", label:"Active Students"},
    { count: "10+", label: "Mentors" },
    { count: "200+", label: "Courses" },
    { count: "50+", label: "Awards" },
]

const Stats = () => {

  return (
    <>
        
        <section className='w-11/12 max-w-[1260px] mx-auto '>
        <div className='flex gap-6 items-center justify-between px-10 py-4 '>
            {
                statsData.map((data, index)=>{
                    return(
                        <div key={index} className='flex flex-col items-center py-10 gap-2'>
                            <h1 className="text-[30px] font-bold text-richblack-5">{data.count}</h1>
                            <p className="font-semibold text-[16px] text-richblack-500">{data.label}</p>
                        </div>
                    )
                })
            }
        </div>
        </section>

    </>
  )
}

export default Stats