AIUtil.SetContext Browser("creationtime:=0")

AIUtil.FindTextBlock("Create Sales Orders").Click
AIUtil("text_box", "Division:").Type "00"
AIUtil("text_box", "Distribution Channel:").Type "10"
AIUtil("text_box", "Order Type:").Type "OR"
AIUtil.FindTextBlock("Continue").Click
AIUtil("text_box", "Cust. Ref. Date:").Type "12/12/2025"
AIUtil("text_box", "Cust. Reference:").Type "450000019998"
AIUtil("text_box", "Ship-to Party:").Type "EWM17-CU02"
AIUtil("text_box", "Sold-to Party:").Type "EWM17-CU02"

