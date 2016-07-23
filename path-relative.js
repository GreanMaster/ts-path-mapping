const path = require('path');

function getGeneratedViewPath() {
	return path.resolve(path.dirname('./generated/templates/views/bar.ts'));
}
function getSrcViewPath() {
	return path.resolve(path.dirname('./src/views/foo.ts'));
}
function getRelativePath() {
	return path.relative(getGeneratedViewPath(), getSrcViewPath());
}

console.log(getGeneratedViewPath());
console.log(getSrcViewPath());
console.log(getRelativePath());