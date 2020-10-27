# Mini Shop Backend Project

Build a product service to retrieve product list and product detail to user. And a service to track user activities.

## About this Source Project

This project to apply some technologies as : Nodejs, Typescript, Express, Docker Compose, UnitTest with Jest and Some Design Patterns in it.

Following are the features of this project:

- **Typescript**: TypeScript extends JavaScript by adding types.
  By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.

- **Mongodb is used with Mongoose**: MongoDB is the perfect fit as a scalable, high-performance, open source NoSQL database solution. Using these two technologies together, web applications can be built quickly and easily and deployed to the cloud with very little difficulty.

- **Express Framework**: Fast, unopinionated, minimalist web framework for Node.js, is good framework to build restful api, it easy to use.

- **Microservices**: Project include project service and log service, they integrated through docker container. Next time we will implement an API gateway that is the single entry point for all clients.

<p align="center">
    <img src="https://github.com/kahnle/ms_product_user_track/blob/main/product-service/pre-setting/schema.png">
</p>
<br>

## How to build and run this project

- Install this project using Docker Compose [**Recommended Method**]
  - Clone this repo. you will see three directory (**log-service**, **product-service**, **start**)
  - Go to **log-service** directory and make a copy of **.env.example** file to **.env**.
  - Go to **product-service** directory and make a copy of **.env.example** file to **.env**.
  - Go to **product-service** directory make a copy of **tests/.env.test.example** file to **tests/.env.test**.
  - Install Docker and Docker Compose. [Find Instructions Here](https://docs.docker.com/install/).
  - Got to **start** directory Execute `docker-compose up -d` in terminal from the repo directory and wait a moment for every ready to use.
  - You will be able to access the api from http://localhost:3002
- Run The Tests
  - Install node.js and npm on your local machine.
  - From the root of the product-service project executes in terminal `npm install`.
  - _Use the latest version of node on the local machine if the build fails_.
  - To run the tests execute `npm test`.

## CURL API Examples

- Get Products
  curl http://localhost:3002/v1/products\?status\=publish\&page\=1\&limit\=5

  ```
  {
    "statusCode": "10000",
    "status": 200,
    "message": "success",
    "data": {
        "products": [
            {
                "_id": "5f96de5c013d93eab603a3fd",
                "name": "Test Configurable-simple product-S-Gray",
                "description": "<p>This is a test a simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://temp/the-improved-import.html</p>",
                "sku": "TST-Conf-Simp-S-Gray",
                "categories": "Default Category",
                "image": "https://temp/media/logos/default/logo.png",
                "price": 20,
                "qty": 10,
                "status": "publish"
            },
            {
                "_id": "5f96de5c013d93eab603a400",
                "name": "Vans Men's Suede Sk-8 Hi Shoe",
                "description": "<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://temp/the-improved-import.html</p>",
                "sku": "TST-Conf-Simp-S-Green",
                "categories": "Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category",
                "image": "https://temp/media/logos/default/logo.png",
                "price": 68,
                "qty": 100,
                "status": "publish"
            },
            {
                "_id": "5f96de5c013d93eab603a401",
                "name": "Vans Men's Suede Sk-8 Hi Shoe",
                "description": "<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import</p>",
                "sku": "TST-Conf-Simp-S-Green",
                "categories": "Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category",
                "image": "https://temp/media/logos/default/logo.png",
                "price": 68,
                "qty": 100,
                "status": "publish"
            }
        ],
        "total": 8,
        "page": 1
    }
  }
  ```
- Get Products with query is full text search in name and description
  curl http://localhost:3002/v1/products?query=simple&page=1&limit=3
  ```
    {
      "statusCode": "10000",
      "status": 200,
      "message": "success",
      "data": {
          "products": [
              {
                  "_id": "5f971d95db372b83d875bd20",
                  "name": "Test Configurable-simple product-S-Purple",
                  "description": "<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>",
                  "sku": "TST-Conf-Simp-S-Green",
                  "categories": "Default Category/Women/Tops/Hoodies & Sweatshirts,Default Category/Collections/Performance Fabrics,Default Category",
                  "image": "https://firebearstudio.com/media/logos/default/logo.png",
                  "price": 68,
                  "qty": 100,
                  "status": "disable"
              },
              {
                  "_id": "5f971d95db372b83d875bd1f",
                  "name": "Test Configurable-simple product-S-Green",
                  "description": "<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>",
                  "sku": "TST-Conf-Simp-S-Green",
                  "categories": "Default Category/Collections/Performance Fabrics,Default Category",
                  "image": "https://firebearstudio.com/media/logos/default/logo.png",
                  "price": 68,
                  "qty": 100,
                  "status": "disable"
              },
              {
                  "_id": "5f971d95db372b83d875bd1e",
                  "name": "Test Configurable-simple product-S-Gray",
                  "description": "<p>This is a test simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension: https://firebearstudio.com/the-improved-import.html</p>",
                  "sku": "TST-Conf-Simp-S-Gray",
                  "categories": "Default Category",
                  "image": "https://firebearstudio.com/media/logos/default/logo.png",
                  "price": 20,
                  "qty": 10,
                  "status": "publish"
              }
          ],
          "total": 15,
          "page": 1
      }
    }
  ```


- Get Product Detail By ID
  curl curl http://localhost:3002/v1/products/5f96de5c013d93eab603a3fd

  ```
  {
    "statusCode": "10000",
    "status": 200,
    "message": "success",
    "data": {
        "_id": "5f96de5c013d93eab603a3fd",
        "name": "Test Configurable-simple product-S-Gray",
        "description": "<p>This is a test a simple product that belongs to the test configurable product named Test Configurable Product with SKU: TST-Conf.</p>\n<p>That has been imported using Firebear Studio Imporved Import and Export extension:</p>",
        "sku": "TST-Conf-Simp-S-Gray",
        "categories": "Default Category",
        "image": "https://temp.com/media/logos/default/logo.png",
        "price": 20,
        "qty": 10,
        "status": "publish"
    }
  }
  ```

  ## USER ACTIVETIES

  - The user activities log saved at log collection of database in log service.
  <p align="center">
    <img src="https://github.com/kahnle/ms_product_user_track/blob/main/log-service/pre-setting/log_entity.png">
   </p>
