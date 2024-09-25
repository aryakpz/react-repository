
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



// SELECT 
//     category.name AS name, 
//     language.name AS name, 
//     COUNT(film.film_id) AS count
// FROM 
//     film 
// LEFT JOIN 
//     film_category  ON film.film_id = film_category.film_id
// LEFT JOIN 
//     category  ON film_category.category_id = category.category_id
// LEFT JOIN 
//     language  ON film.language_id = language.language_id
// GROUP BY 
//     category.name, 
//     language.name
// ORDER BY 
//     count desc





