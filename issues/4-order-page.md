# Order page

First of all, you need to implement a redux module to fetch and store single order.

Then, investigate. There are some orders that can't be fetched, the API returns various errors: 404, 500, etc.
You need to handle those errors and (at least) display polite messages.

Display all the data that you have in response in a table with 2 columns:

Property   | Value
---------- | ----------------
Ref number | 180203-613A-3AC7
Status     | Saved
Lab        | Protetiko Test Lab
...

All statuses must be highlighted with green color, `closed` must be with red.
