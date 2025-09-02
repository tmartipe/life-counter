@echo off
REM Run the websocket server in a new window
start "" cmd /c "node websocket-server.ts"

REM Run the dev server
npm run dev -- --host 0.0.0.0