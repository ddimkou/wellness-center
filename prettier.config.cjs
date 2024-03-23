// module.exports = {
//   plugins: [require("prettier-plugin-tailwindcss")],
// };

async function loadTailwindCSSPrettierPlugin() {
  const module = await import('prettier-plugin-tailwindcss');
  return module.default; // Assuming the plugin is exported as default, adjust if necessary
}

module.exports = loadTailwindCSSPrettierPlugin();