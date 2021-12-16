import React from 'react';
import AddAuthors from '../Components/AddAuthors';

const Edit = (props) => {

    const { scope, id, setLoaded, loaded } = props;
 
    return (
        <div> 
            <AddAuthors scope={"edit"} id={id} />
        </div>
    )
}
export default Edit;