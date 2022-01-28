import fs from 'fs';

import hbjs from 'handbrake-js';

const INPUT_PATH = 'input/video.mp4';
const OUTPUT_PATH = 'output/compressed.mp4';

/**
 * @description Run Handbrake on file.
 * @see https://github.com/75lb/handbrake-js
 * @see https://handbrake.fr/docs/en/latest/cli/command-line-reference.html
 */
hbjs
  .spawn({
    input: INPUT_PATH,
    output: OUTPUT_PATH,
    encoder: 'x264',
    //quality: "10"
    vb: 2800,
    'no-two-pass': true
  })
  .on('error', (err: any) => {
    // invalid user input, no video found etc
  })
  .on('progress', (progress: any) => {
    console.log('Percent complete: %s, ETA: %s', progress.percentComplete, progress.eta);
  })
  .on('complete', () => {
    const stats = fs.statSync(INPUT_PATH);
    const fileSizeInBytesOriginal = stats.size;
    console.log('Size of original file:', fileSizeInBytesOriginal);

    const statsCompressed = fs.statSync(OUTPUT_PATH);
    const fileSizeInBytesCompressed = statsCompressed.size;
    console.log('Size of compressed file:', fileSizeInBytesCompressed);

    const percentage = ((fileSizeInBytesCompressed / fileSizeInBytesOriginal) * 100).toFixed(2);
    const result = `${percentage}%`;
    console.log(result);
  });
