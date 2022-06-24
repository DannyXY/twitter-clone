import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'
import React, { useContext, useState, UseEffect, useCallback } from 'react'
import allTweets from './tweets'

const AppContext =  React.createContext()

const AppProvider = ({children}) => {
    //create new tweet
    const [tweets,setTweets] = useState(allTweets)
    const  [tweet,setTweet] = useState({})
    const [text, setText] = useState('')
    const [liked,setLiked] = useState('false')
    const [likes, setLikes] = useState('')

    const currentUser = {
            display_name:'Dammit',
            username: 'babyOtunba',
            display_image:'https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_normal.jpg',
            date: 'April 27',
        }

    // const handleLikes = (e) => {
    // if (!e.target.classList.contains('link-btn')) {

    // }
    const handleLike = (e) =>{
        e.preventDefault()
        setLiked(!liked)
    }

    const appendLike = (likeID,e) =>{
        handleLike(e)
        setTweets(tweets.map((item)=>{
            if(item.id===likeID){
                const {likes} = item
                return {...item, liked:liked, likes:likes+1}
            }
            return item
        }))
        

    }

    const nFormatter = (value,digits)=> {
        const lookup = [
            {value:1, symbol:""},
            {value:1e3, symbol: "K"},
            {value:1e6, symbol: "M"}
        ]
        const re = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
            return value >= item.value
        })
        return item?(value / item.value).toFixed(digits).replace(re,"$1") + item.symbol : "0"
    }
    

    const formatValues = (tweet) =>{
        const {likes,retweets,comments} = tweet
        const likesForm = nFormatter(likes,1)
        const retweetForm = nFormatter(retweets,1)
        const commentForm = nFormatter(comments,1)
        return {likesForm,retweetForm,commentForm}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTweet = {...currentUser,text:text,id:tweets.length +2}
        tweets.unshift(newTweet)
        setTweets(tweets)
        setText('')
    }
    const getSingleTweet = (id) => {
            let singleTweet = tweets.find((tweet)=>tweet.id===id)
            setTweet(singleTweet)
            return singleTweet
    }


    return (
        <AppContext.Provider 
        value={{
            handleSubmit,
            getSingleTweet,
            setText,
            text,
            tweets,
            tweet,
            appendLike,
            formatValues
        }}
        >
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export{AppContext,AppProvider}
    //     const[tweets,setTweets] = React.useState([allTweets])
    //     const newfunc = (newFeed) =>{
        //         setTweets(newFeed)
        //     }