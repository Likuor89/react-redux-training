import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'


const portfList = props => (
    <div>
        <h2>Portfs:</h2> 
        <ul>
            {props.portfs.map(portf => (
                <li>{portf.label}</li>
            ))}
        </ul>
    </div>
) 

const portf = state => ({
     portfs: state.portfolios
})

export default connect (
portf
)(portfList)