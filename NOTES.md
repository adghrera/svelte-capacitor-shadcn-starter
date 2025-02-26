npm run build

npx cap add android

npx cap sync

npx cap run android

npx cap copy

npm run dev

http://localhost:3000/


Local server config in capacitor.config.ts

  server: {
    url: 'http://192.168.1.242:3000',
    cleartext: true
  }
  
Local Server config in vite.config.ts

server: {
		host: '0.0.0.0',
		port: 3000
	},



Add component

npx shadcn-svelte@latest add button


