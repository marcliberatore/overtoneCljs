# overtoneCljs

An example Clojure application showing [Noir] (since deprecated, use [lib-noir] instead), [ClojureScript], several of [ibdknox]'s ([Chris Granger]'s) libraries, and [Overtone] all together. For the wub wub!

See: 
- [Overtone and ClojureScript]
- [Overtone and ClojureScript, Updated]

[Noir]:https://github.com/noir-clojure/noir
[lib-noir]:https://github.com/noir-clojure/noir-cljs
[ClojureScript]:https://github.com/clojure/clojurescript
[ibdknox]:https://github.com/ibdknox
[Chris Granger]:http://www.chris-granger.com/
[Overtone]:http://overtone.github.com/
[Overtone and ClojureScript]:http://www.chris-granger.com/2012/02/20/overtone-and-clojurescript
[Overtone and ClojureScript, Updated]:http://people.cs.umass.edu/~liberato/blog/2013/02/01/overtone-and-clojurescript-updated/

## Prerequisites

Tested with [Leiningen] 2.0.0.

[Leiningen]:https://github.com/technomancy/leiningen

## Usage

To use the wub wub machine, invoke:

```bash
lein run
```

Wait for Overtone to download the piano samples (which will take a while) and then point your JavaScript-enabled web browser at http://localhost:8080 after you get the message

    Server started on port [8080].
    You can view the site at http://localhost:8080

If you make changes to the ClojureScript file, located in `src-cljs/overtoneinterface/client/main.cljs`, you'll need to recompile it separately via `lein cljsbuild once` or `lein cljsbuild auto`. 

## TODO

- Move away from deprecated or relatively unmaintained libraries (Noir, fetch)
- Whatever your wub wub heart desires

## License

Copyright (C) 2011 Chris Granger.
Portions copyright (C) 2013 Marc Liberatore.

Distributed under the Eclipse Public License, the same as Clojure.

