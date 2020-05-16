// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.audit.logs.model');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ui.audit.logs.form');
goog.require('chrono.core');
ui.audit.logs.model.almost_iso_fmt = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month","month",-1960248533),"-",new cljs.core.Keyword(null,"day","day",-274800446)," ",new cljs.core.Keyword(null,"hour","hour",-555989214),":",new cljs.core.Keyword(null,"min","min",444991522),":",new cljs.core.Keyword(null,"sec","sec",-1580376553)], null);
ui.audit.logs.model.logs = new cljs.core.Keyword("ui.audit.logs.model","logs","ui.audit.logs.model/logs",243953391);
ui.audit.logs.model.humanize_action = (function ui$audit$logs$model$humanize_action(req){
var action_map = new cljs.core.PersistentArrayMap(null, 5, ["get","Viewing ","post","Creating ","delete","Deleting ","patch","Updating ","put","Updating "], null);
var G__36086 = cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"l_m","l_m",-1559054096),cljs.core.get.call(null,action_map,new cljs.core.Keyword(null,"l_m","l_m",-1559054096).cljs$core$IFn$_invoke$arity$1(req)));
if(cljs.core._EQ_.call(null,"/Patient/search",new cljs.core.Keyword(null,"l_uri","l_uri",1836378954).cljs$core$IFn$_invoke$arity$1(req))){
return cljs.core.assoc.call(null,G__36086,new cljs.core.Keyword(null,"l_m","l_m",-1559054096),"Search ");
} else {
return G__36086;
}
});
ui.audit.logs.model.humanize_ts = (function ui$audit$logs$model$humanize_ts(req){
return cljs.core.update.call(null,req,new cljs.core.Keyword(null,"ts","ts",1617209904),(function (p1__36087_SHARP_){
return chrono.core.format.call(null,chrono.core._PLUS_.call(null,chrono.core.parse.call(null,p1__36087_SHARP_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),(3)], null)),ui.audit.logs.model.almost_iso_fmt);
}));
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.audit.logs.model","send-req","ui.audit.logs.model/send-req",-352024962),(function (p__36088,_){
var map__36089 = p__36088;
var map__36089__$1 = (((((!((map__36089 == null))))?(((((map__36089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36089):map__36089);
var db = cljs.core.get.call(null,map__36089__$1,new cljs.core.Keyword(null,"db","db",993250759));
var form_values = cljs.core.get.call(null,db,ui.audit.logs.form.form_path);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.audit.logs.model","send-data","ui.audit.logs.model/send-data",621860786),form_values], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.audit.logs.model","send-data","ui.audit.logs.model/send-data",621860786),(function (p__36091,p__36092){
var map__36093 = p__36091;
var map__36093__$1 = (((((!((map__36093 == null))))?(((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36093):map__36093);
var db = cljs.core.get.call(null,map__36093__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36094 = p__36092;
var _ = cljs.core.nth.call(null,vec__36094,(0),null);
var form_values = cljs.core.nth.call(null,vec__36094,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Logs/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,form_values)),new cljs.core.Keyword(null,"req-id","req-id",-471642231),ui.audit.logs.model.logs,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.audit.logs.model","save-results","ui.audit.logs.model/save-results",573337789)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.audit.logs.model","save-results","ui.audit.logs.model/save-results",573337789),(function (p__36098,p__36099){
var map__36100 = p__36098;
var map__36100__$1 = (((((!((map__36100 == null))))?(((((map__36100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36100):map__36100);
var db = cljs.core.get.call(null,map__36100__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36101 = p__36099;
var _ = cljs.core.nth.call(null,vec__36101,(0),null);
var data = cljs.core.nth.call(null,vec__36101,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,ui.audit.logs.model.logs,data)], null);
}));
re_frame.core.reg_event_fx.call(null,ui.audit.logs.model.logs,(function (p__36105,p__36106){
var map__36107 = p__36105;
var map__36107__$1 = (((((!((map__36107 == null))))?(((((map__36107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36107):map__36107);
var db = cljs.core.get.call(null,map__36107__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__36108 = p__36106;
var pid = cljs.core.nth.call(null,vec__36108,(0),null);
var phase = cljs.core.nth.call(null,vec__36108,(1),null);
var params = cljs.core.nth.call(null,vec__36108,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"deinit","deinit",-385511679),phase)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235),phase)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),phase)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Logs/",new cljs.core.Keyword(null,"req-id","req-id",-471642231),ui.audit.logs.model.logs], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.audit.logs.form","search-user","ui.audit.logs.form/search-user",2106446289)], null)], null);
} else {
return null;
}
}
}));
re_frame.core.reg_sub.call(null,ui.audit.logs.model.logs,new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pages","data","pages/data",129617787),ui.audit.logs.model.logs], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("xhr","response","xhr/response",-1068297090),ui.audit.logs.model.logs], null),(function (p__36112,p__36113){
var vec__36114 = p__36112;
var page = cljs.core.nth.call(null,vec__36114,(0),null);
var resp = cljs.core.nth.call(null,vec__36114,(1),null);
var vec__36117 = p__36113;
var pid = cljs.core.nth.call(null,vec__36117,(0),null);
var sanitized_logs = cljs.core.map.call(null,cljs.core.comp.call(null,ui.audit.logs.model.humanize_action,ui.audit.logs.model.humanize_ts,new cljs.core.Keyword(null,"_source","_source",-812884485)),cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hits","hits",-2120002930),new cljs.core.Keyword(null,"hits","hits",-2120002930)], null)));
return cljs.core.merge.call(null,page,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),sanitized_logs], null));
}));

//# sourceMappingURL=model.js.map
