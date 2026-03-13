# Project Images Setup

## Current Status

✅ **Project background images are now implemented!**

Each project card now displays a background image with an overlay containing the project title and description.

## How to Add Your Project Images:

1. **Take Screenshots**: Capture screenshots of your live projects or project interfaces
2. **Optimize Images**:
   - Recommended size: 800x600px (4:3 aspect ratio)
   - Format: JPG, PNG, or WebP
   - Keep file size under 500KB for fast loading
3. **Add to Public Folder**: Place your images in the `/public` folder
4. **Update Project Data**: Edit the image paths in `src/data/projects.js`

## Expected Image Files:

- `bidmaster-preview.jpg` - BidMaster auction platform screenshot
- `birdnet-preview.jpg` - BirdNet business website screenshot
- `career-guidance-preview.jpg` - Career Guidance Platform screenshot
- `learning-tutor-preview.jpg` - Learning Tutor interface screenshot

## Example:

```javascript
{
  id: 'bidmaster',
  title: 'BidMaster',
  image: '/bidmaster-preview.jpg', // Your project screenshot
  // ... other project data
}
```

## Features:

- ✨ Background images with dark overlay for text readability
- 🎯 Project title and description overlaid on image
- 📱 Responsive design that works on all devices
- 🔄 Smooth hover effects and transitions
- 🎨 Fallback placeholder when image is missing
- ⚡ Optimized loading and performance

## Current Example:

The BidMaster project is currently using a temporary image (`/picture.jpg`) to demonstrate the functionality. Replace this with an actual project screenshot.
