'use client'
import axios from 'axios' ;
import React from 'react';
import toast from 'react-hot-toast';

const Adminlogin = () => {

  const upload = (e) => {

    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset','Mernbatch8')
    fd.append('colud_name','dnq9kkdqp')

    axios.post('https://api.cloudinary.com/v1_1/dnq9kkdqp/image/upload', fd)
    .then((result) => {
        toast.success('file upload successfully');
        console.log(result.data);
        
    }).catch((err) => {
        console.log(err);
        toast.error('failed to upload file');
        
    });

  }


  return (
    <div className='bg-white flex justify-center items-center h-screen'>
        <div className='bg-white flex md:flex-row flex-col border max-w-3xl p-5 border-gray-200'>
         {/* admin profile  */}  

        <div className=' items-center  lg:w-1/2 p-5 m-2'>
        <h1 className='font-bold text-center mb-5  ' >admin profile</h1>
            <div className='rounded-full w-28 h-28 border-2  border-white bg-gray-400 shadow-lg'>
              <label htmlFor="upload">upload image</label>

            <input id='upload' type="file" onChange={upload} hidden/>
                

            </div>
            <div className='m-2'><input className='text-center' type="text" placeholder='profile' /></div>
        </div>

            {/* admin login  */}


            <div className='lg:w-1/2  p-5'>
                <h1 className='font-bold text-center mb-5 '>admin login</h1>
                <form action="">
                    <div className=' mb-5'>
                        <input className='border-2 border-black w-full ' type="text" placeholder='email' />

                    </div>
                    <div className=''>
                        <input className='border-2 border-black w-full' type="text" placeholder='password'/>

                    </div> 
                    <div className=' mt-5 text-center'>
                        <button className='p-2 bg-orange-800'>admin login</button>
                    </div>

                </form>
            </div>



           
        </div>

    </div>
  )
}

export default Adminlogin