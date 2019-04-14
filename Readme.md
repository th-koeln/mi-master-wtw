## Subtree Commands

### Add Remote for subtree
git remote add -f mi-slides git@github.com:cnoss/mi-slides.git

### Add Subtree itself
git subtree add --prefix=mi-slides/ mi-slides master

### Pull Changes from Subtree Master
git subtree pull --prefix=mi-slides/ mi-slides master