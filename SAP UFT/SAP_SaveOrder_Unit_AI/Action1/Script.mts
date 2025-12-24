AIUtil.SetContext Browser("creationtime:=0")

AIUtil("button", "", micFromRight, 1).Click

AIUtil.FindText("has been saved").CheckExists True

AIUtil.FindTextBlock("Exit").Click
AIUtil("left_triangle").Click

wait(5)

AIUtil.FindTextBlock("HJ").Click

wait(5)

AIUtil.FindTextBlock("Sign Out").Click
AIUtil("button", "OK").Click

Browser("CreationTime:=0").Close

