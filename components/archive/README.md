# Component Archive & Future Restoration Guide

This folder contains the complete, production-ready components that were removed per your request:
1. **`ViralShowcase.tsx`**: The interactive "Instagram Reels & Editorial Edits" showcase featuring 5 DaVinci Resolve human-edited social reels (1M+ viral hit, audio toggles, responsive playback playlist).
2. **`CaseStudyContentWithAssets.tsx`**: The full version of the case study page containing all Production Assets, Plates, Concept Art, Character Sheets, Storyboards, and multi-format deliverable tabs (Carousels & Statics).

---

## How to Restore in the Future

### 1. To bring back "Instagram Reels & Editorial Edits":
In `site/app/page.tsx`:
```tsx
import { ViralShowcase } from '@/components/archive/ViralShowcase';

// inside Home():
<ProjectGrid projects={projects} />
<ViralShowcase />
<ImpactStats />
```
In `site/components/Nav.tsx`:
Add `{ href: '/#viral-videos', label: 'Viral (1M+)' }` back to `navLinks`.

### 2. To bring back "Production Assets, Plates & Concept Art":
In `site/app/work/[slug]/CaseStudyContent.tsx`:
Replace with `site/components/archive/CaseStudyContentWithAssets.tsx`.

### 3. Git Snapshot
A dedicated Git branch has also been preserved:
```bash
git checkout archive/full-assets-and-reels
```
This guarantees you can access or restore the exact full website at any point in the future with zero effort.
