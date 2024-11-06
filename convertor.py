from fontTools.ttLib import TTFont

input_file_opensans = "./fonts/LibreFranklin-VariableFont_wght.ttf"
font_opensans = TTFont(input_file_opensans)

output_file_woff_opensans = "./fonts/LibreFranklin-VariableFont_wght.woff"
font_opensans.flavor = 'woff'
font_opensans.save(output_file_woff_opensans)

output_file_woff2_opensans = "./fonts/LibreFranklin-VariableFont_wght.woff2"
font_opensans.flavor = 'woff2'
font_opensans.save(output_file_woff2_opensans)

print("Fonts converted successfully!")
