<?php
$title = 'Редактировать профиль | Транспит';

ob_start();
include ROOT . 'templates/update-profile/update-profile.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/update-profile/update-profile.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>
