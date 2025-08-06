AIUtil.SetContext Browser("creationtime:=0")

AIUtil.FindTextBlock("CONTACT US").Click
AIUtil("combobox", "Select Category").Select "Headphones"
AIUtil("combobox", "CHAT WITH US").Select "HP H2310 In-ear Headset"
AIUtil("input", "Email").Type "email@email.com"
AIUtil("text_box", "Subject").Type "Please send me info"
AIUtil("button", "SEND").Click
AIUtil.FindTextBlock("dvantage DEMO").Click
