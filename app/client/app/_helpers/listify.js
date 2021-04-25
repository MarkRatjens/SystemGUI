app.listify = (string) => string
.split("\n")
.map((string) => string.trim())
.filter((string) => string)
