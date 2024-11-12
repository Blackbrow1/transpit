<?php if (!empty($errors)): ?>
<?php foreach ($errors as $error): ?>
<p class="message-container error-block"><?php echo $error['title'] ?></p>
<?php endforeach; ?>
<?php endif; ?>