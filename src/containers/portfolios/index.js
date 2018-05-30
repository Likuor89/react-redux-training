import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'


const portfList = props => (
    <div>
     portf: {props.portfs.toString()}
        <Link to="./modules/portfolios"></Link>
    </div>
) 

const portf = state => ({
     portfs: state.portfolios
})

export default connect (
portf
)(portfList)