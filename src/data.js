// Categories data
const categories = [
    { id: 'cat_elec', name: 'Electronics' },
    { id: 'cat_home', name: 'Home' },
    { id: 'cat_fit', name: 'Fitness' },
    { id: 'cat_smart', name: 'Smart Home' },
    { id: 'cat_cloth', name: 'Clothing' },
    { id: 'cat_kit', name: 'Kitchen' },
    { id: 'cat_office', name: 'Office' },
    { id: 'cat_comp', name: 'Computer' }
  ];
  
  // Products data with categoryId references
  const products = [
    {
      id: 'a3f8b2e1',
      name: 'Wireless Bluetooth Earbuds',
      description: 'High-quality wireless earbuds with noise cancellation',
      quantity: 150,
      price: 79.99,
      onSale: true,
      categoryId: 'cat_elec'
    },
    {
      id: 'c5d9e7f2',
      name: 'Stainless Steel Water Bottle',
      description: 'Insulated 32oz bottle, keeps drinks cold for 24 hours',
      quantity: 230,
      price: 24.95,
      onSale: false,
      categoryId: 'cat_home'
    },
    {
      id: 'b4a6c8d0',
      name: 'Yoga Mat',
      description: 'Eco-friendly non-slip yoga mat with carrying strap',
      quantity: 85,
      price: 29.99,
      onSale: true,
      categoryId: 'cat_fit'
    },
    {
      id: 'e2f9a1b3',
      name: 'Smart LED Light Bulb',
      description: 'WiFi enabled color changing smart bulb, works with Alexa',
      quantity: 42,
      price: 19.99,
      onSale: false,
      categoryId: 'cat_smart'
    },
    {
      id: 'd7e3f5a2',
      name: 'Organic Cotton T-Shirt',
      description: '100% organic cotton unisex t-shirt, available in multiple colors',
      quantity: 310,
      price: 22.50,
      onSale: true,
      categoryId: 'cat_cloth'
    },
    {
      id: 'f1a8b3c6',
      name: 'Wireless Phone Charger',
      description: '10W fast charging pad, compatible with Qi-enabled devices',
      quantity: 120,
      price: 15.99,
      onSale: true,
      categoryId: 'cat_elec'
    },
    {
      id: '9b2c4d6e',
      name: 'Ceramic Coffee Mug Set',
      description: 'Set of 4 handmade ceramic mugs with modern design',
      quantity: 65,
      price: 35.00,
      onSale: false,
      categoryId: 'cat_kit'
    },
    {
      id: '8e5d3f2a',
      name: 'Fitness Tracker Watch',
      description: 'Waterproof activity tracker with heart rate monitor',
      quantity: 90,
      price: 59.95,
      onSale: false,
      categoryId: 'cat_fit'
    },
    {
      id: '7c1d9e4f',
      name: 'Portable Bluetooth Speaker',
      description: 'Compact waterproof speaker with 12-hour battery life',
      quantity: 75,
      price: 45.50,
      onSale: true,
      categoryId: 'cat_elec'
    },
    {
      id: '6f4e2d1c',
      name: 'Leather Notebook',
      description: 'Handmade genuine leather journal with refillable pages',
      quantity: 40,
      price: 28.00,
      onSale: false,
      categoryId: 'cat_office'
    },
    {
      id: '5d3e8f1a',
      name: 'Air Purifier',
      description: 'HEPA filter air purifier for rooms up to 300 sq ft',
      quantity: 28,
      price: 129.99,
      onSale: true,
      categoryId: 'cat_home'
    },
    {
      id: '4b2c9d7e',
      name: 'Mechanical Keyboard',
      description: 'RGB backlit gaming keyboard with cherry MX switches',
      quantity: 55,
      price: 89.99,
      onSale: false,
      categoryId: 'cat_comp'
    }
  ];
  
  module.exports = {
    categories,
    products
  };