const { ApolloServer, gql }  = require("apollo-server");

const typeDefs = gql`
  type Query {
    """
    Returns a friendly greeting message.
    Used to verify the GraphQL server is working.
    Example response: "World!"
    """
    hello: String
    
    """
    Gets the current product price including currency information.
    Returns: Float representing price in USD.
    Example: 999.99
    """
    price: Float
    
    """
    Provides real-time inventory count for the product.
    Returns: Integer representing available stock units.
    Example: 20
    """
    stock: Int

    """
    Indicates if the product is currently discounted.
    Business Rule: Returns true if sale price is active.
    Returns: Boolean flag
    """
    onSale: Boolean

    """
    Lists all product categories this item belongs to.
    Returns: Non-null array of non-null strings.
    Note: Empty array means uncategorized.
    Example: ["Bike", "Cloth", "Kitchen"]
    """
    categories: [String!]!
  }
`;

const resolvers = {
  Query: {
    // Simple greeting endpoint
    hello: () => "World!",
    
    // Mock product price (in a real app, this would come from a database)
    price: () => 999.99,
    
    // Mock inventory count
    stock: () => 20,
    
    // Sale status flag (false by default)
    onSale: () => false,
    
    // Product categorization
    categories: () => ["Bike", "Cloth", "Kitchen"]
  }
};

const server = new ApolloServer({
        typeDefs,
        resolvers
});

server.listen().then( ({url}) => {
    console.log("Server is ready at " + url);
})