<?php if (!empty($_SESSION['errors'])):
foreach ($_SESSION['errors'] as $error): ?>
<p class="message-container error-block"><?php echo $error['title']; ?></p>
<?php endforeach;
$_SESSION['errors'] = [];
endif; ?>