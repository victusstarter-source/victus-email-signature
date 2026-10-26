# Victus Global — GitHub Pages email signatures (500px)

This static website is ready to upload to the **`new`** branch. It preserves your 500px Victus Global design, teal band, extracted logo/social icons, and corrected round play icon. The outsourcing/development/back office/food technology service text has no icons.

## Files and folders

```text
/(root of branch new)
├── index.html                   Employee editor (open this URL)
├── signature-example.html       Browser preview of Nicole's sample signature
├── .nojekyll                    Disable GitHub Pages' Jekyll processing
├── css/
│   └── editor.css
├── js/
│   ├── config.js                Employee defaults and video/social links
│   └── editor.js                HTML table, preview, copy and download behavior
└── assets/
    ├── victus-logo.png
    ├── phone.png
    ├── email.png
    ├── website.png
    ├── linkedin.png
    ├── facebook.png
    └── play.png                 Circular, undistorted Watch Our Story play button
```

## Option A: Upload using the GitHub website

1. Open your repository and use the branch selector to switch to **`new`**. If it does not exist, create **`new`** from your current branch.
2. Use **Add file → Upload files** to upload all files, **preserving their folder paths**. Easiest: use Git on your computer (Option B) or drag folders if your browser supports it; confirm `assets`, `js` and `css` folders contain the correct files in the branch.
3. Under **Settings → Pages → Build and deployment** select **Deploy from a branch**, choose **`new`**, select **`/(root)`**, then **Save**.
4. Click **Visit site** on the Pages settings screen to find the real published link.
5. The published editor opens as `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` in a typical *project repository*. For a user/organization Pages repository or a custom domain, the URL can differ.

IMPORTANT: GitHub Pages has one selected published source for a repository. If the same repository currently publishes Pages from a different branch, switching to `new` will change that site's published contents. Creating the branch alone does *not* publish a second independent Pages website. To run separate old and new published versions simultaneously, use a separate repository, custom deployment, or host one version in a subfolder of the published branch.

## Option B: Upload using Git on your PC

If `new` does not already exist, from a clone of the repository:

```bash
git switch -c new
```

If it already exists:

```bash
git fetch origin
git switch new
```

Copy **the contents of this ZIP's folder** into the root of the branch, then run:

```bash
git add index.html signature-example.html .nojekyll css js assets
git commit -m "Deploy Victus Global 500px signature editor"
git push -u origin new
```

Then set the GitHub Pages publishing source as described in Option A (or use the current public hosting method if keeping another Pages branch).

## How to generate employee signatures

1. After publishing, visit your GitHub Pages editor (`index.html`).
2. Edit **name, title, phone, email**. Other company-wide text is editable under **Company text and image settings**.
3. Leave **Public image folder URL** blank. The editor automatically detects the live HTTPS image base URL. For example, if your editor is published at:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
   it generates image links like:
   `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/assets/victus-logo.png`
4. Choose **Copy formatted signature**, paste into Outlook signature settings, and send an external test email. Or choose **Download this employee’s HTML** to keep the final rendered HTML.

The editor's downloadable email HTML uses **fully qualified HTTPS image URLs** for compatibility. Relative paths such as `assets/play.png` will not work reliably in emails. Browsing `signature-example.html` is just a design preview; don't use its relative-path HTML as an Outlook source. When opened as `file://` locally, the editor blocks copy/download until a valid public HTTPS images base URL is entered, to avoid exporting broken images.

## What to edit in the source

- `js/config.js`: default employee info and links to Watch Our Story, Facebook and LinkedIn.
- `js/editor.js`: `TEMPLATE` is the complete, inline-styled 500px email layout (including the name, company tagline, services list, play button and disclaimer).
- `css/editor.css`: editor website appearance only; **not** the email signature's styling.
- `assets/`: preserve all seven original/corrected image filenames.

**Video:** https://victusglobal.co.uk/videos/  
**Facebook:** https://www.facebook.com/people/Victus-Global-Limited/61592616851613/#  
**LinkedIn:** https://uk.linkedin.com/company/victus-global

**Disclaimer (exact wording as requested):** This email and any attachments are confidential and may be legally Previleged. If you are not the intended recipient, please notify the sender immediately and delete this email from your system.

Note: “Previleged” is kept as supplied; the standard English spelling is “privileged”.

**Testing:** Even with public images, some email clients require external-image permission; classic Outlook can render rounded corners/gradients differently from a browser. Send test emails using Outlook on web and desktop if applicable.
