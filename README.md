# IMP Binder

IMP Binder 📎 is a web template, which facilitates creation of multipage site 
from [ IMP! ](https://github.com/girobusan/imp) pages. Work in process.

!(screenshot)[docs/Screenshot.png]

## Features

- Binds some IMP! pages to single site with editable menu
- That site works even without Java Script enabled
- The menu is editable via in-browser gui, when binder opened locally.
- No "local server" required, just load binder page in your browser as file to edit
- Fully customizable

## Binder site features

### Without Java Script
- Displays menu.
- Open pages by clicking menu items.

### With Java Script enabled
All of the above and:
- URL of the page follows the navigation, the generated links can be opened as regular ones.
- Title of the site displays currently selected page title.

## Customization
Just edit main html file and it's css file. Constrains are: 

- Do not use `style` tags, they are removed on save.
- Keep menu HTML structure: nav -> ul -> li -> a
- Do not touch `script` tag.
