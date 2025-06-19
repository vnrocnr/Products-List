# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.7](https://github.com/vnrocnr/Products-List/compare/v0.0.6...v0.0.7) (2025-06-19)


### Features

* **auth:** add login and signup pages ([a989c89](https://github.com/vnrocnr/Products-List/commit/a989c8951b6f79f00d4ca8517c33638854f148ee))
* implement sweetalert for successful addition or updating of product ([460d4fe](https://github.com/vnrocnr/Products-List/commit/460d4fe0226ab5907f9505c17a56adea0c4f83ff))
* **router:** add NotFound page for undefined routes ([dff3c64](https://github.com/vnrocnr/Products-List/commit/dff3c644875424dc17da88b118d3326541c20533))
* **sidebar:** add list items for navigation including logout ([260f412](https://github.com/vnrocnr/Products-List/commit/260f412871007270b80221647b3bb5417f25efc5))


### Bug Fixes

* preserve added products by correctly incrementing ID in addProduct ([a84f680](https://github.com/vnrocnr/Products-List/commit/a84f68047c44cfd7a4be74d0d5841a98b849e163))
* resolve issue where additional category is added when adding a new product ([86c6465](https://github.com/vnrocnr/Products-List/commit/86c6465d9afad62eae0b975624142c924f13e8ee))
* resolve issue where rate cannot be read once another product is added ([b4d4198](https://github.com/vnrocnr/Products-List/commit/b4d4198590a3472ec9df95a4377153635e4648ad))
* resolve issue where the data is not updating and total added product is not recorded ([b066f8e](https://github.com/vnrocnr/Products-List/commit/b066f8eff433e65149fb6f944d5ccc9829ea382f))
* resolve issue where the update's dialog has a solid background of black instead of a see through one ([12aa941](https://github.com/vnrocnr/Products-List/commit/12aa94148d86956268e4b824c6781835a3e17d0b))
* resolve layout issue for auth pages by setting the height and width of the app ([cc9de2b](https://github.com/vnrocnr/Products-List/commit/cc9de2be45c43ac95e2f6c40358a9594d7c3a225))
* **routes:** ensure proper layout rendering and default child route ([141205d](https://github.com/vnrocnr/Products-List/commit/141205dcae8f470dbfe9fcf4b208cba390508b87))

### [0.0.6](https://github.com/vnrocnr/Products-List/compare/v0.0.5...v0.0.6) (2025-06-17)


### Features

* **charts:** implement a dashboard for product analytics ([2b19ea1](https://github.com/vnrocnr/Products-List/commit/2b19ea13f965fc21d141ad89499fd55a2b027c15))
* implement sweetalert for delete product confirmation ([67f4d20](https://github.com/vnrocnr/Products-List/commit/67f4d20c78f92e9b285624749d8facd7bd026a3e))
* **product:** push product ID to query when opening delete dialog ([d284966](https://github.com/vnrocnr/Products-List/commit/d28496641ad9d84fce7d0fee6132aca4728459bd))
* **store:** used LocalStorage instead to store and load product list ([08f9b64](https://github.com/vnrocnr/Products-List/commit/08f9b64e96db4b3a0797d1cb9cbd7613ae5a04e9))

### [0.0.5](https://github.com/vnrocnr/Products-List/compare/v0.0.2...v0.0.5) (2025-06-15)


### Features

* add landing page for the  grid view of products list ([92d534b](https://github.com/vnrocnr/Products-List/commit/92d534bed8f5ada99b233344412a0c2a2adc26fb))
* add search page structure, to be wired up later ([9e93974](https://github.com/vnrocnr/Products-List/commit/9e93974b2c72ec66c4d01ff8e590ee60868f6d3c))
* dynamically render navigation items using v-for with route links ([8f5c68e](https://github.com/vnrocnr/Products-List/commit/8f5c68e7cba36bc7bf8faf5d33fcb1c75391c1fa))
* implement close button for Update Form ([6830d81](https://github.com/vnrocnr/Products-List/commit/6830d81b5e0b0d6884fe683f75a1071af9a5aca8))
* implement close button in Add new product form ([54ad41d](https://github.com/vnrocnr/Products-List/commit/54ad41d75c061fb469e9b5fd54fb0eb2e8fa182e))
* implement Create product functionality ([a49a85a](https://github.com/vnrocnr/Products-List/commit/a49a85a7b0bc8030c5f2a9c7e04110b362b172c3))
* implement data fetching, dashboard layout, and integrate search and initial view functionality ([32e0133](https://github.com/vnrocnr/Products-List/commit/32e0133671dc7e0ff35437471aa5d993e8f97500))
* implement DELETE functionality by product ID ([b41e778](https://github.com/vnrocnr/Products-List/commit/b41e778d2deba8aaffa643d69608b4ec66d6e373))
* implement search functionality by product ID ([a102b2b](https://github.com/vnrocnr/Products-List/commit/a102b2bf9cced4ff5503963a94d907cc23add199))
* implement search functionality by product ID ([b414421](https://github.com/vnrocnr/Products-List/commit/b4144218688847f20dc6c1a15ab9665f8ae91156))
* implement Update functionality ([7464e16](https://github.com/vnrocnr/Products-List/commit/7464e169a2e9dd45646da1a8beb94f011b6cf3fc))
* implemented initial layout with header, sidebar, and main section ([b96a715](https://github.com/vnrocnr/Products-List/commit/b96a715f214f563b9eba398f99ec2a4b0e0c6b6d))
* set-up basic routing for the app ([a6f9852](https://github.com/vnrocnr/Products-List/commit/a6f98526686fa14825838472b41fe1649a3dfb16))
* **store:** enable persisted state for product store ([4ae9579](https://github.com/vnrocnr/Products-List/commit/4ae95797fab0e7e3a903e4c345df8e34ab8f67cb))


### Bug Fixes

* ensure correct product data is passed to update dialog ([ceb6b5e](https://github.com/vnrocnr/Products-List/commit/ceb6b5e11311f68c83f6c78f19a077216d819f27))
* handle selected product via query param to support update and delete form dialog behavior ([29642e4](https://github.com/vnrocnr/Products-List/commit/29642e4ff719ef9d07d38b9ddd20885baa453ee0))
* resolve data binding and submission issue in update form ([5482023](https://github.com/vnrocnr/Products-List/commit/5482023cc0a98227dc75bab74650163af438ee12))
* resolve issue where update form doesn't close when submit button is click ([6cadb6d](https://github.com/vnrocnr/Products-List/commit/6cadb6d6fec7e58e46db4b6e3738b1f119b11240))
* resolve layout conflict between <v-main> and Vue main by deleting initial margin in main css file ([77d41f1](https://github.com/vnrocnr/Products-List/commit/77d41f121e7e453afa118a0aea96c76906da1351))

### [0.0.4](https://github.com/vnrocnr/Products-List/compare/v0.0.2...v0.0.4) (2025-06-15)


### Features

* add landing page for the  grid view of products list ([3fdeb4f](https://github.com/vnrocnr/Products-List/commit/3fdeb4fe4eb0974a144b78df291a8443a0bedb22))
* add search page structure, to be wired up later ([9e93974](https://github.com/vnrocnr/Products-List/commit/9e93974b2c72ec66c4d01ff8e590ee60868f6d3c))
* dynamically render navigation items using v-for with route links ([15552b7](https://github.com/vnrocnr/Products-List/commit/15552b7423b3268f2c1d64c66664fab6dd505236))
* implement close button for Update Form ([16d312b](https://github.com/vnrocnr/Products-List/commit/16d312b4f6ecb1b63b31b38df6567d2d993a192e))
* implement close button in Add new product form ([c133109](https://github.com/vnrocnr/Products-List/commit/c133109165df624357ae4c15460da791400cf8e8))
* implement Create product functionality ([10710bb](https://github.com/vnrocnr/Products-List/commit/10710bb332b95c1d8d5f9856c573ec432c2c189a))
* implement data fetching, dashboard layout, and integrate search and initial view functionality ([32e0133](https://github.com/vnrocnr/Products-List/commit/32e0133671dc7e0ff35437471aa5d993e8f97500))
* implement DELETE functionality by product ID ([f0f8511](https://github.com/vnrocnr/Products-List/commit/f0f851174dc81314f068147cad93e6881f217d01))
* implement search functionality by product ID ([2582755](https://github.com/vnrocnr/Products-List/commit/2582755dbd45a64d245976932e17ccfa69c10e74))
* implement search functionality by product ID ([b833ad2](https://github.com/vnrocnr/Products-List/commit/b833ad27cc3b5a6797dc4f6fcd229add2a88e30b))
* implement Update functionality ([6f4c7c2](https://github.com/vnrocnr/Products-List/commit/6f4c7c24121df1070b19c563f4568f840c136cb2))
* implemented initial layout with header, sidebar, and main section ([b96a715](https://github.com/vnrocnr/Products-List/commit/b96a715f214f563b9eba398f99ec2a4b0e0c6b6d))
* set-up basic routing for the app ([a6f9852](https://github.com/vnrocnr/Products-List/commit/a6f98526686fa14825838472b41fe1649a3dfb16))
* **store:** enable persisted state for product store ([fbba4fd](https://github.com/vnrocnr/Products-List/commit/fbba4fd848496fbbe2f38c6a524f37697fdbb118))


### Bug Fixes

* ensure correct product data is passed to update dialog ([553e09f](https://github.com/vnrocnr/Products-List/commit/553e09f4b859a9a2cc644e6e21e61ad2c4fa7178))
* handle selected product via query param to support update and delete form dialog behavior ([80e6a36](https://github.com/vnrocnr/Products-List/commit/80e6a3623ca0987005aab6e3c43017ddd0385486))
* resolve data binding and submission issue in update form ([7a43378](https://github.com/vnrocnr/Products-List/commit/7a433784ef98e10e796ff7f5da45631e37029dcf))
* resolve issue where update form doesn't close when submit button is click ([b00ceb6](https://github.com/vnrocnr/Products-List/commit/b00ceb6f1e6991d671feb63e34b23a751ec98c6d))
* resolve layout conflict between <v-main> and Vue main by deleting initial margin in main css file ([77d41f1](https://github.com/vnrocnr/Products-List/commit/77d41f121e7e453afa118a0aea96c76906da1351))

### [0.0.3](https://github.com/vnrocnr/Products-List/compare/v0.0.2...v0.0.3) (2025-06-12)


### Features

* implement data fetching, dashboard layout, and integrate search and initial view functionality ([8c58c1b](https://github.com/vnrocnr/Products-List/commit/8c58c1b50d5de8add4b26ae4fd198f9d6341a513))
* implemented initial layout with header, sidebar, and main section ([a0160ae](https://github.com/vnrocnr/Products-List/commit/a0160ae67f8245864bd321ac0f1075527bd21d0f))
* set-up basic routing for the app ([a4a3c93](https://github.com/vnrocnr/Products-List/commit/a4a3c937b415453ce50bdf96678859e6e08332e5))


### Bug Fixes

* resolve layout conflict between `<v-main>` and Vue's main by deleting initial margin in main.css file ([d1eb5ad](https://github.com/vnrocnr/Products-List/commit/d1eb5ade263e9523e401cd804a24df512943ba37))

### [0.0.2](https://github.com/vnrocnr/Products-List/compare/v0.0.1...v0.0.2) (2025-06-12)
### Features
* remove initial styling and implement MainLayout in App.vue
* remove initial styling in css files

### 0.0.1 (2025-06-11)
* add standard release support!
