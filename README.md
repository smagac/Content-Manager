# StoryMode Content Manager

This tool exists purely as to provide an easier way for myself (Nicholas Hydock) to manage the game's content, instead of having to manually
edit text, csv, and json files hoping to not make any mistakes, as well as to provide the community with tools for creating their own content
for the game with ease.

> Based on electron-react-boilerplate.  
> Bootstrap 4 is used for the UI styling.  Nothing too fancy on top of that.

## Install
```bash
$ npm install
```

## Run

Run these two commands __simultaneously__ in different console tabs.

```bash
$ npm run hot-server
$ npm run start-hot
```

or run two servers with one command

```bash
$ npm run dev
```

## Packaging

To package apps for the local platform:

```bash
$ npm run package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) for dependencies.

Then,
```bash
$ npm run package-all
```

To package apps with options:

```bash
$ npm run package -- --[option]
```

## Further commands

To run the application without packaging run

```bash
$ npm run build
$ npm start
```
