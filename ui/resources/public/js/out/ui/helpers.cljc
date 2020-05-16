(ns ui.helpers
  (:require [re-frame.core :as rf]
            [route-map.core :as route-map]
            [clojure.string :as str]
            [ui.routes :as routes]))

(defn make-href [uri item]
  (let [slashes (get (frequencies uri) \/)]
    (str "#/" (str/join "/" (take-last (- slashes 3) (str/split uri #"\/"))) "/" item)))

(defn vec-search [value coll]
  (first (filter (fn [el]
                   (let [target? (cond (map? el)
                                       (first (filter (fn [el-inner]
                                                        (if (or (map? el-inner) (vector? el-inner))
                                                          (vec-search value el-inner)
                                                          (= el-inner value))) (vals el)))
                                       (vector? el)
                                       (vec-search value el)
                                       :else
                                       (= el value))]
                     target?))
                 (cond-> coll (map? coll) vals))))
