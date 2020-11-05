@echo off
c:
cd \aliconnect\webroot\sites\schiphol\qnode\j2\dms
SET BROWSER="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
rem IIS Server
START "" %BROWSER% --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache --app="http://schiphol.localhost/qnode/j2/dms/webroot"
rem NodeJS Server
rem START "" %BROWSER% --disable-web-security --allow-file-access-from-files --kiosk --disable-application-cache --app="http://localhost:9000"

:node
cls
node index
pause
goto:node
