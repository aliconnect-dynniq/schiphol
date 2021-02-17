@echo off
if not exist package.json (
  call npm init
)
if not exist node_modules (
  call npm i @aliconnect/sdk
  if exist C:\aliconnect\node_modules\@aliconnect\sdk (
    ren node_modules\@aliconnect\sdk sdk_install
    mklink /D node_modules\@aliconnect\sdk C:\aliconnect\node_modules\@aliconnect\sdk
  )
)
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
rem START "" %BROWSER% --app="http://schiphol.localhost/qnode/j2/webroot/" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache
rem START "" %BROWSER% --app="http://localhost:9000" --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache




:node
cls
node node_modules\@aliconnect\sdk\api\dms --load=config
pause
goto:node
