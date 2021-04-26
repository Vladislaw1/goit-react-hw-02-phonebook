import React from 'react';



const PhoneList = ({ contacts, onClick }) => {

    const list = contacts.map(({ id , name , number}, index) => {
        return (
            <>
                <tr key={id} >
                    <td>{name}</td>
                    <td>{number}</td>
                    <td>
                        <button type="button" onClick={() => onClick(index)}>Delete</button>      
                    </td>
                </tr>
            </>
    )
    })
    return list;
};

export default PhoneList;