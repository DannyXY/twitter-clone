import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/navbar"
import TweetsFeed from "./pages/tweetsfeed"
import Explore from "./components/explore-bar"
import SingleTweet from "./pages/SingleTweet";
import HorizontalNav from "./components/HorizontalNav";
import Headers from "./components/headers";
import UnoTweet from "./components/unoTweet";

export default function App() {
  return (
    <div className="w-full h-full dark:bg-slate-900">
      <div className="dark:bg-slate-900 relative grid grid-cols-7 max-w-lg sm:max-w-screen-sm md:max-w-screen-lg xl:max-w-screen-2xl mx-auto">
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<UnoTweet />} /> */}
        <Route path="/" element={<TweetsFeed />}/>
        <Route path='/tweet/:id' element={<SingleTweet />} />

        {/* <Route path='*' element={<Error />} /> */}

      </Routes>
      <HorizontalNav />
      <Explore />
    </Router>
    </div>
    </div>
  )
}