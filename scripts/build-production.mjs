import { spawnSync } from 'node:child_process';
const result = spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
  stdio: 'inherit', env: { ...process.env, SITE_INDEXABLE: 'true' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
const verify = spawnSync(process.execPath, ['scripts/verify-build.mjs', '--production'], { stdio: 'inherit' });
process.exit(verify.status ?? 1);
