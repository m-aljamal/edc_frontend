import React from 'react'
import {useSelector} from 'react-redux'
const LandingBage = () => {
    const state = useSelector(state => {
        console.log(state.auth_reducer.user);
        
    })

    console.log(state);
    
    return (
        <div>
            Landing Page
        </div>
    )
}

export default LandingBage
