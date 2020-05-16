// Compiled by ClojureScript 1.10.520 {}
goog.provide('zframes.file');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
zframes.file.storage_url = (function zframes$file$storage_url(db,url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"storage-url","storage-url",-174576307)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
zframes.file.make_binary_file = (function zframes$file$make_binary_file(file){
var type = "application/octet-stream";
return (new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null))));
});
zframes.file._STAR_file_fetch = (function zframes$file$_STAR_file_fetch(p__30782){
var map__30783 = p__30782;
var map__30783__$1 = (((((!((map__30783 == null))))?(((((map__30783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30783):map__30783);
var opts = map__30783__$1;
var uri = cljs.core.get.call(null,map__30783__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__30783__$1,new cljs.core.Keyword(null,"method","method",55703592));
var success = cljs.core.get.call(null,map__30783__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__30783__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var body = cljs.core.get.call(null,map__30783__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var url = zframes.file.storage_url.call(null,cljs.core.deref.call(null,re_frame.db.app_db),uri);
var fetch_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__4131__auto__ = method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "GET";
}
})(),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/octet-stream"], null),new cljs.core.Keyword(null,"body","body",-2049205669),zframes.file.make_binary_file.call(null,body)], null);
return fetch(url,cljs.core.clj__GT_js.call(null,fetch_opts)).then(((function (url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (resp){
return resp.json().then(((function (url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (doc){
var data = cljs.core.js__GT_clj.call(null,doc,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return cljs.core.mapv.call(null,re_frame.core.dispatch,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"req-id","req-id",-471642231).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","done","file/done",-886694752),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"status","status",-1997798413),resp.status], null)], null):null),(function (){var temp__5735__auto__ = (((resp.status <= (299)))?success:error);
if(cljs.core.truth_(temp__5735__auto__)){
var e = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),data], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(e)], null);
} else {
return null;
}
})(),(((((resp.status > (299))) && ((!(new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(error) === false)))))?(function (){var errors = cljs.core.map.call(null,((function (data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (e){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expression","expression",202311876).cljs$core$IFn$_invoke$arity$1(e))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"diagnostics","diagnostics",359783524).cljs$core$IFn$_invoke$arity$1(e))].join('');
});})(data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
,new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),resp.status], null)," ",resp.statusText], null),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5733__auto__)){
var msg = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),msg], null);
} else {
var G__30785 = resp.status;
switch (G__30785) {
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30785)].join('')));

}
}
})(),(((((!(cljs.core.empty_QMARK_.call(null,errors)))) && (cljs.core._EQ_.call(null,(422),resp.status))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (errors,data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function zframes$file$_STAR_file_fetch_$_iter__30786(s__30787){
return (new cljs.core.LazySeq(null,((function (errors,data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (){
var s__30787__$1 = s__30787;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__30787__$1);
if(temp__5735__auto__){
var s__30787__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30787__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30787__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30789 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30788 = (0);
while(true){
if((i__30788 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__30788);
cljs.core.chunk_append.call(null,b__30789,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)));

var G__30792 = (i__30788 + (1));
i__30788 = G__30792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30789),zframes$file$_STAR_file_fetch_$_iter__30786.call(null,cljs.core.chunk_rest.call(null,s__30787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30789),null);
}
} else {
var e = cljs.core.first.call(null,s__30787__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),e], null)),zframes$file$_STAR_file_fetch_$_iter__30786.call(null,cljs.core.rest.call(null,s__30787__$2)));
}
} else {
return null;
}
break;
}
});})(errors,data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
,null,null));
});})(errors,data,url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
;
return iter__4523__auto__.call(null,errors);
})()], null):null)], null)], null)], null);
})():null)], null)));
});})(url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
,((function (url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (doc){
cljs.core.println.call(null,"Error:",doc);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.call(null,success,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"data","data",-232669377),doc], null))], null));
});})(url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
);
});})(url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
).catch(((function (url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body){
return (function (err){
console.error(err);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("flash","danger","flash/danger",-654742654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041E\u0448\u0438\u0431\u043A\u0430: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),err.status], null)," ",err.statusText], null),(function (){var G__30790 = err.status;
switch (G__30790) {
case (404):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0435\u0440\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0430"], null);

break;
case (422):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u041D\u0435 \u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30790)].join('')));

}
})()], null)], null)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.call(null,error,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),opts,new cljs.core.Keyword(null,"error","error",-978969032),err], null))], null));
});})(url,fetch_opts,map__30783,map__30783__$1,opts,uri,method,success,error,body))
);
});
zframes.file.file_fetch = (function zframes$file$file_fetch(opts){
if(cljs.core.vector_QMARK_.call(null,opts)){
var seq__30794 = cljs.core.seq.call(null,opts);
var chunk__30795 = null;
var count__30796 = (0);
var i__30797 = (0);
while(true){
if((i__30797 < count__30796)){
var o = cljs.core._nth.call(null,chunk__30795,i__30797);
zframes.file._STAR_file_fetch.call(null,o);


var G__30798 = seq__30794;
var G__30799 = chunk__30795;
var G__30800 = count__30796;
var G__30801 = (i__30797 + (1));
seq__30794 = G__30798;
chunk__30795 = G__30799;
count__30796 = G__30800;
i__30797 = G__30801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30794);
if(temp__5735__auto__){
var seq__30794__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30794__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30794__$1);
var G__30802 = cljs.core.chunk_rest.call(null,seq__30794__$1);
var G__30803 = c__4550__auto__;
var G__30804 = cljs.core.count.call(null,c__4550__auto__);
var G__30805 = (0);
seq__30794 = G__30802;
chunk__30795 = G__30803;
count__30796 = G__30804;
i__30797 = G__30805;
continue;
} else {
var o = cljs.core.first.call(null,seq__30794__$1);
zframes.file._STAR_file_fetch.call(null,o);


var G__30806 = cljs.core.next.call(null,seq__30794__$1);
var G__30807 = null;
var G__30808 = (0);
var G__30809 = (0);
seq__30794 = G__30806;
chunk__30795 = G__30807;
count__30796 = G__30808;
i__30797 = G__30809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return zframes.file._STAR_file_fetch.call(null,opts);
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("file","fetch","file/fetch",-1093523784),zframes.file.file_fetch);
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("file","upload","file/upload",-74360838),(function (_,p__30810){
var vec__30811 = p__30810;
var ___$1 = cljs.core.nth.call(null,vec__30811,(0),null);
var map__30814 = cljs.core.nth.call(null,vec__30811,(1),null);
var map__30814__$1 = (((((!((map__30814 == null))))?(((((map__30814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30814):map__30814);
var req = map__30814__$1;
var name = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var folder = cljs.core.get.call(null,map__30814__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var uri = ["/storage/upload/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("file","fetch","file/fetch",-1093523784),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"uri","uri",-774711847),uri),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"folder","folder",1515881736))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("file","done","file/done",-886694752),(function (p__30816,p__30817){
var map__30818 = p__30816;
var map__30818__$1 = (((((!((map__30818 == null))))?(((((map__30818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30818):map__30818);
var db = cljs.core.get.call(null,map__30818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30819 = p__30817;
var _ = cljs.core.nth.call(null,vec__30819,(0),null);
var map__30822 = cljs.core.nth.call(null,vec__30819,(1),null);
var map__30822__$1 = (((((!((map__30822 == null))))?(((((map__30822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);
var resp = map__30822__$1;
var map__30823 = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__30823__$1 = (((((!((map__30823 == null))))?(((((map__30823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30823):map__30823);
var req_id = cljs.core.get.call(null,map__30823__$1,new cljs.core.Keyword(null,"req-id","req-id",-471642231));
cljs.core.println.call(null,resp);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null),resp)], null);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword("file","upload","file/upload",-74360838),(function (req){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","upload","file/upload",-74360838),req], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("file","response","file/response",-1065280892),(function (db,p__30827){
var vec__30828 = p__30827;
var _ = cljs.core.nth.call(null,vec__30828,(0),null);
var req_id = cljs.core.nth.call(null,vec__30828,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"req","req",-326448303),req_id], null));
}));

//# sourceMappingURL=file.js.map
