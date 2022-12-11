import React, { useState, useEffect } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { getPosts } from '../api/api'

export default function PostVIew() {

    const [userData, setUserData] = useState(null)
    const [currPage, setCurrPage] = useState(1)

    function fetchPosts() {
    
        getPosts(currPage)
            .then(res => {
                let dataArr = res.data
                // dataArr.reverse()
                setUserData(dataArr)
            })
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, [currPage])



    return (<>
        <div className='postview-container'>
            <Navbar />
            {userData === null ?
                <h1 className='while-loading'>Loading Posts...</h1>
                :
                <div className='card-caontainer'>
                    {userData.map((data, idx) => {
                        return <Card key={idx} data={data} />
                    })}
                    {userData.length === 0 ?
                        <h1 className='no-posts'>No posts to display</h1> : null}
                    <footer className='footer'>

                        <button
                            style={currPage === 1 ?
                                { backgroundColor: 'rgb(111, 111, 255)', border: 'none' } : {}}
                            onClick={() => {
                                if (currPage === 1) return
                                setCurrPage(prev => prev - 1)
                            }}
                        >PREV</button>

                        <span>{currPage}</span>

                        <button
                            style={!userData.length ?
                                { backgroundColor: 'rgb(111, 111, 255)', border: 'none' } : {}}
                            onClick={() => {
                                if (!userData.length) return
                                setCurrPage(prev => prev + 1)
                            }}
                        >NEXT</button>
                    </footer>

                </div>}
        </div>
    </>
    )
}
