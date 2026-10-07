@echo off
title Shopping Tracker PWA Launcher
echo ========================================================
echo   Memulai Shopping Tracker PWA Server...
echo ========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
