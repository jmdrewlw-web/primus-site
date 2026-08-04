import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const repo = process.cwd();
const manifestPath = path.join(repo, 'src/data/work-wall.ts');
const manifest = fs.readFileSync(manifestPath, 'utf8');
const imageDir = path.join(repo, 'public/images/work-wall');
const selectionReport = JSON.parse(
  fs.readFileSync(path.join(repo, 'docs/work-wall-selection.json'), 'utf8')
);

test('work wall contains 190 anonymous, optimized images', () => {
  const sources = [...manifest.matchAll(/"src":"([^"]+)"/g)].map((match) => match[1]);
  const widths = [...manifest.matchAll(/"width":(\d+)/g)].map((match) => Number(match[1]));
  const heights = [...manifest.matchAll(/"height":(\d+)/g)].map((match) => Number(match[1]));
  const publicFiles = fs.readdirSync(imageDir).filter((file) => file.endsWith('.webp'));

  assert.equal(sources.length, 190);
  assert.equal(new Set(sources).size, 190);
  assert.equal(publicFiles.length, 190);
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

test('work wall curation enforces variation and privacy holds', () => {
  assert.equal(selectionReport.length, 190);
  assert.equal(new Set(selectionReport.map((item) => item.source)).size, 190);
  assert.equal(selectionReport.filter((item) => item.group === 'crystal' && item.kind === 'exterior').length, 2);
  assert.equal(selectionReport.filter((item) => item.group === 'raining' && item.kind === 'exterior').length, 2);
  assert.equal(selectionReport.filter((item) => item.source.includes('Veridian - Waukee, IA')).length, 2);
  assert.equal(selectionReport.filter((item) => item.group === 'elplast' && item.kind === 'exterior').length, 3);

  const heldSource = /Crystal Int-16|Waterloo-(?:7|8|9|13|14)|20230223_(?:074653|074714|075238|075433|075438)|interior 30/i;
  assert.ok(selectionReport.every((item) => !heldSource.test(item.source)));

  for (const item of selectionReport) {
    assert.equal(item.output.src, `/images/work-wall/work-${String(item.position).padStart(3, '0')}.webp`);
  }
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
