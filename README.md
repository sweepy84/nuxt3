# Nuxt 3 Minimal Starter - Replication of Bug

Steps performed
1. npx nuxi init nuxt3
2. yarn install
3. yarn add aws-amplify
4. Added 'amplify.ts' to /plugins directory
5. Added transpiling config to 'nuxt.config.ts'
6. yarn dev

### Error
```
exports is not defined in ES module scope
  at $id_8b3bdae3 (file://./.nuxt/dist/server/server.mjs:3539:23)  
  at __instantiateModule__ (file://./.nuxt/dist/server/server.mjs:31429:9)  
  at __ssrLoadModule__ (file://./.nuxt/dist/server/server.mjs:31376:25)  
  at ssrImport (file://./.nuxt/dist/server/server.mjs:31401:13)  
  at $id_d9f142a1 (file://./.nuxt/dist/server/server.mjs:3206:37)  
  at async __instantiateModule__ (file://./.nuxt/dist/server/server.mjs:31429:3)