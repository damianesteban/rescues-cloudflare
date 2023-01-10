

export const schema = `
  type Rescue {
    id: ID!
    name: String!
    rescuers: [Rescuer]
  }

  type Rescuer {
    id: ID!
    name: String!
    rescues: [Rescue]
  }

  type Query {
    rescues: [Rescue]
    rescue(id: ID!): Rescue
    rescuers: [Rescuer]
    rescuer(id: ID!): Rescuer
  }

  type Mutation {
    createRescue(name: String!): Rescue
    createRescuer(name: String!): Rescuer
    addRescuerToRescue(rescueId: ID!, rescuerId: ID!): Rescue
  }
`;
