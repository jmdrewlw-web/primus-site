import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const repo = process.cwd();
const readiness = fs.readFileSync(path.join(repo, 'src/lib/contact-delivery.ts'), 'utf8');
const action = fs.readFileSync(path.join(repo, 'src/app/contact/actions.ts'), 'utf8');
const form = fs.readFileSync(path.join(repo, 'src/components/ContactForm.tsx'), 'utf8');
const page = fs.readFileSync(path.join(repo, 'src/app/contact/page.tsx'), 'utf8');
const middleware = fs.readFileSync(path.join(repo, 'src/middleware.ts'), 'utf8');

test('contact delivery fails closed outside an explicitly configured production environment', () => {
  assert.match(readiness, /process\.env\.VERCEL_ENV !== 'production'/);
  assert.match(readiness, /process\.env\.CONTACT_FORM_DELIVERY_ENABLED !== 'true'/);
  assert.match(readiness, /!process\.env\.RESEND_API_KEY/);
  assert.match(readiness, /return 'preview'/);
  assert.match(readiness, /return 'not-configured'/);
  assert.match(readiness, /return 'ready'/);

  assert.ok(action.indexOf("deliveryState === 'preview'") < action.indexOf("await import('resend')"));
  assert.ok(action.indexOf("deliveryState === 'not-configured'") < action.indexOf("await import('resend')"));
  assert.match(action, /if \(error \|\| !data\?\.id\)/);
  assert.match(action, /reason: 'delivery'/);
  assert.match(action, /andy\.hedding@primus-companies\.com/);
  assert.match(action, /connect@primus-companies\.com/);
  assert.match(action, /to: CONTACT_FORM_RECIPIENTS/);
});

test('unconfigured delivery falls back to direct email to both Primus inboxes', () => {
  assert.match(form, /deliveryState !== 'ready'/);
  assert.match(form, /mailto:connect@primus-companies\.com\?cc=andy\.hedding@primus-companies\.com/);
  assert.match(form, /Email Primus/);
  assert.match(page, /<ContactForm deliveryState=\{getContactDeliveryState\(\)\}/);
  assert.match(`${action}\n${page}`, /connect@primus-companies\.com/);
  assert.match(`${action}\n${page}`, /\(319\) 393-4831/);
  assert.doesNotMatch(`${form}\n${page}`, /one business day/i);
});

test('www permanently redirects to the canonical apex domain', () => {
  assert.match(middleware, /request\.nextUrl\.hostname === 'www\.primus-companies\.com'/);
  assert.match(middleware, /canonicalUrl\.hostname = 'primus-companies\.com'/);
  assert.match(middleware, /NextResponse\.redirect\(canonicalUrl, 308\)/);
});
