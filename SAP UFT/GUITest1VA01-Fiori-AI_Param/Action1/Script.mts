AIUtil.SetContext Browser("creationtime:=0")
AIUtil("text_box", "User").Type Parameter("Username")
AIUtil("text_box", "Password").Type Parameter("Password")
AIUtil("button", "Log On").Click
wait(10)


AIUtil("search").Click
wait(5)
AIUtil("search").Search Parameter("Tcode")
AIUtil.FindTextBlock("Create Sales Orders").Click
AIUtil("text_box", "Division:").Type "00"
AIUtil("text_box", "Distribution Channel:").Type "10"
AIUtil("text_box", "Order Type:").Type "OR"
AIUtil.FindTextBlock("Continue").Click
AIUtil("text_box", "Cust. Ref. Date:").Type "12/12/2025"
AIUtil("text_box", "Cust. Reference:").Type "450000019998"
AIUtil("text_box", "Ship-to Party:").Type "EWM17-CU02"
AIUtil("text_box", "Sold-to Party:").Type "EWM17-CU02"
AIUtil("button", "", micFromRight, 1).Click

AIUtil.FindText("has been saved").CheckExists True

AIUtil.FindTextBlock("Exit").Click
AIUtil("left_triangle").Click

wait(5)

AIUtil.FindTextBlock("HJ").Click

wait(5)

'AIUtil("button", "HJ").Click
AIUtil.FindTextBlock("Sign Out").Click
AIUtil("button", "OK").Click

Browser("CreationTime:=0").Close

'Wait for an image to exist in a loop up to 15 times
Function WaitUntilImage(inputText)
counter = 0
   Do
	    counter = counter + 1
	    Wait 1
	    If counter >= 15 Then
		     Reporter.ReportEvent micFail, "Item not found", "The item >" & inputText & "< didn't appear within " & counter & " tries, please check the application."
		    ExitTest
	    End If 
	Loop Until AIUtil(inputText).Exist
End Function

