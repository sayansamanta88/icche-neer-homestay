# Icchē Neer Homestay — Cloudflare Pages

A responsive one-page homestay landing page with:
- Full-screen hero image slider using Unsplash-hosted images
- About + map side-by-side section
- Rooms/stay cards
- Amenities section
- Auto-rotating guest testimonial slider
- Booking/contact form
- Cloudflare Turnstile anti-bot verification
- Cloudflare Pages Function that validates Turnstile and sends enquiries through Resend

## 1. Customize the website

Edit `index.html` and replace:
- `Icchē Neer Homestay` with your homestay name
- phone number
- email address
- town/address
- sample testimonials
- sample rating/statistics
- map iframe URL with your real location
- room names/descriptions/pricing if needed
- `YOUR_TURNSTILE_SITE_KEY` with your Turnstile site key

The hero/room images are loaded from Unsplash. You can later replace the image URLs with your own photos.

## 2. Create Cloudflare Turnstile

In Cloudflare Dashboard:
1. Open Turnstile.
2. Create a widget for your website/domain.
3. Copy the Site Key and Secret Key.
4. Put the Site Key in `index.html` where `YOUR_TURNSTILE_SITE_KEY` appears.
5. Keep the Secret Key private — do NOT put it in HTML/JavaScript.

Turnstile must be validated server-side; this project does that in `functions/api/booking.js`.

## 3. Create Resend email sending

Create a Resend account and API key.
For production, verify a domain you own and use an address such as:
`bookings@yourdomain.com`

You will need these Cloudflare environment variables/secrets:
- `TURNSTILE_SECRET`
- `RESEND_API_KEY`
- `BOOKING_TO_EMAIL`
- `BOOKING_FROM_EMAIL`

Example:
- BOOKING_TO_EMAIL = your personal/business email where enquiries should arrive
- BOOKING_FROM_EMAIL = bookings@yourdomain.com (after verifying your domain in Resend)

## 4. Deploy to Cloudflare Pages with GitHub

1. Create a GitHub repository, e.g. `homestay-website`.
2. Upload all files/folders from this project.
3. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Import an existing Git repository.
4. Select the GitHub repository.
5. Production branch: `main`
6. Build command: `exit 0`
7. Build output directory: `.`
8. Deploy.

Cloudflare Pages will provide a `*.pages.dev` URL.

## 5. Add environment variables

In your Cloudflare Pages project:
Settings → Environment variables / Variables and Secrets.

Add:
`TURNSTILE_SECRET`
`RESEND_API_KEY`
`BOOKING_TO_EMAIL`
`BOOKING_FROM_EMAIL`

Use encrypted/secret values for `TURNSTILE_SECRET` and `RESEND_API_KEY`.

Redeploy after adding/changing variables.

## 6. Connect your own domain

In Cloudflare:
Workers & Pages → your project → Custom domains → Set up a custom domain.

If your domain is already on Cloudflare, the DNS setup is straightforward.

## 7. Test

Open the deployed site, submit a booking enquiry, complete Turnstile and check the destination email.

If the form says it cannot send:
- confirm the four Cloudflare environment variables
- confirm your Resend sending domain/from address is verified
- check Cloudflare Pages Functions logs
- check Resend logs

## Optional later upgrades

- WhatsApp booking button
- Real room availability/calendar
- Razorpay advance payment
- Google Analytics / Cloudflare Web Analytics
- Gallery lightbox
- FAQ section
- Google Reviews integration
- multilingual Bengali/Hindi/English version


## Icchē Neer details already customized

- Name: Icchē Neer Homestay
- Location: Icchēgaon, West Bengal
- Rooms: 4
- Highlight: Kanchenjunga view

Phone and booking email were not supplied yet, so the page currently shows placeholders:
- `YOUR_PHONE / WhatsApp`
- `YOUR_EMAIL@example.com`

Replace those before publishing.
