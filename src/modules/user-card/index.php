<?php
$title = 'Личная карточка сотрудника | Транспит';

ob_start();
include ROOT . 'templates/user-card/user-card.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/user-card/user-card.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>