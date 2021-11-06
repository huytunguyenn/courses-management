import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";


const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.user)

    return(
        <Route {...rest} render={ (props) => (
            user.loggedIn
                ? <Component {...props}/>
                : <Redirect to={{
                    pathname: '/sign_in',
                    state: { from: props.location }
                }}/>
        )} />

    );
}

export default PrivateRoute