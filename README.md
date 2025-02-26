# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


## Build application

```bash
npm run build
```


## Add android app build

```bash
npx cap add android
```


## Sync web and android build

```bash
npx cap sync
```


## Start android app in emulator

```bash
npx cap run android
```


## Copy web app build to android

```bash
npx cap copy
```


## Run web app

```bash
npm run dev
```

## Web app

http://localhost:3000/


## Local server config in capacitor.config.ts

server: { url: 'http://192.168.1.242:3000', cleartext: true }

## Local Server config in vite.config.ts

server: { host: '0.0.0.0', port: 3000 },

## Add a shadcn component

npx shadcn-svelte@latest add button