import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const repo = process.cwd();
const manifestPath = path.join(repo, 'src/data/work-wall.ts');
const manifest = fs.readFileSync(manifestPath, 'utf8');
const imageDir = path.join(repo, 'public/images/work-wall');

test('work wall contains 200 anonymous, optimized images', () => {
  const sources = [...manifest.matchAll(/"src":"([^"]+)"/g)].map((match) => match[1]);
  const widths = [...manifest.matchAll(/"width":(\d+)/g)].map((match) => Number(match[1]));
  const heights = [...manifest.matchAll(/"height":(\d+)/g)].map((match) => Number(match[1]));
  const publicFiles = fs.readdirSync(imageDir).filter((file) => file.endsWith('.webp'));

  assert.equal(sources.length, 200);
  assert.equal(new Set(sources).size, 200);
  assert.equal(publicFiles.length, 200);
  assert.ok(widths.every((width) => width >= 700 && width <= 1800));
  assert.ok(heights.every((height) => height >= 500 && height <= 1800));

  for (const source of sources) {
    assert.match(source, /^\/images\/work-wall\/work-\d{3}\.webp$/);
    assert.ok(fs.existsSync(path.join(repo, 'public', source)));
  }

  assert.doesNotMatch(
    manifest,
    /Credit Union|Crystal Group|Elplast|Methwick|Raining Rose|Veritas|Lake Dental|Ducharme/i
  );
});

test('public project experience remains label-free and correctly positioned', () => {
  const projectPage = fs.readFileSync(path.join(repo, 'src/app/projects/page.tsx'), 'utf8');
  const wall = fs.readFileSync(path.join(repo, 'src/components/WorkWall.tsx'), 'utf8');
  const publicPositioning = [
    'src/app/about/page.tsx',
    'src/app/contact/page.tsx',
    'src/app/layout.tsx',
    'src/components/Footer.tsx',
    'src/data/services.ts',
    'src/lib/schema.tsx',
    'public/llms.txt',
  ].map((file) => fs.readFileSync(path.join(repo, file), 'utf8')).join('\n');

  assert.match(projectPage, /<WorkWall images=\{workWallImages\}/);
  assert.doesNotMatch(wall, /<figcaption|project\.name|\{image\.(client|category)\}/i);
  assert.match(wall, /IntersectionObserver/);
  assert.doesNotMatch(publicPositioning, /in-house architecture|401 8th Avenue|five offices|headquarters/i);
});
