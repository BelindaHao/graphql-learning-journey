const { gql }  = require("apollo-server");

exports.typeDefs = gql`
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
    categories: [Category!]!

    """
    Returns all available products in the system.
    Returns: Non-null array of non-null Product objects.
    """
    products(filter: ProductsFilterInput, take: Int, offset: Int): [Product!]!

    """
    Retrieves a single product by its unique identifier.
    Parameters:
      id: The unique ID of the product to retrieve (required)
    Returns: A single Product object or null if not found.
    """
    product(id: ID!): Product

    """
    Fetches a specific category by its unique identifier.
    Parameters:
      id: The unique ID of the category to retrieve (required)
    Returns: A Category object or null if not found.
    Note: Includes all products belonging to this category.
    """
    category(id: ID!, filter: ProductsFilterInput): Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }
  
  type Product {
    id: ID!
    name: String
    description: String
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
    category: Category!
  }

  input ProductsFilterInput {
    onSale: Boolean
  }
`;