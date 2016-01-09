build_lib:
	node_modules/.bin/browserify src/index.js -o lib/react-turkce-textarea.browserify.js -t babelify -x react

build_example:
	node_modules/.bin/browserify example/app.js -o example/bundle.browserify.js -t babelify
