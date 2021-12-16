import React, { useState } from 'react'
import "./ammosoul.css"
import AddForm from './AddForm.js'

function Flavors(props) {
    const { deleteFlavor, name, image, mainfruit, color, price, type, _id } = props
    const [editToggle, editFlavor] = useState(false)

    return ( <
        div className = "list-container" > {!editToggle ?

            <
            div >
            <
            h2 className = "flavorName" > { name } < /h2>

            <
            img className = "picture"
            src = { image }
            alt = "fruitpicture" / > < br / >
            mainfruit : { mainfruit } < br / >
            sold in: { type ? "Glass" : "Plastic" }
            Jar < br / >
            color: { color } < br / >
            Price: $ { price } <
                br / >
                <
                button onClick = {
                    () =>
                    deleteFlavor(_id)
                }
            className = 'delete-btn' > Delete <
            /button> <
            button onClick = {
                () =>
                editFlavor(prevToggle => !prevToggle)
            }
            className = "edit-btn" > Edit <
            /button>

            <
            /div>



            :
                <
                >
                <
                AddForm
            key = { _id }
            nameame = { name }
            image = { image }
            mainfruit = { mainfruit }
            type = { type }
            price = { price }
            color = { color }
            _id = { _id }
            btnText = "Submit Edit"
            submit = { props.editFlavor }
            /> <
            button
            className = "delete-btn"
            onClick = {
                () => editFlavor(prevToggle => !prevToggle)
            } >
            Close <
            /button> < /
            >
        } <
        /div>
    );
}
export default Flavors;