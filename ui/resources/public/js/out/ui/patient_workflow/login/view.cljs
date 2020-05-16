(ns ui.patient-workflow.login.view
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [ui.zframes.redirect]
            [ui.patient-workflow.login.model :as model]
            [ui.pages :as pages]))

(pages/reg-subs-page
 model/index
 (fn [_ _]
   [:div "Login"]))
