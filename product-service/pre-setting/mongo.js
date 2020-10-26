function seed(dbName, user, password) {
  db = db.getSiblingDB(dbName);
  db.createUser({
    user: user,
    pwd: password,
    roles: [{ role: 'readWrite', db: dbName }],
  });

  db.createCollection('products');

  db.products.createIndex({ name: 'text', description: 'text' });

  db.products.insertMany([
    {
      name: 'Test Configurable-simple product-S-Gray',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Gray',
      categories: 'Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 20,
      qty: 10,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Test Configurable-simple product-S-Green',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories: 'Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Test Configurable-simple product-S-Purple',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe AA",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Vans Men's Suede Sk-8 Hi Shoe",
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'TST-Conf-Simp-S-Green',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Walk It Out Heels',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'HEH-9133',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://www.domain.com/images/heh-2254_600x600.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Across The Pond Boots',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'HEH-2245',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://www.domain.com/images/ske-15460_600x600.png',
      price: 68,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lovey Dovey Maxi Dress',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'WKS-6016',
      categories:
        'Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category',
      image: 'https://firebearstudio.com/media/logos/default/logo.png',
      price: 68,
      qty: 100,
      status: 'publish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Diamonds Are Forever Pillow',
      description:
        '<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>',
      sku: 'DKO-PROF',
      categories: 'Pillows',
      image: 'https://www.domain.com/images/pgf-rik_600x600.png',
      price: 36,
      qty: 100,
      status: 'disable',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

seed('product_db', 'user-product', 'user-product');
