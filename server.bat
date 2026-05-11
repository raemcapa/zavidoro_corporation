@echo off
set PORT=8000
for /f "tokens=4" %%a in ('route print ^| find " 0.0.0.0"') do (
    set IP=%%a
    goto :found
)
:found
echo Servidor iniciado en:
echo - Local:    http://localhost:%PORT%
echo - En tu red: http://192.168.105.47:%PORT%
echo.
echo Presiona Ctrl+C para detener el servidor.
python -m http.server %PORT% --bind 0.0.0.0
