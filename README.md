# Typescript, the Complete Developer's Guide

This is the code from Stephen Grider's [Typescript, the Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide) course on Udemy.

## Progress

Completed course.

## Changes from Stephen

* I'm using Yarn instead of npm.

* I always name a todo list item as a `Task`, rather than a `Todo`.
  This is relevant to the fetch-json and React-Redux parts.

* I spell colour and analyser correctly :-).

* I have called the longitude inside a location `long` rather than `lng`.

* My map is centred on the UK at a reasonable zoom level, and my Company and
  User classes create locations more or less within the UK and its surrounding seas.

* I've added (very) basic styling to the web apps.

* Generally, my classes have no `public` data, it's stored as `private` with
  an accessor `get` function.

* My linked list keeps track of its length, and my Node is called `LLNode`
  because lots of other `Node` classes are already defined in various modules.

* My `CSVFileReader read()` and `MatchReader load()` functions return the
  read data, because there's no good reason not to.

* My `HTMLReport` class takes a filename in the constructor.

* I chose to make the `Summary` static function return a console wins analysis.

* My json-server is running on port 3100, since I often have something else running
  on port 3000.

* I have named my root URL as `baseURL` everywhere.

* I sorta skipped the initial stuff about React Components, since that has not aged well.

* I rarely, if ever, use the name `payload` for the data contained in a Redux /
  reducer action. The main exception to this is when using `redux-promise` which
  requires that the promised data name has to be `payload`.

### Git client

I have used Git at the command-line for more than 10 years. Over that time,
I have tried many different graphical shells for Git, without finding one
that was easier and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
