import wikipedia

print("       Console Check")
print("---------------------------")
game = input("Enter a game to check what consoles it was released on:")
print(wikipedia.summary(game))