# Getting started
> A soft start looking at scoping peculiarities in JS

If you are reading this [online](https://github.com/makingwaves/js-workshop-2015), 
please start by cloning this repo
and checking out the 'getting-started' branch:

```
git clone https://github.com/makingwaves/js-workshop-2015
git checkout getting-started
```

Then
- Open the directory in your terminal/console 
- Install all dependencies by running `npm install`
- Open index.html in Chrome.
- Start Developer Tools (Cmd-Opt-I on Mac, Ctrl-Shift-I on Win)
- Add the 'js-workshop-2015' [folder to the Chrome Workspace](https://developer.chrome.com/devtools/docs/workspaces), if you haven't done so already
- Fix the failing test by edititing the `code.js` file _in Chrome_

All good so far?
- Change the running test from `it.only(` to `it(`
- Refresh
- Make the remaining tests pass

Paid attention?
- Uncomment the line in `index.html` containing `// mocha.checkLeaks();`
- Remove the leak in the code
