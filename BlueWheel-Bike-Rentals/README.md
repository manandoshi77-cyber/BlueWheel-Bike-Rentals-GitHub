# BlueWheel Bike Rentals — static website

This folder contains a single-file website. `index.html` includes all styling, illustrations, and JavaScript. No npm, Python, API key, or build command is needed.

## Edit the website

Open `index.html` in VS Code and save your changes. Use **Ctrl+F** to find these places:

| What to edit | Where to find it |
| --- | --- |
| Company name and text logo | Search for `BlueWheel` and the `brand` elements. Replace occurrences in the page title, navigation, footer, and copyright too. |
| Blue and red colours | Edit `--blue` and `--red` at the start of the `<style>` block. |
| Bike names, descriptions, features and sample INR prices | Edit the `const bikes = [...]` list near the start of the `<script>` block. `hour` and `day` are numeric prices. |
| Email address | Replace **every** `hello@example.com`, including the `mailto:` address in the contact form script. |
| Phone and WhatsApp | Replace `+91 00000 00000`, `+910000000000` in `tel:` links, and `910000000000` in `wa.me` links. WhatsApp links use country code and digits only. |
| Address, hours and pickup points | Find `Sample pickup point`, `Sample hours`, and `Sample: Central pickup point`. |
| Reviews, rental rules and legal text | Replace the sample reviews, safety guidelines, FAQ answers, and privacy/terms modal contents with verified business information. |

**Important:** Prices, availability, reviews, contact details, address, hours and rental policy are examples. Replace all placeholders before using the site for a real business. The booking form is a demonstration: it calculates a price and shows an on-screen confirmation, but does not email anyone, process payment, or store a booking. The contact form opens the visitor's email application to prepare a draft.

## Upload to GitHub

1. Create or open your GitHub repository.
2. Place **`index.html` at the repository root** (next to this README, not inside an extra folder). If your repository already has an older `index.html`, replace it.
3. Commit the changed files with a message such as `Update bike rental website`.
4. Push to GitHub. In VS Code, this is typically **Source Control → Commit → Sync Changes**, or use `git add index.html README.md`, `git commit -m "Update bike rental website"`, then `git push` in your repository terminal.

Saving a file in VS Code alone does not deploy it: Vercel sees the new version after the commit is pushed to the connected GitHub branch.

## Deploy with Vercel

1. In Vercel, choose **Add New → Project** and import the GitHub repository.
2. Keep the repository root as the project root; leave the build command blank and use the static/Other framework option if prompted.
3. Deploy. A root-level `index.html` works as a static site without a package file or framework.
4. Future pushes to the connected branch trigger new deployments. If an older site had a nested `BlueWheel-Bike-Rentals` folder set as its Root Directory, change that setting back to the repository root when you move `index.html` to the root.

You can preview locally by opening `index.html` in a browser. No server is needed.
