
`SELECT film.title, COUNT(inventory.inventory_id) AS count
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE film.rating = 'PG-13'
GROUP BY film.film.title
HAVING COUNT(inventory.inventory_id) = 0;`