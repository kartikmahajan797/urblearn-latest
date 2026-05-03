@echo off
echo Fixing the folder structure for Vercel...

:: Move all files from nested Urblearn-main to the current root folder
cd Urblearn-main
xcopy /E /I /H /Y * ..\
cd ..

:: Delete the now-empty nested folder
rmdir /S /Q Urblearn-main

echo.
echo Folder structure fixed! Now pushing to GitHub...
echo.

git add .
git commit -m "Fix Vercel: Moved Next.js files to root directory"
git push

echo.
echo DONE! Vercel will now deploy successfully.
pause
