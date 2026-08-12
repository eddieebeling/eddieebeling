import { access, cp, rm } from "node:fs/promises";

try {
  await access(".output/public");
  await rm("dist", { recursive: true, force: true });
  await cp(".output/public", "dist", { recursive: true });
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
  await access("dist/index.html");
}
