import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Loading from "react-loading-animation";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_success
      launch_year
      launch_date_local
      rocket {
        rocket_id
        rocket_type
        rocket_name
      }
    }
  }
`;

class Launch extends Component {
  render() {
    let flight_number = parseInt(this.props.match.params.flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) console.log(error);

            const {
              mission_name,
              flight_number,
              launch_success,
              launch_date_local,
              rocket: { rocket_id, rocket_name, rocket_type },
            } = data.launch;
            return (
              <div>
                <h1 className="display-4 my-4">
                  <span className="text-dark">Mission: </span> {mission_name}
                </h1>
                <h4 className="mb-3">Launch Details</h4>
                <ul className="list-group">
                  <li className="list-group-item">
                    Flight Number: {flight_number}
                  </li>
                  <li className="list-group-item">
                    Launch Year: {launch_date_local}
                  </li>
                  <li className="list-group-item">
                    Launch Sucessful:{" "}
                    <span
                      className={classNames({
                        "text-success": launch_success,
                        "text-danger": !launch_success,
                      })}
                    >
                      {launch_success ? "Yes" : "No"}
                    </span>
                  </li>
                </ul>

                <h4 className="mt-3 mb-3"> Rocket Details </h4>
                <ul className="list-group">
                  <li className="list-group-item">Rocket ID: {rocket_id}</li>
                  <li className="list-group-item">
                    Rocket Type: {rocket_type}
                  </li>
                  <li className="list-group-item">
                    Rocket Name: {rocket_name}
                  </li>
                </ul>
                <hr />
                <Link to="/" className="btn btn-secondary">
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
