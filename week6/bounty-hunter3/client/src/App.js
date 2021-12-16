import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Bounties from './components/Bounty.js';
import AddBountyForm from './components/AddBountyForm.js';
import Search from './components/searchBounty';
import Footer from './components/Footer';

function App() {
    const [bounties, setBounties] = useState([])

    const getBounties = (() => {
        axios.get('/bounties')
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    })

    const addBounty = ((newBounty) => {
        axios.post('/bounties', newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    })

    const deleteBounty = (bountyId) => {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

   

    const editBounty = ((updates, bountyId) => {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map (bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    })

    const filterBounty = (bounties, query) => {
        if (!query) {
        }
    
        return bounties.filter((bounties) => {
            const bountyName = bounties.type;
            return bountyName.includes(query);
        });
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredBounty = filterBounty(bounties, query);

    useEffect(() => {
        getBounties();
    }, []);

    

    return (
        <div>
        
            <h1 
                className="title">Bounty Hunters
                <p className="ofthe">of the</p>
                Old Republic
            </h1>
        
                
           {/* BOUNTY FORM */}
            <AddBountyForm 
                submit={addBounty}
                btnText="Add Bounty"
            />
                { 
                bounties.map(bounty => {
                    return<Bounties 
                    {...bounty} 
                    key={bounty._id}
                    firstName={bounty.firstName}
                    lastName={bounty.lastName}
                    living={bounty.living}
                    bountyAmount={bounty.bountyAmount}
                    type={bounty.type}
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}
                    addBounty={addBounty}
                    
                    />}) 
                }

                  {/* SEARCH BOX */}
            <div className = "searchBox">
                <Search />
                    <ul className = "bountyFiltered">
                        {filteredBounty.map(bounty => (
                        <li key=
                        {bounty._id}>
                        {bounty.firstName}
                        {bounty.lastName} - 
                        {bounty.type}
                          
                        </li>
                        ))}
                    </ul>
            </div>
                <Footer />
        </div>
    )
}


export default App;