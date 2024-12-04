module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', () => 'tsc --noEmit --pretty'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
