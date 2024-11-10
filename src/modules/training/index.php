<?php
$title = 'Обучение сотрудников | Транспит';

ob_start();
include ROOT . 'templates/training/training.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/training/training.tpl';
include ROOT . 'templates/_parts/_footer.tpl';

?>