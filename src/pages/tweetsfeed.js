import React from 'react'
import UnoTweet from '../components/unoTweet'
import Headers from '../components/headers'
import { useGlobalContext } from '../context'
import tweets from '../tweets'

const TweetsFeed = () => {
    const {tweets} = useGlobalContext()    
        return(
            <div className="w-full h-full sm:p-4 mx-auto max-w-xl 2xl:col-span-4 lg:col-span-3 col-span-7 sm:col-span-6 dark:text-white dark:bg-slate-900">
                <Headers />
              {
              tweets.map((tweet)=>{
                  return(
                  <UnoTweet tweet={tweet} key={tweet.id} />
                  )
        })}
        </div>)

    
}

export default TweetsFeed