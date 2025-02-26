import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aghrera.helloapp',
  appName: 'Hello App',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.242:3000',
    cleartext: true
  }
};

export default config;
