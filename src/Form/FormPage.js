import React, { useState } from 'react'
import Navbar from '../PostView/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Resizer from "react-image-file-resizer"

function FormPage() {

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                600,
                600,
                "JPEG",
                80,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    const navigate = useNavigate()
    const [postDisabled, setPostDisabled] = useState(true)
    // const [imageFile, setImageFile] = useState('')
    const [data, setData] = useState({
        image: '',
        author: '',
        location: '',
        description: ''
    })

    const onFileChange = async (event) => {
        try {
            const file = event.target.files[0];
            const imageURI = await resizeFile(file);
            // console.log(imageURI);
            setData(prev => {
                return {
                    ...prev,
                    image: imageURI
                }
            })
        } catch (err) {
            console.log(err);
        }
    };


    formValidation()

    function formValidation() {
        if (!data.image ||
            !data.author ||
            !data.location ||
            !data.description) {
            return
        }
        if (postDisabled) {
            setPostDisabled(false)
        }
    }
    function onChangeHandler(e) {
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function onSubmitHandler(e) {

        e.preventDefault()

        axios
            .post('https://instaclone-server.onrender.com/posts', data)
            .then(res => {
                console.log('response :: ', res.data)
                navigate('/PostView')
            })
            .catch(e => { console.log(e) })

    }

    return (
        <>
            <Navbar />
            <div className='form-wrapper'>
                <form onSubmit={onSubmitHandler}>
                    <div className='image-file spacing'>
                        <input type="file"
                            name='imageFile'
                            accept='image/*'
                            onChange={onFileChange}
                        />
                    </div>
                    <div className='author-loc spacing'>
                        <input type="text"
                            name='author'
                            value={data.author}
                            placeholder='Author'
                            onChange={onChangeHandler} />
                        <input type="text"
                            name='location'
                            value={data.location}
                            placeholder='Location'
                            onChange={onChangeHandler} />
                    </div>
                    <div className='desc spacing'>
                        <input type="text"
                            name='description'
                            value={data.description}
                            placeholder='Description'
                            onChange={onChangeHandler} />
                    </div>
                    <div className='post-btn spacing'>
                        <button type='submit'
                            disabled={postDisabled}
                        >Post</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormPage
