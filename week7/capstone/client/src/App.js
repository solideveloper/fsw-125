import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Flavors from './components/Ammosoul';
import AddForm from './components/AddForm';
import Search from './components/searchAmmo';
import Footer from './components/Footer';

function App() {
    const [flavors, setFlavors] = useState([])

    const getFlavors = (() => {
        axios.get('/flavors')
            .then(res => setFlavors(res.data))
            .catch(err => console.log(err))
    })

    const addFlavor = ((newFlavor) => {
        axios.post("/flavors", newFlavor)
            .then(res => {
                setFlavors(prevFlavors => [...prevFlavors, res.data])
            })
            .catch(err => console.log(err))
    })

    const deleteFlavor = (flavorId) => {
        axios.delete(`flavors/${flavorId}`)
            .then(res => {
                setFlavors(prevFlavors => prevFlavors.filter(flavor => flavor._id !== flavorId))
            })
            .catch(err => console.log(err))
    }


    const editFlavor = ((updates, flavorId) => {
        axios.put(`flavors/${flavorId}`, updates)
            .then(res => {
                setFlavors(prevFlavors => prevFlavors.map (flavor => flavor._id !== flavorId ? flavor : res.data))
            })
            .catch(err => console.log(err))
    })

    const filterFlavor = (flavors, query) => {
        if (!query) {
        }
    
        return flavors.filter((flavor) => {
            const flavorName = flavor.type;
            return flavorName;
        });
    };

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredFlavor = filterFlavor(flavors, query);

    useEffect(() => {
        getFlavors();
    }, []);

    return (
        <div className ="containerBox">
              
          
        <div className ="header">
        
            <h1 
                className="title">Elderberry Infused
                Sea Moss Gel
            </h1>
            <img
          src="https://user-images.githubusercontent.com/72266712/99827766-0f481300-2b28-11eb-8b07-700f65358317.jpg"
          alt="mainimage"
          className="mainimage">
        </img>
        <AddForm 
                submit={addFlavor}
                btnText="Add Flavor"
            />
            </div>
            <div className="menu">
             {/* FLAVOR FORM */}
             
                { 
                flavors.map(flavor => {
                    return<Flavors 
                    {...flavor} 
                    key={flavor._id}
                    name={flavor.name}
                    image={flavor.image}
                    mainfruit={flavor.mainfruit}
                    type={flavor.type}
                    price={flavor.price}
                  
                    deleteFlavor={deleteFlavor}
                    editFlavor={editFlavor}
                    addFlavor={addFlavor}
                    
                    />}) 
                }
            


            {/* SEARCH BOX */}
            <Search />
        
                    <ul className = "flavorFiltered">
                        {
                        filteredFlavor.map(flavor => {
                    return<Flavors 
                    {...flavor} 
                    key={flavor._id}
                    name={flavor.name}
                    image={flavor.image}
                    mainfruit={flavor.mainfruit}
                    type={flavor.type}
                    price={flavor.price}
                  
                    deleteFlavor={deleteFlavor}
                    editFlavor={editFlavor}
                    addFlavor={addFlavor}
                    
                    />})}
                    </ul>
                </div>

                <Footer />
        </div>
    )
}


export default App;