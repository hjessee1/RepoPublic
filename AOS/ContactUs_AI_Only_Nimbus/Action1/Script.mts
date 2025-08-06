AIUtil.SetContext Browser("creationtime:=0")

AIUtil.FindTextBlock("CONTACT US").Click
AIUtil("combobox", "Select Category").Select "Tablets"
AIUtil("combobox", "CHAT WITH US").Select "HP ElitePad 1000 G2 Tablet"
AIUtil("input", "Email").Type "test@test.com"
AIUtil("text_box", "Subject").Type "Send me some info"
AIUtil("button", "SEND").Click

AIUtil.FindTextBlock("Thank you for contacting Advantage support").Click
AIUtil("button", "CONTINUE SHOPPING").Click
