<?php
$title = 'Кабинет администратора | Транспит';

ob_start();
include ROOT . 'templates/admin/admin.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/admin/admin.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>
