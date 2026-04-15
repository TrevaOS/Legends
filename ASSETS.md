# Legends Asset Guide

Use these folders as the single source for media and design files:

- Logos: `/workspaces/Legends/public/assets/logos`
- Ambiance images: Google Drive folder `https://drive.google.com/drive/folders/1TU4w7MYJHbtAONCrLgdmdMwVCuqke4yA?usp=drive_link`
- Food images: Google Drive folder `https://drive.google.com/drive/folders/1t4WmQlweWFqFTYVJ3GdO5bIjdD9LktFU?usp=drive_link`
- Combined media library: Google Drive folder `https://drive.google.com/drive/folders/1hnkemmAY4cAM9aTfC9MSArbRAEeN79Y6?usp=drive_link`
- Videos: `/workspaces/Legends/public/assets/videos`
- Menu reference PDFs: `/workspaces/Legends/public/assets/documents/menu`
- Beer reference PDFs: `/workspaces/Legends/public/assets/documents/beer`

Current reference files already moved:

- `/workspaces/Legends/public/assets/documents/menu/LEGENDS FINAL FOOD MENU 3.pdf`
- `/workspaces/Legends/public/assets/documents/menu/menu 9.pdf`
- `/workspaces/Legends/public/assets/documents/beer/Beer lineup .pdf`

Important:

- Oversized local JPGs in `/workspaces/Legends/public/assets/images/ambience` and `/workspaces/Legends/public/assets/images/menu` were removed from the deploy bundle because Cloudflare Workers rejects assets above 25 MiB.
- If the site should render images directly from Google Drive, use direct file URLs for each image rather than folder links.
- The Windows path `C:\Users\Dhanush F G\Downloads\09 04 26 - Edited-20260415T091704Z-3-001\09 04 26 - Edited` is not directly accessible from this Linux workspace.
- Copy those files into the folders above so the site can use them.
- Update menu text in `/workspaces/Legends/src/lib/menu-content.ts`.
