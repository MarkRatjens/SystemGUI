Engines System GUI
==================

A GUI for Spaces written with a Sinatra back end and an SPA client.

Run
---

1. Spaces

This application assumes that it is in a common directory to Spaces.

Gemfile imports the Spaces gem by a relative path:
`gem "spaces",           '0.1.0',    :path => "../Spaces"`


2. Dependencies

Needs Ruby bundle and NPM install.

Before running the application:
```
bundle
npm i
```

3. System

Needs imagemagick and ghostscript.

For example, to install on Mac OS X
`$ brew install imagemagick ghostscript`

4. Start

`bundle exec thin start`


Test
----

`bundle exec rspec`
