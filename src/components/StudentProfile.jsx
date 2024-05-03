import React from 'react'

function StudentProfile() {
  return (
    <div className='mainlydiv'  >
      <div className='firstdiv'>
        <div className='istodiv'  >
            <div className='littleflex'>
                <img src="" alt="" />
                <div>
                    <h3>Saurav Singh</h3>
                    <p>saurav@gmail.com</p>
                </div>
            </div>
            <h3>78%</h3>
        </div> 

        <div className='secondisto'>
            <div className='skills'>
                <p>Behavioural</p>
                <p>Communication</p>
                <p>Situation handling</p>
            </div>
            <div className='percentagebar'>

            </div>
            <div className='score'>
                <p>9/10</p>
                <p>8/10</p>
                <p>6/10</p>
            </div>
        </div>

        <div>
            <div>
                <h3>About</h3>
                <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
            </div>
            <div>
                <h3>Experience</h3>
                <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
            </div>
            <div>
                <h3>Hobbies</h3>
                <p><p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p></p>
            </div>

            <div>
                <h3>Introduction</h3>
                <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
            </div>

            <button>SHORTLIST</button>
        </div>
      </div>
      
      <div className='imagediv'>
        {/* <img src="https://cdn.pixabay.com/photo/2024/04/12/15/46/beautiful-8692180_1280.png" alt="" /> */}
      </div>
    </div>
  )
}

export default StudentProfile
