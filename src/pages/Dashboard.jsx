import React from 'react'
import Assignment from '../components/Assignment'
import StudentProfile from '../components/StudentProfile'
import './Dashboard.css'
function Dashboard() {
  return (
    <div className='dashboard'>
        <Assignment/>
        <StudentProfile/>
    </div>
  )
}

export default Dashboard
