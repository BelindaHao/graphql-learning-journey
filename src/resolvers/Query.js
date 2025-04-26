const {products, categories} = require("../data");

exports.Query =  {
    // Simple greeting endpoint
    hello: () => "World!",
    
    // Mock product price (in a real app, this would come from a database)
    price: () => 999.99,
    
    // Mock inventory count
    stock: () => 20,
    
    // Sale status flag (false by default)
    onSale: () => false,
    
    // Product categorization
    categories: () => categories,

    // Products
    products: () => products,

    // Product
    product: (_, { id }) => products.find(p => p.id === id),

    // Category
    category: (_, { id }) => categories.find(c => c.id === id),
  }