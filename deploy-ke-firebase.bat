@echo off
title Deploy Shopping Tracker ke Firebase Hosting
echo ========================================================
echo   Deploy Shopping Tracker ke Firebase Hosting
echo   Project: shopping-tracker-70b66
echo ========================================================
echo.
echo [1/2] Memeriksa otentikasi Firebase...
call npx --yes firebase-tools login
echo.
echo [2/2] Mengupload file ke Firebase Hosting...
call npx --yes firebase-tools deploy --only hosting
echo.
echo ========================================================
echo   Selesai! Aplikasi Anda sudah live di internet.
echo ========================================================
pause
