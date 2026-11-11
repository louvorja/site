import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('package.json não registra ganchos automáticos de instalação', () => {
  const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  const scripts = manifest.scripts ?? {};
  const hooks = ['preinstall', 'install', 'postinstall', 'prepublish', 'preprepare', 'prepare', 'postprepare'];
  const declared = hooks.filter(hook => Object.hasOwn(scripts, hook));

  assert.deepEqual(declared, [], 'Ganchos de instalação exigem revisão de segurança');
});
