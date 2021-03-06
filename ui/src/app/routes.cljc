(ns app.routes)

(def routes {:. :app.sample-page.model/sample})

(defn route-index* [route pth]
  (merge
   (hash-map (str (:. route))
             (-> route
                 (select-keys [:breadcrumb])
                 (assoc :pth pth)))
   (reduce-kv
    (fn [acc k v]
      (if (or (string? k) (vector? k) )
        (merge acc (route-index* v (into pth [k "/" ])))
        acc))
    {}
    route)))

(def route-index
  (route-index* routes ["/"]))
