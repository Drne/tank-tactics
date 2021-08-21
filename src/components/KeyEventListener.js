import useQuery from "../hooks/useQuery";
import {useCallback, useEffect} from "react";

export default function KeyEventListener({children}) {

    const {params, updateParams} = useQuery();

    const handleKeyDown = useCallback((event) => {
        function handleKeyDown(event) {

            console.log(event.code);
            if (event.code === 'KeyD') {
                if (params.has('darkMode')) {
                    params.delete('darkMode')
                } else {
                    params.set('darkMode', "1")
                }
                updateParams();
            } else if (event.code === 'KeyR') {
                if (params.has('rangeIndicator')) {
                    params.delete('rangeIndicator')
                } else {
                    params.set('rangeIndicator', "1")
                }
                updateParams();
            }
        }

        handleKeyDown(event);
    }, [params, updateParams])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return children
}