<?php
require "vendor/autoload.php";
$router = new AltoRouter();
$router->setBasePath('/cinetech');


$router->map('GET', '/', function () {
    require "src/View/home.php";
}, 'home');

$router->map('GET', '/tvShows', function () {
    require "src/View/tvShow.php";
}, 'tvShow');


$router->map('GET', '/movies', function () {
    require "src/View/movies.php";
}, 'movies');

$router->map('GET', '/tvShow/[i:id]', function ($id) {
    require "src/View/detailTvShow.php";
}, 'detailTvShow');

$router->map('GET', '/movie/[i:id]', function ($id) {
    require "src/View/detailMovie.php";
}, 'detailMovie');



// match
$match = $router->match();

// call closure or throw 404 status
if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}

?>