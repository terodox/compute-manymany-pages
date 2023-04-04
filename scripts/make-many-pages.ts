import { constants } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

async function main() {
  const isrOutputFolder = join(__dirname, "../src/pages/isr");
  const pageOutputFolder = join(__dirname, "../src/pages/fun");

  await mkdir(isrOutputFolder, { recursive: true });
  await mkdir(pageOutputFolder, { recursive: true });

  const sourceIsrTemplateFilePath = join(__dirname, "isr-template.tsx");
  const sourcePageTemplateFilePath = join(__dirname, "page-template.tsx");
  for (let i = 0; i < 800; i++) {
    const isrDestination = join(isrOutputFolder, `isr${i}.tsx`);
    const pageDestination = join(pageOutputFolder, `page${i}.tsx`);
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
