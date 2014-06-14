# Common sizes for favicon.ico and Android/iOS launcher icons
# https://github.com/audreyr/favicon-cheat-sheet
FAVICON_SIZES = 16 24 32 48 57 64 72 114 120 144 152

.PHONY: all main-favicon $(FAVICON_SIZES)

all: $(FAVICON_SIZES) main-favicon

$(FAVICON_SIZES):
	convert base.png -resize $@x$@ $@.png

main-favicon: 16.png 24.png 32.png 48.png 64.png
	convert 16.png 24.png 32.png 48.png 64.png favicon.ico
