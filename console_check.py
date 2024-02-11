import wikipedia

print("       Console Check")
print("---------------------------")
# game = input("Enter a game to check what consoles it was released on:")
game = "Gran Turismo (series)"
print(wikipedia.summary(game, sentences = 3))