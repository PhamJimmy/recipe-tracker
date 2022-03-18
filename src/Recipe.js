import React, { useState } from "react";

const Recipe = ({ recipe, index, handleDelete, handleUpdate }) => {
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  const [updateForm, setUpdateForm] = useState({ ...recipe });
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    if (edit) {
        handleUpdate([index, updateForm]);
    }
    setEdit(!edit);
  };

  const handleChange = ({ target }) => {
    setUpdateForm({
      ...updateForm,
      [target.name]: target.value,
    });
  };

  return !edit ? (
    <tr>
      <td className="content_td">
        <p>{name}</p>
      </td>
      <td className="content_td">
        <p>{cuisine}</p>
      </td>
      <td className="content_td">
        <img src={photo} alt={name} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td className="content_td">
        {!edit ? (
          <button name="edit" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button name="update" onClick={()=>handleEdit()}>
            Update
          </button>
        )}
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required={true}
          onChange={handleChange}
          value={updateForm.name}
        />
      </td>
      <td>
        <input
          id="cuisine"
          name="cuisine"
          type="text"
          placeholder="Cuisine"
          required={true}
          onChange={handleChange}
          value={updateForm.cuisine}
        />
      </td>
      <td>
        <input
          id="photo"
          name="photo"
          type="url"
          placeholder="URL"
          required={true}
          onChange={handleChange}
          value={updateForm.photo}
        />
      </td>
      <td>
        <textarea
          id="ingredients"
          name="ingredients"
          type="text"
          placeholder="Ingredients"
          required={true}
          onChange={handleChange}
          value={updateForm.ingredients}
        >
        </textarea>
      </td>
      <td>
        <textarea
          id="preparation"
          name="preparation"
          type="text"
          placeholder="Preparation"
          required={true}
          onChange={handleChange}
          value={updateForm.preparation}
        ></textarea>
      </td>
      <td>
        <button name="update" onClick={handleEdit}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default Recipe;
