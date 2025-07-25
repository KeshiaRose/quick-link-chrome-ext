# Quick Link Chrome Extension

A simple Chrome extension that gives you quick access to frequently used links. Just click on any link name and it will automatically copy the URL to your clipboard.

## What This Extension Does

- Shows a list of links in a popup
- Click any link name to copy its URL to your clipboard

## How to Install This Extension (Local Installation)

### Step 1: Clone the Repository

1. Click the green "Code" button at the top of [this page](https://github.com/KeshiaRose/quick-link-chrome-ext)
2. Click "Open with GitHub Desktop"
3. If prompted, allow your browser to open GitHub Desktop
4. Choose where you want to save the repository on your computer (Stick to the default location)
5. Click "Clone"
6. Remember where you cloned the folder - you'll need it in the next steps (e.g. \Users\YourUsername\Documents\GitHub\quick-link-chrome-ext)

### Step 2: Open Chrome and Go to Extensions

1. Open Google Chrome
2. In the address bar at the top, type: `chrome://extensions/`
3. Press Enter

### Step 3: Enable Developer Mode

1. Look for a toggle switch in the top-right corner that says "Developer mode"
2. Turn it ON (it should turn blue)

### Step 4: Load the Extension

1. Click the "Load unpacked" button that appears in the top-left corner
2. A file picker window will open
3. Navigate to the folder you extracted the files to in Step 1
4. Click on the folder (don't open it, just select it)
5. Click "Select Folder"

### Step 5: Use Your Extension

1. You should see the extension appear in your extensions list
2. Look for the extension icon in your Chrome toolbar (top-right of browser)
3. If you don't see it, click the puzzle piece icon to see all extensions and pin it
4. Click the extension icon (looks like a page with an arrow on it)to open the popup and use your links!

## How to Add Your Own Links

### Step 1: Open the Folder in VS Code

1. Open VS Code
2. Go to File → Open Folder
3. Navigate to the folder you extracted earlier
4. Select the folder and click "Open"

### Step 2: Find and Edit the popup.js File

1. In the left sidebar of VS Code, you'll see a file called `popup.js`
2. Click on it to open it

### Step 3: Add Your Links

1. Look for the section that starts with `const links = [`
2. You'll see the existing links listed like this:

   ```
   { name: "Free Trial", url: "https://dashboard.fingerprint.com/signup" },
   ```

3. To add a new link, add a new line following the same format:

   ```
   { name: "Your Link Name", url: "https://your-website.com" },
   ```

4. Make sure to:
   - Put quotes around both the name and URL
   - Add a comma after each link

### Step 4: Save and Reload

1. Press `Cmd+S` to save the file
2. Go back to Chrome and the `chrome://extensions/` page
3. Find your extension and click the refresh/reload button (circular arrow icon)
4. Your new links should now appear when you click the extension icon!

## Example of Adding a Link

If you want to add a link to Google, you would add this line to the `links` array:

```
{ name: "Google", url: "https://google.com" },
```

## Troubleshooting

- **Extension not showing up?** Make sure you enabled Developer mode and selected the correct folder
- **Links not updating?** Make sure you saved the file and reloaded the extension
- **Getting errors?** Check that your links follow the exact format with quotes and commas
- **Can't find the extension icon?** Click the puzzle piece icon in Chrome's toolbar and pin the extension
