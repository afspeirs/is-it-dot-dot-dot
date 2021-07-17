module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,png,html,webmanifest}',
	],
	swDest: 'dist/service-worker.js',
	skipWaiting: true,
	clientsClaim: true,
};
