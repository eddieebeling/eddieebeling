import { queryCollection } from "@nuxt/content/server";

export default defineEventHandler((event) => queryCollection(event, "content").path("/portfolio").first());
