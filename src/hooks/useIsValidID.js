import {useEffect, useState} from "react";
import {checkValidId} from "../utilities/fetchGameData";

export default function useIsValidID(id) {
    const [isValidID, setIsValidId] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        if (id) {
            checkValidId(id).then((result) => {
                setIsValidId(result)
            }).finally(() => setIsLoading(false));
        }
    }, [id, setIsValidId])
    
    return {isValidID, isLoading};
}