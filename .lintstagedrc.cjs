module.exports = {
  '*': ['prettier --write --ignore-unknown'],
  '*.js': ['prettier --write --ignore-unknown', 'eslint'],
};
