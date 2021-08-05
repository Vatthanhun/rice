import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Auth'

const Home = () => {
    const {currentUser} = useContext(AuthContext);

    return(
        <>
        <div className="container mt-5">
            <h1>Home Page</h1>
            {currentUser? (
                <p>You are Logged In - <Link to="/dashboard">View DashBoard</Link></p>
            ): (
                <p>
                    <Link to="/login" className="btn btn-primary">Log In</Link> or <Link to="/signup" className="btn btn-success">Sign Up</Link>
                </p>
            )}
        </div>
        </>
    )
}
export default Home;