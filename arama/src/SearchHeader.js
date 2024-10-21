import "./SearchHeader.css"
import {useState} from 'react'
// import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'

function SearchHeader({search}) {
    const [valueInput, setValue] = useState('')

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        // debugger;
        search(valueInput)
        
    }

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    return <div className="headerDiv">
        <form className="formBox" onSubmit={handleFormSubmit}>
            <label>what are you looking for ?</label>
            <input  value={valueInput} placeholder="Search..." onChange={handleChange}/>
            {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
            {/* <div>{valueInput}</div> */}
        </form>
    </div>;
}

export default SearchHeader;