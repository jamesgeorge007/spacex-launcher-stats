import React from 'react'

const LaunchItem = ({launch: {flight_number, mission_name, launch_date_local, launch_success}}) => {
    return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
            <h4>Mission: {mission_name}</h4>
            <p>Date: {launch_date_local} </p>
        </div>
        <div className="col-md-3">
            <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem;
