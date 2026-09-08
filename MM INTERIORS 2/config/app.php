<?php

declare(strict_types=1);

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start([
        'cookie_httponly' => true,
        'cookie_samesite' => 'Lax',
        'use_strict_mode' => true,
    ]);
}

date_default_timezone_set('Asia/Kolkata');

const APP_NAME = 'MM Interiors & Wallpapers';
const APP_URL = '';
const UPLOAD_DIR = __DIR__ . '/../uploads';
const UPLOAD_URL = '/uploads';
const SESSION_TIMEOUT = 3600;
const GCS_BUCKET = 'localdukan-assets';
const GCS_PREFIX = 'mminteriors';
const GCS_BASE_URL = 'https://storage.googleapis.com/' . GCS_BUCKET . '/' . GCS_PREFIX . '/';
const GCS_SERVICE_ACCOUNT_JSON = '/Users/tekmalbharathkumar/Downloads/helical-analogy-484315-f8-4e678f47a249.json';

require_once __DIR__ . '/database.php';
require_once __DIR__ . '/../includes/helpers.php';
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/service_content.php';
require_once __DIR__ . '/../includes/location_content.php';
