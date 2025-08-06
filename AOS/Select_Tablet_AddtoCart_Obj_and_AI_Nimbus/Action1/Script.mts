Browser("Advantage Shopping").Page("Advantage Shopping").Link("TabletsCategoryTxt").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP ElitePad 1000 G2 Tablet").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("virtualFooter").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping") @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("CONTINUE SHOPPING").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("dvantage").Click



AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("TABLETS").Click
AIUtil.FindTextBlock("HP ElitePad 1000 G2").Click
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil.FindTextBlock("REMOVE").Click
AIUtil.FindTextBlock("Your shopping cart is empty").CheckExists True
AIUtil("button", "CONTINUE SHOPPING").Click
