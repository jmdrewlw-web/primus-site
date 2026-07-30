# Primus Website Controlled Cutover and Rollback

Status: staged for approval. Do not execute these production steps until Jason
explicitly approves the reviewed preview, the public copy, contact delivery, and
the controlled cutover.

## Reviewed release candidate

- Preview: `https://primus-site-n9e4kzmqj-jasonds-projects-3ccfaebd.vercel.app`
- Vercel deployment: `dpl_77oBA1r5yH2yw2Jok9TRUfWPJYj7`
- Vercel project: `jasonds-projects-3ccfaebd/primus-site`
- Project ID: `prj_w5nOZ0zrs61wU9GjrVTFoLEQ7t1e`
- Preview protection: `X-Robots-Tag: noindex, nofollow, noarchive`
- Verification: lint passed; production build passed; 81 routes generated;
  representative public routes returned `200`; desktop and mobile review passed.

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

## Approval statement

Jason can authorize the full controlled launch with one response:

> Approve the Primus controlled cutover using the reviewed preview. Approve the
> displayed business claims and testimonials as public copy, authorize Resend
> sender-domain setup and one test lead to Andy Hedding, and authorize changing
> only the GoDaddy web records required by Vercel. Preserve Microsoft 365 mail
> records and the WordPress/WP Engine rollback target.

If any displayed claim is not approved, Jason should name only the correction.
The claims needing explicit business approval are:

- founded in 2002 / 24 years;
- 500+ projects, $770M delivered, five offices, and work across 15 states;
- fixed pricing, price-holds, and "no surprises" language;
- design-build / architecture and construction "under one roof";
- Pathfinder budget-range and timeline promises;
- first response within one business day;
- the displayed customer quotes, production, patient, revenue, schedule, cost,
  and patient-flow results.

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
