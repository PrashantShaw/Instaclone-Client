import React, { useState, useEffect } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import axios from 'axios'

export default function PostVIew() {

    const [userData, setUserData] = useState('')

    function fetchPosts() {
        axios
            .get('https://prashant-instaclone-api.herokuapp.com/posts')
            .then(res => {
                let dataArr = res.data
                dataArr.reverse()
                setUserData(dataArr)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])



    return (<>
        <div className='postview-container'>
            <Navbar />
            {!userData.length ?
                <h1 className='while-loading'>Loading Posts...</h1>
                :
                <div className='card-caontainer'>
                    {userData.map((data, idx) => {
                        return <Card key={idx} data={data} />
                    })}
                </div>}
        </div>
    </>
    )
}
