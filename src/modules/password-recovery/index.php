<?php
$title = 'Восстановить пароль | Транспит';

ob_start();
include ROOT . 'templates/password-recovery/password-recovery.tpl';
$content = ob_get_contents();
ob_end_clean();

include ROOT . 'templates/_parts/_header.tpl';
include ROOT . 'templates/password-recovery/password-recovery.tpl';
include ROOT . 'templates/_parts/_footer.tpl';
?>
