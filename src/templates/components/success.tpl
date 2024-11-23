<?php if (!empty($_SESSION['success'])):
foreach ($_SESSION['success'] as $item): ?>
<p class="message-container success-block"><?php echo $item['title']; ?></p>
<?php endforeach;
$_SESSION['success'] = [];
endif; ?>