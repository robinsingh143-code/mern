'use client'
import axios from 'axios' ;
import React from 'react';
import toast from 'react-hot-toast';

const FileUploading = () => {

    const upload = (e) =>{

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
    <div className='flex justify-center items-center h-[90vh]'>
        <label className='block rounded-lg text-2xl border-2 border-dashed p-5 mt-5 cursor-pointer w-1/2 text-blue-500' htmlFor="upload">click here to upload file</label>
        <input id='upload' type="file" onChange={upload} hidden/>
    </div>
  )
}

export default FileUploading ;