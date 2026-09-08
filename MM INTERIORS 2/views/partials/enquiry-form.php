<?php
$defaults = $defaults ?? [];
$sourcePage = $sourcePage ?? 'Website';
$submitLabel = $submitLabel ?? 'Request Callback';
?>
<form action="/submit-enquiry" method="post" class="enquiry-form">
    <input type="hidden" name="_csrf" value="<?= e(csrf_token()); ?>">
    <input type="hidden" name="source_page" value="<?= e($sourcePage); ?>">
    <input type="hidden" name="source_url" value="<?= e($_SERVER['REQUEST_URI'] ?? '/'); ?>">
    <div class="form-grid">
        <label>Name
            <input type="text" name="name" required>
        </label>
        <label>Mobile Number
            <input type="tel" name="mobile" required>
        </label>
        <label>Location
            <input type="text" name="location">
        </label>
        <label>Required Service
            <input type="text" name="service" value="<?= e($defaults['service'] ?? ''); ?>">
        </label>
        <label>Property Type
            <select name="property_type">
                <option>Apartment</option>
                <option>Villa</option>
                <option>Independent House</option>
                <option>Office</option>
                <option>Shop</option>
                <option>Commercial Space</option>
                <option>Other</option>
            </select>
        </label>
        <label>Email
            <input type="email" name="email">
        </label>
        <label class="full">Message
            <textarea name="message" rows="4"><?= e($defaults['message'] ?? ''); ?></textarea>
        </label>
    </div>
    <button type="submit" class="button button-gold"><?= e($submitLabel); ?></button>
</form>
