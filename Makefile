
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components node_modules

test: build node_modules
	@node node_modules/.bin/mocha-phantomjs \
		--path node_modules/.bin/phantomjs \
		/test/index.html

node_modules:
	@npm install

.PHONY: clean test
