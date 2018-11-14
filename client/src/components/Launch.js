import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'react-router-dom';
import classNames from 'classnames';

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
      let flight_number  = parseInt(this.props.match.params.flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{flight_number}}>
            {
                ({loading, error, data}) => {
                    if(loading) return <h3>Loading ...</h3>
                    if(error) console.log(error);

                    console.log(data);
                    return <h1>Test</h1>
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Launch;
