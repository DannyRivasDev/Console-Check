import wikipediaapi

wiki_wiki = wikipediaapi.Wikipedia('Console Checker', 'en')

print("     Console Checker")
print("---------------------------")
game_title = input("Enter a game to check what consoles it was released on:")
# game_title = "Gran Turismo (series)"
page = wiki_wiki.page(game_title)
print(page.summary)
print(page.section_by_title('Games'))










print("Link to Wikipedia page: ", page.fullurl)