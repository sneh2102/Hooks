import React from 'react'
import { useState } from 'react'

export default function UseState() {


  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [comment, setComment] = useState("")
  
  return (
      <>      
        <label>Name</label><br/>
        <input onChange={(e) => setName(e.target.value)} className="form-control form-control-sm" /><br/><br/>
        
        
        <label>Gender</label><br/>
        <input type="radio" id="male" name="gender" value="male" onChange={(e) => setGender(e.target.value)} checked={gender === 'male'} />
        <label htmlFor="male">Male</label><br/>
        <input type="radio" id="female" name="gender" value="female" onChange={(e) => setGender(e.target.value)} checked={gender === 'female'} />
        <label htmlFor="female">Female</label><br/>
        <input type="radio" id="other" name="gender" value="other" onChange={(e) => setGender(e.target.value)} checked={gender === 'other'} />
        <label htmlFor="other">Other</label>
        <br/><br/>
                
        <label htmlFor="comment">Comment</label><br/>
        <textarea id="comment" onChange={(e) => setComment(e.target.value)} style={{width: "400px"}}></textarea>
        
        <h2>Preview</h2>
        <table border="1">
          <tr>
            <td>Username</td><td>{name}</td>
          </tr>
          <tr>
            <td>Gender</td><td>{gender}</td>
          </tr>
          <tr>
            <td>Comment</td><td><pre>{comment}</pre></td>
          </tr>
        </table>
      
      </>)
}

