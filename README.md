# Description

Implement CRUD for Invoices.

As a user I want to:

1. See list of Invoices.
1. Be able to Create / Edit / Delete Invoices.

In Invoice create / edit form I want to be able to:

1. Select 1 Customer for Invoice.
1. Add any number of products to Invoice.
1. Specify quantity for each product.
1. See price for each product item.
1. Specify discount percentage for invoice total price.
1. See Invoice total price with and without discount.


# Dependencies

- sqlite3
- node
- npm

# Getting Started

###### Install npm dependencies
`npm install`

###### Run the node server
`npm run server`

###### Run client
`npm run client`

# Schema

## Customers

- id (integer)
- name (string)
- address (string)
- phone (string)


## Products

- id (integer)
- name (string)
- price (decimal)

## Invoices

- id (integer)
- customer_id (integer)
- discount (decimal)
- total (decimal)

## InvoiceItems

- id (integer)
- invoice_id (integer)
- product_id (integer)
- quantity (decimal)


# Resources

## Customers
```
GET|POST          /api/customers
GET|PUT|DELETE    /api/customers/{id}
```

## Products
```
GET|POST          /api/products
GET|PUT|DELETE    /api/products/{id}
```
## Invoices
```
GET|POST          /api/invoices
GET|PUT|DELETE    /api/invoices/{id}
```

## InvoiceItems
```
GET|POST          /api/invoices/{id}/items
GET|PUT|DELETE    /api/invoices/{invoice_id}/items/{id}
```


