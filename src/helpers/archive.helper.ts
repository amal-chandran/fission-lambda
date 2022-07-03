import archiver from 'archiver';
import fs from 'fs-extra';

export const zipFolderContents = async (
  folderPath: string,
  outputPath: string
) => {
  const output = fs.createWriteStream(outputPath);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level.
  });

  archive.pipe(output);

  archive.glob('**', { cwd: folderPath });

  await archive.finalize();

  return new Promise<void>((resolve, reject) => {
    output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archive created successfully');

      resolve();
    });
  });
};
