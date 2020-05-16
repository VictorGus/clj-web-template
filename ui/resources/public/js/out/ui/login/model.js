// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.login.model');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ui.login.form');
goog.require('ui.pages');
ui.login.model.index = new cljs.core.Keyword("ui.login.model","login","ui.login.model/login",-2002099855);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.login.model","sign-in","ui.login.model/sign-in",-1609714256),(function (p__63758,p__63759){
var map__63760 = p__63758;
var map__63760__$1 = (((((!((map__63760 == null))))?(((((map__63760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63760):map__63760);
var db = cljs.core.get.call(null,map__63760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63761 = p__63759;
var pid = cljs.core.nth.call(null,vec__63761,(0),null);
var encoded = btoa(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.login.form.form_path,new cljs.core.Keyword(null,"password","password",417022471)], null)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("xhr","fetch","xhr/fetch",-1081850758),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/Login/",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login","login",55217519),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.login.form.form_path,new cljs.core.Keyword(null,"login","login",55217519)], null)),new cljs.core.Keyword(null,"password","password",417022471),encoded], null),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("ui.login.model","success-redirect","ui.login.model/success-redirect",-1352539712)], null),new cljs.core.Keyword(null,"req-id","req-id",-471642231),ui.login.model.index], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.login.model","success-redirect","ui.login.model/success-redirect",-1352539712),(function (p__63765,p__63766){
var map__63767 = p__63765;
var map__63767__$1 = (((((!((map__63767 == null))))?(((((map__63767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63767):map__63767);
var db = cljs.core.get.call(null,map__63767__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63768 = p__63766;
var _ = cljs.core.nth.call(null,vec__63768,(0),null);
var map__63771 = cljs.core.nth.call(null,vec__63768,(1),null);
var map__63771__$1 = (((((!((map__63771 == null))))?(((((map__63771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63771):map__63771);
var map__63772 = cljs.core.get.call(null,map__63771__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63772__$1 = (((((!((map__63772 == null))))?(((((map__63772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63772):map__63772);
var jwt = cljs.core.get.call(null,map__63772__$1,new cljs.core.Keyword(null,"jwt","jwt",1504015441));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui.zframes.cookies","set","ui.zframes.cookies/set",-1162651855),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"jwt","jwt",1504015441),new cljs.core.Keyword(null,"value","value",305978217),jwt], null),new cljs.core.Keyword("ui.zframes.redirect","redirect-with-refresh","ui.zframes.redirect/redirect-with-refresh",-37937814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),cljs.core.get.call(null,db,new cljs.core.Keyword(null,"sign-in-redirect","sign-in-redirect",-597528163))], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ui.login.model","sign-out","ui.login.model/sign-out",2001928461),(function (p__63776,_){
var map__63777 = p__63776;
var map__63777__$1 = (((((!((map__63777 == null))))?(((((map__63777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63777):map__63777);
var db = cljs.core.get.call(null,map__63777__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui.zframes.cookies","remove","ui.zframes.cookies/remove",-1782851361),new cljs.core.Keyword(null,"jwt","jwt",1504015441),new cljs.core.Keyword("ui.zframes.redirect","redirect-with-refresh","ui.zframes.redirect/redirect-with-refresh",-37937814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/login"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,ui.login.model.index,(function (p__63779,p__63780){
var map__63781 = p__63779;
var map__63781__$1 = (((((!((map__63781 == null))))?(((((map__63781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63781):map__63781);
var db = cljs.core.get.call(null,map__63781__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__63782 = p__63780;
var pid = cljs.core.nth.call(null,vec__63782,(0),null);
var phase = cljs.core.nth.call(null,vec__63782,(1),null);
var params = cljs.core.nth.call(null,vec__63782,(2),null);
return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_sub.call(null,ui.login.model.index,(function (db){
return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=model.js.map
