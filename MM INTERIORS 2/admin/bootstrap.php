<?php

declare(strict_types=1);

require_once __DIR__ . '/../config/app.php';

function admin_render(string $view, array $data = [], string $title = 'Admin Panel'): void
{
    extract($data, EXTR_SKIP);
    ob_start();
    require __DIR__ . '/../views/admin/' . $view . '.php';
    $content = ob_get_clean();
    require __DIR__ . '/../views/layouts/admin.php';
}

function table_count(string $table, ?string $where = null): int
{
    $sql = "SELECT COUNT(*) AS aggregate FROM {$table}";
    if ($where) {
        $sql .= ' WHERE ' . $where;
    }
    return (int) (db()->query($sql)->fetch()['aggregate'] ?? 0);
}

function handle_delete(string $table): void
{
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['action'] ?? '') === 'delete') {
        verify_csrf();
        delete_record($table, (int) $_POST['id']);
        flash('success', 'Record deleted successfully.');
        redirect_to($_SERVER['PHP_SELF']);
    }
}
