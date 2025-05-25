const { categories } = require("../data")

exports.Product = {
    category: (parent) => categories.find(c => c.id === parent.categoryId)
  }