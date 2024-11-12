<?php if (!empty($success)): ?>
<?php foreach ($success as $item): ?>
<p class="message-container success-block"><?php echo $item['title'] ?></p>
<?php endforeach; ?>
<?php endif; ?>
