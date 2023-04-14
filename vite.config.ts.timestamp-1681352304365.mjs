// vite.config.ts
import { defineConfig } from "file:///workspaces/client/node_modules/vite/dist/node/index.js";
import react from "file:///workspaces/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///workspaces/client/node_modules/vite-plugin-svgr/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      // Set it to `true` to export React component as default.
      // Notice that it will overrides the default behavior of Vite.
      exportAsDefault: false,
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        // ...
      },
      // esbuild options, to transform jsx to js
      esbuildOptions: {
        // ...
      },
      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
      include: "**/*.svg",
      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: ""
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vd29ya3NwYWNlcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z3Ioe1xuICAgICAgLy8gU2V0IGl0IHRvIGB0cnVlYCB0byBleHBvcnQgUmVhY3QgY29tcG9uZW50IGFzIGRlZmF1bHQuXG4gICAgICAvLyBOb3RpY2UgdGhhdCBpdCB3aWxsIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBWaXRlLlxuICAgICAgZXhwb3J0QXNEZWZhdWx0OiBmYWxzZSxcblxuICAgICAgLy8gc3ZnciBvcHRpb25zOiBodHRwczovL3JlYWN0LXN2Z3IuY29tL2RvY3Mvb3B0aW9ucy9cbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIC8vIC4uLlxuICAgICAgfSxcblxuICAgICAgLy8gZXNidWlsZCBvcHRpb25zLCB0byB0cmFuc2Zvcm0ganN4IHRvIGpzXG4gICAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgICAvLyAuLi5cbiAgICAgIH0sXG5cbiAgICAgIC8vICBBIG1pbmltYXRjaCBwYXR0ZXJuLCBvciBhcnJheSBvZiBwYXR0ZXJucywgd2hpY2ggc3BlY2lmaWVzIHRoZSBmaWxlcyBpbiB0aGUgYnVpbGQgdGhlIHBsdWdpbiBzaG91bGQgaW5jbHVkZS4gQnkgZGVmYXVsdCBhbGwgc3ZnIGZpbGVzIHdpbGwgYmUgaW5jbHVkZWQuXG4gICAgICBpbmNsdWRlOiAnKiovKi5zdmcnLFxuXG4gICAgICAvLyAgQSBtaW5pbWF0Y2ggcGF0dGVybiwgb3IgYXJyYXkgb2YgcGF0dGVybnMsIHdoaWNoIHNwZWNpZmllcyB0aGUgZmlsZXMgaW4gdGhlIGJ1aWxkIHRoZSBwbHVnaW4gc2hvdWxkIGlnbm9yZS4gQnkgZGVmYXVsdCBubyBmaWxlcyBhcmUgaWdub3JlZC5cbiAgICAgIGV4Y2x1ZGU6ICcnLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdPLFNBQVMsb0JBQW9CO0FBQ3JRLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFHakIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBO0FBQUE7QUFBQSxNQUdILGlCQUFpQjtBQUFBO0FBQUEsTUFHakIsYUFBYTtBQUFBO0FBQUEsTUFFYjtBQUFBO0FBQUEsTUFHQSxnQkFBZ0I7QUFBQTtBQUFBLE1BRWhCO0FBQUE7QUFBQSxNQUdBLFNBQVM7QUFBQTtBQUFBLE1BR1QsU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
