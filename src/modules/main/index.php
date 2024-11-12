<?php
$details = R::find('users', 1);

$title = 'Транспит Северо-Запад';

// ob_start();
// include ROOT . 'templates/main/main.tpl';
// $content = ob_get_contents();
// ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/main/main.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>