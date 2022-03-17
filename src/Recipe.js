import React from "react";

const Recipe = ({ recipe, handleDelete }) => {
    const { name, cuisine, photo, ingredients, preparation } = recipe;

    return (
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
                <button name="delete" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default Recipe;