' Optional: Close any existing Chrome processes first to ensure a clean session
SystemUtil.CloseProcessByName("chrome.exe")

' Launch Chrome with specific arguments and the desired URL
Dim chromePath
chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe" ' Verify the exact path

' Arguments explained:
' --new-window: Opens the URL in a new window
' --user-data-dir="C:\Temp\UFTChromeProfile": Creates a separate, temporary profile for UFT to use
' --start-maximized: Maximizes the browser window
' [URL]: The website you want to navigate to

SystemUtil.Run chromePath, "--new-window --user-data-dir=""C:\Temp\UFTChromeProfile"" --start-maximized https://sap-hana.mfdemoportal.com:44300/sap/bc/ui2/flp#Shell-home"

AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "User").Type "hjessee"
AIUtil("text_box", "Password").Type "Barrsyst1!"
AIUtil("button", "Log On").Click

Wait(5)
