setlocal enabledelayedexpansion

set "source_folder=.\features\Features_file"
set "destination_folder=.\features"
set "command=npx kraken-node run"


for /l %%i in (1, 1, 19) do (
    set /a next_index= %%i+1
    echo Ejecutando comando para EP%%i
    call :run_command "EP%%i"
    if exist "%destination_folder%\EP%%i.feature" (
        echo Moviendo EP%%i a features_file y trayendo EP!next_index!.feature a features
        move "%destination_folder%\EP%%i.feature" "%source_folder%" >nul
        move "%source_folder%\EP!next_index!.feature" "%destination_folder%" >nul
    ) else (
        echo El archivo EP%%i.feature no existe en %destination_folder%
    )
)

exit /b

:run_command
echo %command%
call %command%
exit /b