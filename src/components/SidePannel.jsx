import React from 'react'
import { CgAddR } from "react-icons/cg";
import { CgBee } from "react-icons/cg";
import { CgEject } from "react-icons/cg";
import './SidePannel.css';
function SidePannel() {
  return (
    <div className='maindiv'>
      <div className='innerdiv'>
        <CgBee/>
        <h2>Hi, AltWorld</h2>
      </div>
      <div className='innerdiv'>
        <CgEject/>
        <h2>Dashboard</h2>
      </div>

      <div className='createassignment'>
        <CgAddR/>
        <p>New Assignment?</p>
        <p>Select from pre-defined questions to have a quick turnaround</p>
        <button>Create New Assignment</button>
      </div>

    </div>
  )
}

export default SidePannel
