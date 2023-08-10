import { useSelector } from 'react-redux';

import { selectIsLoggedIn, selectIsRefreshing, selectError } from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isError = useSelector(selectError);


    return {
        isLoggedIn,
        isRefreshing,
        isError

    };
};
