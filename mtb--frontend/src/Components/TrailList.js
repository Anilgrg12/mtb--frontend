import React from 'react'
import Trails from './Trails'
import TrailDetail from './TrailDetail'

 const TrailList = (props) => {
        // debugger
        return (
          <div className = "sort-search">
            {props.trails.map(trail => <Trails key ={trail.id} trail={trail} deleteHandler = {props.deleteHandler} handelTrail = {props.handleTrail} history = {props.history} />)}
          </div>
        )
    }

    export default TrailList;
