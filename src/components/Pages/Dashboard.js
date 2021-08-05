import React, {useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../Auth'
import firebaseConfig from '../../config'

const Dashboard = () => {
    const   {currentUser} = useContext(AuthContext)

    if(!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Well Come</h1>
                <p>This is Dashboard page</p>
                <button onClick={() => firebaseConfig.auth().signOut()} className="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default Dashboard;