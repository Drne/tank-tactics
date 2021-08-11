import useIsValidID from "../hooks/useIsValidID";
import {Redirect} from "react-router-dom";
import {CircularProgress} from "@material-ui/core";
import {
useParams
} from "react-router-dom";

export default function ValidIdWrapper({children}) {
    const { id } = useParams()
    const {isValidID, isLoading} = useIsValidID(id)

    return (
        <div>
            {!isLoading && isValidID && children}
            {isValidID === false && !isLoading && <Redirect to={"/"}/>}
            {isLoading && <CircularProgress  /> }
        </div>
    )
}