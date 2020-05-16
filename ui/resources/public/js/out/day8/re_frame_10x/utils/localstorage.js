// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__28726 = arguments.length;
switch (G__28726) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__28728 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__28729 = null;
var count__28730 = (0);
var i__28731 = (0);
while(true){
if((i__28731 < count__28730)){
var k = cljs.core._nth.call(null,chunk__28729,i__28731);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__28732 = seq__28728;
var G__28733 = chunk__28729;
var G__28734 = count__28730;
var G__28735 = (i__28731 + (1));
seq__28728 = G__28732;
chunk__28729 = G__28733;
count__28730 = G__28734;
i__28731 = G__28735;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28728);
if(temp__5720__auto__){
var seq__28728__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28728__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28728__$1);
var G__28736 = cljs.core.chunk_rest.call(null,seq__28728__$1);
var G__28737 = c__4550__auto__;
var G__28738 = cljs.core.count.call(null,c__4550__auto__);
var G__28739 = (0);
seq__28728 = G__28736;
chunk__28729 = G__28737;
count__28730 = G__28738;
i__28731 = G__28739;
continue;
} else {
var k = cljs.core.first.call(null,seq__28728__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__28740 = cljs.core.next.call(null,seq__28728__$1);
var G__28741 = null;
var G__28742 = (0);
var G__28743 = (0);
seq__28728 = G__28740;
chunk__28729 = G__28741;
count__28730 = G__28742;
i__28731 = G__28743;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map
