
`SELECT film.title, COUNT(inventory.inventory_id) AS count
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE film.rating = 'PG-13'
GROUP BY film.film.title
HAVING COUNT(inventory.inventory_id) = 0;`

// select * from rental
// LEFT JOIN inventory ON rental.inventory_id =inventory.inventory_id
// left join film on inventory.film_id =film.film_id
// where film.title ='Aladdin Calendar' order by rental_id;