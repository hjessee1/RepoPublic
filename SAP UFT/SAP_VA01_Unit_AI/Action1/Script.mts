AIUtil.SetContext Browser("creationtime:=0")

AIUtil("search").Click
wait(5)
AIUtil("search").Search "VA01"
AIUtil.FindTextBlock("Create Sales Orders").Click

