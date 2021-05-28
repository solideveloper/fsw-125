import React, { useState } from "react";

function AddForm(props) {
  const initInputs = {
    name: props.name || "",
    mainfruit: props.mainfruit || "",

    image: props.image || "",
    type: props.type || "",
    price: props.price || "",
    color: props.color || "",
  };

  const [inputs, setInputs] = useState(initInputs);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = ((e) => {
    e.preventDefault();
    if (inputs.type === "glass") {
      inputs.type = true;
    } else {
      inputs.type = false;
    }
    props.submit(inputs, props._id);
    setInputs(initInputs);
  });

  return (
    <div className ="addFlavor">
      <form onSubmit={handleSubmit}>
      <h2>Add New Flavor Here</h2>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Flavor Name"
        />
         <input
          type="img"
          name="image"
          value={inputs.image}
          onChange={handleChange}
          placeholder="Image Url"
        />
        <br/>
        <input
          type="text"
          name="mainfruit"
          value={inputs.mainfruit}
          onChange={handleChange}
          placeholder="Main Fruit Ingredient"
        />
        <input
          type="text"
          name="type"
          value={inputs.type}
          onChange={handleChange}
          placeholder="Glass or Plastic"
        />
        <br/>

        <input
          type="text"
          name="color"
          value={inputs.color}
          onChange={handleChange}
          placeholder="Flavor Color"
        />

        <input
          type="number"
          name="price"
          value={inputs.price}
          onChange={handleChange}
          placeholder="Price: $"
        />
        <br/>

       
        <button className="add-btn">{props.btnText}</button>
      </form>
    </div>
  );
}

export default AddForm;
