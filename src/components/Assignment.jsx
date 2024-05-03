import React from 'react'
import './Assignment.css'
function Assignment() {
  return (
    <div className='mainsdiv'>
        <div className='flexdiv' >
            <div className='leftdiv'>
                <h3>Sales BDE</h3>
                <p>Assignment Link</p>
                <p>Assignment Hour</p>
                <p>Assignment Ends at</p>
            </div>
            <div className='rightdiv'>
                <h3 ><span className='active' style={{color:'green'}}>Active</span></h3>
                <a href="">https://tiny.utl/asknakdna/</a>
                <p>3 hours</p>
                <p>11 March 2024</p>
            </div>
        </div>
        <button>TO REVIEW</button>
        <button>SHORTLISTED</button>

        <div className='flexdivtwo' >
            <div className='leftmost'>
                <p>CANDIDATE</p>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
                <div className='littleflex'  style={{display:'flex'}}>
                    <img src="" alt="" />
                    <div>
                        <p>Saurav Singh</p>
                        <p>saurav@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='rightmost'>
            <p>SCORE</p>
            <h3>78%</h3>
            <h3>72%</h3>
            <h3>64%</h3>
            <h3>32%</h3>
            <h3>51%</h3>
            <h3>44%</h3>
            </div>
        </div>
    </div>
   
  )
}

export default Assignment
