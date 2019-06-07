install:
	npm install --save-dev
start:
	npx babel-node ./src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint ./