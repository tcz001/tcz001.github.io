(ns async-tut1.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.date :as date]
            [cljs.core.async :refer [<! put! chan timeout]])
  )

(enable-console-print!)

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn user-comment []
    (.-value (dom/getElement "comment")))

(defn render-list [results]
  (str
    "<ul>"
    (apply str
           (for [result (reverse results)]
             (str "<li>" result "</li>")))
    "</ul>"))

(defn peekn
    "Returns vector of (up to) n items from the end of vector v"
    [v n]
    (if (> (count v) n)
          (subvec v (- (count v) n))
          v))

(defn init []
  (let [clicks (listen (dom/getElement "submit") "click")
        results-view (dom/getElement "results")
        comments (chan)]
    (go (while true (<! (timeout 250)) (>! comments "NPC1 : =￣ω￣=")))
    (go (while true (<! (timeout 1000)) (>! comments "NPC2 : ヾ(゜д゜；)")))
    (go (while true
          (<! clicks)
          (go (let [c (user-comment)]
                (println "putting into comments: " c)
                (>! comments (str "USER : "c))))))
    (go (loop [q []]
          (let [c (<! comments)]
            (println "taking from comments: " c)
            (set! (.-innerHTML results-view) (render-list q))
            (println q)
            (recur (-> (conj q c) (peekn 10))))))))

(init)
