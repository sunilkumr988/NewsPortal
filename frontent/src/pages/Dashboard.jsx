import DashboardSidebar from '@/components/shared/DashboardSidebar'
import DashboardProfile from '@/components/shared/DashboardProfile'
import BottomNavBar from '@/components/shared/BottomNavBar'
import DashboardPosts from '@/components/shared/DashboardPosts'
// import DashboardUsers from '@/components/shared/DashboardUsers'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import DashboardUsers from '@/components/shared/DashboardUsers'

const Dashboard = () => {
  const location = useLocation()
  const [tab, setTab] = useState("")

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get("tab")

    // console.log(tabFromUrl)

    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])

  return (
     <div className="min-h-screen flex flex-col md:flex-row w-full">
      { /* Sidebar */ }
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      <BottomNavBar />

      {/* profile */}
      <div className='w-full'>
        {tab === "profile" && <DashboardProfile />}
        {/* newsArticle */}
        {tab === "posts" && <DashboardPosts />}
        
        {/*users */}
        {tab === "users" && <DashboardUsers />}

      </div>
    </div>
  ) 
}

export default Dashboard