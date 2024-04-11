import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		force: true,
	},
	plugins: [
		react(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
		{
			enforce: "pre",
		},
	],
});
