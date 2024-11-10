<?php
$title = 'Страница тестирования | Транспит';

ob_start();
include ROOT . 'templates/test-hero/test-hero.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/test-hero/test-hero.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>
