(ns async-tut1.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! >! put! chan timeout]])
  )

(enable-console-print!)

(let [ch (chan)]
  (go (while true
        (let [v (<! ch)]
          (println "read: " v))))
  (go (>! ch "hi")
      (<! (timeout 1000))
      (>! ch "there")))
