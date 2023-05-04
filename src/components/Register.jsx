import React from 'react'

const Register = () => {
    return (
        <div className='h-[100vh] w-full  grid place-items-center bg-[gray]'>
            <div className="bg-white max-w-[800px]">
                <div className="flex space-between border-b-[1px] border-[gray] p-[15px]">
                    <h1 className='m-[0]'>Create Account</h1>
                </div>
                <div className="flex flex-col items-start gap-[20px] p-[15px]">
                    <input type="text" placeholder='First Name' className='border-[1px] border-[gray] ' />
                    <input type="text" placeholder='Last Name' className='border-[1px] border-[gray] ' />
                    <input type="text" placeholder='Email Address' className='border-[1px] border-[gray] ' />
                    <input type="text" placeholder='Password' className='border-[1px] border-[gray] ' />
                    <input type="text" placeholder='Password Confirmation' className='border-[1px] border-[gray] ' />
                    <div className="flex gap-[10px]">
                        <button className='bg-[red] text-[white] rounded-[20px] p-[5px] px-[20px]'>Register Now</button>
                        <button className='bg-[white] text-[gray] border-[1px] border-[gray] rounded-[20px] p-[5px] px-[20px]'>Register with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register