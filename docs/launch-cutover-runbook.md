# Primus Website Controlled Cutover and Rollback

Status: owner direction approved; production remains gated. Do not execute the
production steps until contact delivery, domain attachment, DNS access, and the
rollback capture are configured and verified.

## Release candidate under verification

- Branch: `codex/dre-671-work-wall-variation-2026-08-04`
- Vercel project: `jasonds-projects-3ccfaebd/primus-site`
- Project ID: `prj_w5nOZ0zrs61wU9GjrVTFoLEQ7t1e`
- The prior preview is superseded. The refreshed preview URL, deployment ID, and
  exact commit are recorded in DRE-671 after deployment.
- Local verification: eight focused release tests passed; lint passed;
  production build passed; 68 pages generated; 52 active article pages and 13
  retired claim sources were verified; desktop and mobile review passed.

## Current public delivery and rollback snapshot

Captured July 29, 2026. These values are the rollback target unless a same-day
pre-cutover check shows that the current host changed.

| Record / service | Current value |
| --- | --- |
| Apex A | `141.193.213.10` and `141.193.213.11` |
| `www` CNAME | `primusconstruc.wpengine.com` |
| Nameservers | `ns67.domaincontrol.com`, `ns68.domaincontrol.com` |
| MX | priority `0`, `primuscompanies-com01e.mail.protection.outlook.com` |
| Apex delivery | WordPress, WP Engine response path, Cloudflare edge |
| Apex health | `200` |
| `www` behavior | Redirects to apex only after TLS; its current certificate expired October 2, 2024 |

Do not change the nameservers or Microsoft 365 MX record. Preserve the existing
WordPress/WP Engine site and account as the rollback origin.

## Owner direction and remaining release gates

Jason approved the refreshed direction for launch on August 4, subject to the
release blockers being resolved and verified. The approved correction set is:

- use “Commercial construction, built on experience since 1973.” on About;
- remove the 500-project, 24-year, $770M/$777M, five-office, and related
  personal-record metrics rather than qualifying or replacing them;
- preserve the Cedar Rapids 1973 company history;
- retire old in-house-architecture claim articles rather than rewriting them;
- reduce repeated same-project exterior runs in the anonymous work wall; and
- do not claim contact delivery works until it has been verified.

The remaining gates are operational, not copy approval:

- verify a Primus-controlled Resend sender domain and restricted sending key;
- add the production-only Vercel delivery settings;
- perform the separately authorized internal acceptance send and confirm
  receipt/reply-to behavior;
- attach and validate the apex and `www` domains; and
- capture the current GoDaddy zone and confirm WordPress/WP Engine rollback
  access immediately before the web-record change.

## Assembly after approval, before DNS

1. Freeze the approved source commit and create a Vercel production deployment
   from that exact commit. Do not attach the public domains yet.
2. Add `primus-companies.com` to the connected Resend account, use the exact DNS
   records Resend provides, and verify sending. As of the readiness audit, no
   Primus domain exists in that account.
3. Create a restricted Resend API key and add these Vercel **production-only**
   settings:
   - `RESEND_API_KEY`
   - `CONTACT_FORM_DELIVERY_ENABLED=true`
4. Confirm the approved sender is
   `Primus Website <website@primus-companies.com>` and the only recipient is
   `andy.hedding@primus-companies.com`.
5. Send one clearly labeled launch test through the production deployment to
   Andy. Confirm receipt and reply-to behavior before public DNS changes.
6. Add both `primus-companies.com` and `www.primus-companies.com` to the Vercel
   project. Record the exact web DNS records Vercel requests; do not substitute
   remembered or generic Vercel values.
7. Re-capture the current GoDaddy zone, TTLs, public WordPress response, and
   WordPress/WP Engine rollback access immediately before the change.

## Controlled cutover

1. Change only the apex and `www` web records requested by Vercel.
2. Leave GoDaddy nameservers, Microsoft 365 MX, and unrelated TXT/CNAME records
   unchanged, except the specifically reviewed Resend sender-verification
   records.
3. Wait for Vercel to show valid configuration and active TLS for both hostnames.
4. Verify:
   - apex and `www` load without certificate warnings;
   - one hostname redirects canonically to the other;
   - home, about, services, projects, blog, contact, sitemap, and share image
     return successfully;
   - production pages do not carry the preview `noindex` header;
   - mobile navigation, project-detail scrolling, and curated project images
     behave as in the approved preview;
   - one post-cutover contact test reaches Andy exactly once.
5. Observe the public site and form logs for at least 30 minutes before declaring
   the cutover stable.

## Rollback triggers

Rollback immediately for a TLS/certificate error, DNS misrouting, repeated
`5xx` responses, broken core navigation, missing project imagery, unexpected
indexing directives, or contact delivery failure/duplication.

## Rollback procedure

1. Set `CONTACT_FORM_DELIVERY_ENABLED=false` in Vercel production.
2. Restore the apex A records to `141.193.213.10` and `141.193.213.11`.
3. Restore `www` to CNAME `primusconstruc.wpengine.com`.
4. Leave the Microsoft 365 MX and unrelated mail records unchanged.
5. Verify the WordPress apex returns `200`. Note that the captured pre-cutover
   `www` certificate is already expired; restoring it reproduces that existing
   defect and is not a new regression.
6. Keep the failed Vercel deployment and logs for diagnosis; do not overwrite or
   delete the WordPress site.
7. Record the rollback time, DNS values, symptoms, and next action in the Primus
   Linear launch issue.
