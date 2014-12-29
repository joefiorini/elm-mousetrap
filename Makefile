MOUSETRAP=./bower_components/mousetrap/mousetrap.js
MOUSETRAP_ADDITIONS=./js/mousetrap-additions.js

.PHONY: native

src/Native:
	mkdir -p src/Native

src/Native/Mousetrap.js: js/Native/Mousetrap.js $(MOUSETRAP) $(MOUSETRAP_ADDITIONS)
	browserify $< --require $(MOUSETRAP):mousetrap --require $(MOUSETRAP_ADDITIONS):mousetrap-additions > $@

native: src/Native src/Native/Mousetrap.js
