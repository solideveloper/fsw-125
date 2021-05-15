import React, { useState } from 'react'
import "./bounty.css"
import AddBountyForm from './AddBountyForm.js'

function Bounties(props){
    const { deleteBounty, firstName, lastName, living, bountyAmount, type, _id } = props
    const [editToggle, editBounty] = useState(false)

    return (
        <div className= "list-container">
         { !editToggle ?
           
              <div>
                    <h2 className = "bountyName">{firstName} {lastName}</h2>
                        <h4>Type: {type}</h4>
                        <p>Life Status: {living ? "Alive" : "Dead"}</p>
                        <p>Bounty Amount: {bountyAmount}</p>
                    
                    <button onClick={() => 
                        deleteBounty(_id)} 
                        className='delete-btn'>Delete
                    </button>

                    <button onClick={() => 
                        editBounty(prevToggle => !prevToggle)} className="edit-btn"> Edit
                    </button>
              </div>
        
        :
        <>
            <AddBountyForm
                key={_id}
                firstName={firstName}
                lastName={lastName}
                living={living}
                bountyAmount={bountyAmount}
                type={type}
                _id={_id}
                btnText="Submit Edit" 
                submit={props.editBounty}
            />
            <button
                className="delete-btn"
                onClick={() => editBounty(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
        }
        </div>
    );
}
export default Bounties;