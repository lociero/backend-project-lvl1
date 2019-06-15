install:
	npm install
start-calc:
	npx babel-node ./src/bin/brain-calc.js
start-even:
	npx babel-node ./src/bin/brain-even.js
start-gcd:
	npx babel-node ./src/bin/brain-gcd.js
start-prime:
	npx babel-node ./src/bin/brain-prime.js
start-progression:
	npx babel-node ./src/bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint .