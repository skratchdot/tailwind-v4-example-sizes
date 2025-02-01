import * as prettier from 'prettier';

import { readFile, writeFile } from 'node:fs/promises';

import { exec as execSync } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve } from 'node:path';

const exec = promisify(execSync);
const ROOT_PATH = resolve(__dirname, '..');
const README_PATH = resolve(ROOT_PATH, 'README.md');

const main = async () => {
  console.log('building...');
  const { stdout } = await exec(
    'pnpm run clean; pnpm recursive run --sort --workspace-concurrency 1 build',
    { cwd: ROOT_PATH }
  );
  const oldReadme = (await readFile(README_PATH, 'utf-8')).toString();
  const firstSection = oldReadme.split('## Build Output')[0];

  // build table
  const table = [
    '| css file | size | gzip size | build time |',
    '| :------- | ---: | --------: | ---------: |',
  ];
  let projectName = '';
  let cssFile = '';
  let size = '';
  let gzipSize = '';
  let buildTime = '';
  for (const line of stdout.split('\n')) {
    if (line.includes('@0.0.0 build')) {
      projectName = line.slice(2).split('@')[0];
    } else if (line.startsWith('dist/assets/') && line.includes('.css')) {
      const parts = line.split(' ').filter(Boolean);
      cssFile = parts[0];
      size = `${parts[1]} ${parts[2]}`;
      gzipSize = `${parts[5]} ${parts[6]}`;
    } else if (line.includes(' built in ')) {
      buildTime = line.split(' ').at(-1);
      table.push(
        `| [${projectName}](https://raw.githubusercontent.com/skratchdot/tailwind-v4-example-sizes/refs/heads/main/packages/${projectName}/${cssFile}) | ${size} | ${gzipSize} | ${buildTime} |`
      );
    }
  }

  const newReadme = [
    firstSection,
    '## Build Output',
    '',
    '```shell',
    '➜ pnpm run build',
    '',
    stdout.trim(),
    '```',
    '',
    '## CSS Output',
    '',
    table.join('\n'),
    '',
  ].join('\n');
  const prettyReadme = await prettier.format(newReadme, { parser: 'markdown' });

  console.log(stdout);
  await writeFile(README_PATH, prettyReadme, 'utf-8');
};

main().catch(console.error);
