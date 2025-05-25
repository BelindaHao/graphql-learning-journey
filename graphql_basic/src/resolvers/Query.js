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
    products: (_, { filter, take, offset = 0 }) => {
      let filterredProducts = filter ? products.filter(p => p.onSale === filter.onSale): [...products];
      
      if (offset < 0) {
        throw new Error('Offset cannot be negative');
      }

      const start = offset;
      const end = take ? start + take : filterredProducts.length;

      return filterredProducts.slice(start, end);
    },

    // Product
    product: (_, { id }) => products.find(p => p.id === id),

    // Category
    category: (_, { id }) => categories.find(c => c.id === id),
  }