It’s also useful to know how Meteor decides in which order to load your files:

- Files in /lib are loaded before anything else.
- Any main.* file is loaded after everything else.
- Everything else loads in alphabetical order based on the file name.