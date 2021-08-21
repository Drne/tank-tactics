import {
    useHistory,
    useLocation
} from "react-router-dom";

export default function useQuery() {
    const history = useHistory();
    const params = new URLSearchParams(useLocation().search);

    function updateParams() {
        history.replace({
            search: params.toString(),
        })
    }

    return { params, updateParams}
}