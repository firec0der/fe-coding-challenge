# Orders page

*Note: The API always returns only 10 orders, doesn't support sorting, filtering, pagination.*

Here will be 3 main features: list of orders, sorting and filter.

## List of orders

First of all, you need to implement a redux module to fetch and store orders.
Basicly, it's a table with 5 columns:

Ref | Patient | Clinic | Lab | Created at
--- | ------- | ------ | --- | ----------

Each row mush be clickable, and on click a user must be redirected to the order page (`/orders/:orderId`).

Don't forget to render loader while a loading of the list. Don't implement pagination.

## Sorting

Implement a dropdown with 4 options somewhere above the orders list:

1. Lab (ASC)
2. Lab (DESC)
3. Created at (ASC)
4. Created at (DESC)

Obviously, list should be sorted properly.
