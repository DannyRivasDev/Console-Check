import wikipedia

print("       Console Check")
print("---------------------------")
# game_title = input("Enter a game to check what consoles it was released on:")
game_title = "Gran Turismo (series)"
print(wikipedia.summary(game_title, sentences = 3))