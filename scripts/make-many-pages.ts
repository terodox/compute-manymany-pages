import { constants } from "node:fs";
import { copyFile } from "node:fs/promises";
import { join } from "node:path";

async function main() {
  const sourceIsrTemplateFilePath = join(__dirname, "isr-template.tsx");
  const sourcePageTemplateFilePath = join(__dirname, "page-template.tsx");
  for (let i = 0; i < 1000; i++) {
    const isrDestination = join(__dirname, "../src/pages/isr", `isr${i}.tsx`);
    const pageDestination = join(__dirname, "../src/pages/fun", `page${i}.tsx`);
    await copyFile(
      sourceIsrTemplateFilePath,
      isrDestination,
      constants.COPYFILE_FICLONE
    );
    await copyFile(
      sourcePageTemplateFilePath,
      pageDestination,
      constants.COPYFILE_FICLONE
    );
  }
}

main().then(console.log).catch(console.error);
