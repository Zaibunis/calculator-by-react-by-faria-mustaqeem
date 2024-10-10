import React, { useState } from 'react'
import './App.css'

function App() {
  const[value , setValue] = useState('');
  return (
    <div className="container">
            <div className="calculator">
              <form action="">
                <div className='display'>
                  <input type="text" value={value}/>
                </div>
                <div>
                  <input type="button" value="AC" />
                  <input type="button" value="DE"/>
                  <input type="button" value="."/>
                  <input type="button" value="/"/>
                </div>
                <div>
                  <input type="button" value="7"/>
                  <input type="button" value="8"/>
                  <input type="button" value="9"/>
                  <input type="button" value="*"/>
                </div>
                <div>
                  <input type="button" value="4"/>
                  <input type="button" value="5"/>
                  <input type="button" value="6"/>
                  <input type="button" value="+"/>
                </div>
                <div>
                  <input type="button" value="1"/>
                  <input type="button" value="2"/>
                  <input type="button" value="3"/>
                  <input type="button" value="-"/>
                </div>
                <div>
                  <input type="button" value="00"/>
                  <input type="button" value="0"/>
                  <input type="button" value="=" className='equal' />
                </div>
              </form>
            </div>
    </div>

  )
}

export default App

 
