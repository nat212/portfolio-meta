// https://prettier.io/docs/en/options.html
/** @type {import('prettier').RequiredOptions} */
module.exports = {
  trailingComma: "es5",
  jsxBracketSameLine: true,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: "always",
  tailwindConfig: "./tailwind.config.cjs",
  plugins: [require("prettier-plugin-tailwindcss")],
};
