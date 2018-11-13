const { GraphQLObjectType, GraphQLInt, GraphQLBoolean, GraphQLString }= require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType }
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
    rocket_id: { type: GraphQLBString },
    rocket_name: { type: GraphQLBString },
    rocket_type: { type: GraphQLBString }
    })
});