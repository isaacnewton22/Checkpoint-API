import React from 'react'

function ListItem({user}) {
    return (
        <li  className="list-group-item m-4">
            <h5>{user.name}</h5>
            <p>Email: {user.email}</p>
            <p>Adresse: {user.address.street}, {user.address.city}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Entreprise: {user.company.name}</p>
        </li>
    )
}

export default ListItem