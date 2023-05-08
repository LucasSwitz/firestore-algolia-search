/*
 * Copyright 2021 Algolia
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const config = {
  location: process.env.LOCATION,
  algoliaAppId: process.env.ALGOLIA_APP_ID,
  algoliaAPIKey: process.env.ALGOLIA_API_KEY,
  algoliaIndexName: process.env.ALGOLIA_INDEX_NAME,
  collectionPath: process.env.COLLECTION_PATH,
  fields: process.env.FIELDS,
  forceDataSync: process.env.FORCE_DATA_SYNC,
  transformFunction: process.env.TRANSFORM_FUNCTION,
  projectId: process.env.PROJECT_ID,
  doFullIndexing: process.env.DO_FULL_INDEXING,
  fullIndexingReplaceAll: process.env.DO_REPLACE_ALL_FULL_INDEXING,
};

export type Config = typeof config;
export default config;
