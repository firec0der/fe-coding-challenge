# Orders page

*Note: The "API" always returns only 10 orders, it doesn't support sorting, filtering, pagination. For the sorting and filter requirements below, the respective functionality must be implemented by the client.*

Here will be 3 main features: list of orders, sorting and filter.

## List of orders

First of all, you need to implement a redux module to fetch and store orders.

Displaying the list is basically a table with 5 columns:

Ref | Patient | Clinic | Lab | Created at
--- | ------- | ------ | --- | ----------

Each row mush be clickable, and onClick a user must be redirected to the order page (`/orders/:orderId`).

Don't forget to render loader while loading of the list. Pagination should not be implemented.

## Sorting

- Implement a dropdown with 4 options:
  1. Lab (ASC)
  2. Lab (DESC)
  3. Created at (ASC)
  4. Created at (DESC)
- Dropdown must be located somewhere above the orders list.

Obviously, list should be sorted properly.

## Filter

- Implement a dropdown with types to filter by (e.g filter by clinic, lab, etc).
- Implement a input field with value that'll be used for filtering. Filter the list after each typed letter.
- Filter must be located somewhere above the orders list.
- Filter must implement "includes" logic, so for "foo" query "beforefoo", "fooafter", "inthefoomiddle" are the possible values.
- Filter must be case **in**sensitive.
- No filter should be applied by default.
- "Filter by" dropdown options:
  1. Clinic 
  2. Lab
  3. Patient
  4. Created at (Please, use "YYYY-MM-DD" format for comparison)

## UX

Think about UX, display all the items as you want, make it easy to use.
