/**
 * Vercel discovers serverless routes from the root `api/` directory only.
 * Implementation lives in `server/api/contact.mjs` (keeps your server code together).
 */
export { default } from "../server/api/contact.mjs";
