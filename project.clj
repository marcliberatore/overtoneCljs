(defproject overtoneCljs "0.1.0"
  :description "a simple example project using noir, overtone, and ibdknox's libraries"
  :plugins [[lein-cljsbuild "0.3.0" :exclusions [org.clojure/clojure]]]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [overtone "0.8.1"]
                 [jayq "2.0.0"]
                 [crate "0.2.4"]
                 [fetch "0.1.0-alpha2" :exclusions [noir]]
                 [noir "1.3.0"]]
  :cljsbuild {:builds [{:source-paths ["src-cljs"],
                        :builds nil,
                        :compiler {:pretty-print true,
                                   :output-dir "resources/public/cljs/",
                                   :output-to "resources/public/cljs/bootstrap.js",
                                   :optimizations :simple}}]}

  :main ^ {:skip-aot true}  overtoneinterface.server)

