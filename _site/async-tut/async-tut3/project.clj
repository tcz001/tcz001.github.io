(defproject async-tut1 "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2511"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 ]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out/async_tut1" "async_tut1.js" "async_tut1.min.js"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "async_tut1.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true                
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "async_tut1.min.js"
                :pretty-print false              
                :optimizations :advanced}}]})
