const { products } = require("../data")

exports.Category =  {
    products: (parent, { filter }) => {
      let filterredProducts = products.filter(p => p.categoryId === parent.id);
      if(filter) {
        return filterredProducts.filter(p => p.onSale === filter.onSale);
      }
      
      return filterredProducts;
    }
  }