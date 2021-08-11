import {TextField} from "@material-ui/core";
import {useState} from "react";
import {checkValidId} from "../utilities/fetchGameData";
import {Redirect} from "react-router-dom"

export default function Login() {
    const [value, setValue] = useState('');
    const [validID, setValidID] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    async function onKeyDown(e) {
        if (e.keyCode === 13) {
            const isValidId = await checkValidId(e.target.value);
            if (isValidId) {
                setValidID(e.target.value);
            } else {
                setErrorMessage("Invalid Player ID");
            }
        }
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div style={{backgroundColor: 'lightslategrey', height: '100vh'}}>
            <TextField style={{position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)'}}
                       onSubmit={() => console.log('tada')} onKeyDown={onKeyDown} value={value} onChange={handleChange}
                       error={errorMessage !== ''} helperText={errorMessage}/>
            {validID ? <Redirect to={`${validID}`}/> : ''}
        </div>
    )
}