// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16489){
var map__16490 = p__16489;
var map__16490__$1 = (((((!((map__16490 == null))))?(((((map__16490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16490):map__16490);
var m = map__16490__$1;
var n = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16492_16524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16493_16525 = null;
var count__16494_16526 = (0);
var i__16495_16527 = (0);
while(true){
if((i__16495_16527 < count__16494_16526)){
var f_16528 = cljs.core._nth.call(null,chunk__16493_16525,i__16495_16527);
cljs.core.println.call(null,"  ",f_16528);


var G__16529 = seq__16492_16524;
var G__16530 = chunk__16493_16525;
var G__16531 = count__16494_16526;
var G__16532 = (i__16495_16527 + (1));
seq__16492_16524 = G__16529;
chunk__16493_16525 = G__16530;
count__16494_16526 = G__16531;
i__16495_16527 = G__16532;
continue;
} else {
var temp__5735__auto___16533 = cljs.core.seq.call(null,seq__16492_16524);
if(temp__5735__auto___16533){
var seq__16492_16534__$1 = temp__5735__auto___16533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16492_16534__$1)){
var c__4550__auto___16535 = cljs.core.chunk_first.call(null,seq__16492_16534__$1);
var G__16536 = cljs.core.chunk_rest.call(null,seq__16492_16534__$1);
var G__16537 = c__4550__auto___16535;
var G__16538 = cljs.core.count.call(null,c__4550__auto___16535);
var G__16539 = (0);
seq__16492_16524 = G__16536;
chunk__16493_16525 = G__16537;
count__16494_16526 = G__16538;
i__16495_16527 = G__16539;
continue;
} else {
var f_16540 = cljs.core.first.call(null,seq__16492_16534__$1);
cljs.core.println.call(null,"  ",f_16540);


var G__16541 = cljs.core.next.call(null,seq__16492_16534__$1);
var G__16542 = null;
var G__16543 = (0);
var G__16544 = (0);
seq__16492_16524 = G__16541;
chunk__16493_16525 = G__16542;
count__16494_16526 = G__16543;
i__16495_16527 = G__16544;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16545 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16545);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16545)))?cljs.core.second.call(null,arglists_16545):arglists_16545));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16496_16546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16497_16547 = null;
var count__16498_16548 = (0);
var i__16499_16549 = (0);
while(true){
if((i__16499_16549 < count__16498_16548)){
var vec__16510_16550 = cljs.core._nth.call(null,chunk__16497_16547,i__16499_16549);
var name_16551 = cljs.core.nth.call(null,vec__16510_16550,(0),null);
var map__16513_16552 = cljs.core.nth.call(null,vec__16510_16550,(1),null);
var map__16513_16553__$1 = (((((!((map__16513_16552 == null))))?(((((map__16513_16552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16513_16552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16513_16552):map__16513_16552);
var doc_16554 = cljs.core.get.call(null,map__16513_16553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16555 = cljs.core.get.call(null,map__16513_16553__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16551);

cljs.core.println.call(null," ",arglists_16555);

if(cljs.core.truth_(doc_16554)){
cljs.core.println.call(null," ",doc_16554);
} else {
}


var G__16556 = seq__16496_16546;
var G__16557 = chunk__16497_16547;
var G__16558 = count__16498_16548;
var G__16559 = (i__16499_16549 + (1));
seq__16496_16546 = G__16556;
chunk__16497_16547 = G__16557;
count__16498_16548 = G__16558;
i__16499_16549 = G__16559;
continue;
} else {
var temp__5735__auto___16560 = cljs.core.seq.call(null,seq__16496_16546);
if(temp__5735__auto___16560){
var seq__16496_16561__$1 = temp__5735__auto___16560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16496_16561__$1)){
var c__4550__auto___16562 = cljs.core.chunk_first.call(null,seq__16496_16561__$1);
var G__16563 = cljs.core.chunk_rest.call(null,seq__16496_16561__$1);
var G__16564 = c__4550__auto___16562;
var G__16565 = cljs.core.count.call(null,c__4550__auto___16562);
var G__16566 = (0);
seq__16496_16546 = G__16563;
chunk__16497_16547 = G__16564;
count__16498_16548 = G__16565;
i__16499_16549 = G__16566;
continue;
} else {
var vec__16515_16567 = cljs.core.first.call(null,seq__16496_16561__$1);
var name_16568 = cljs.core.nth.call(null,vec__16515_16567,(0),null);
var map__16518_16569 = cljs.core.nth.call(null,vec__16515_16567,(1),null);
var map__16518_16570__$1 = (((((!((map__16518_16569 == null))))?(((((map__16518_16569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16518_16569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16518_16569):map__16518_16569);
var doc_16571 = cljs.core.get.call(null,map__16518_16570__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16572 = cljs.core.get.call(null,map__16518_16570__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16568);

cljs.core.println.call(null," ",arglists_16572);

if(cljs.core.truth_(doc_16571)){
cljs.core.println.call(null," ",doc_16571);
} else {
}


var G__16573 = cljs.core.next.call(null,seq__16496_16561__$1);
var G__16574 = null;
var G__16575 = (0);
var G__16576 = (0);
seq__16496_16546 = G__16573;
chunk__16497_16547 = G__16574;
count__16498_16548 = G__16575;
i__16499_16549 = G__16576;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__16520 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16521 = null;
var count__16522 = (0);
var i__16523 = (0);
while(true){
if((i__16523 < count__16522)){
var role = cljs.core._nth.call(null,chunk__16521,i__16523);
var temp__5735__auto___16577__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___16577__$1)){
var spec_16578 = temp__5735__auto___16577__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16578));
} else {
}


var G__16579 = seq__16520;
var G__16580 = chunk__16521;
var G__16581 = count__16522;
var G__16582 = (i__16523 + (1));
seq__16520 = G__16579;
chunk__16521 = G__16580;
count__16522 = G__16581;
i__16523 = G__16582;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__16520);
if(temp__5735__auto____$1){
var seq__16520__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16520__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__16520__$1);
var G__16583 = cljs.core.chunk_rest.call(null,seq__16520__$1);
var G__16584 = c__4550__auto__;
var G__16585 = cljs.core.count.call(null,c__4550__auto__);
var G__16586 = (0);
seq__16520 = G__16583;
chunk__16521 = G__16584;
count__16522 = G__16585;
i__16523 = G__16586;
continue;
} else {
var role = cljs.core.first.call(null,seq__16520__$1);
var temp__5735__auto___16587__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___16587__$2)){
var spec_16588 = temp__5735__auto___16587__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16588));
} else {
}


var G__16589 = cljs.core.next.call(null,seq__16520__$1);
var G__16590 = null;
var G__16591 = (0);
var G__16592 = (0);
seq__16520 = G__16589;
chunk__16521 = G__16590;
count__16522 = G__16591;
i__16523 = G__16592;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__16593 = cljs.core.conj.call(null,via,t);
var G__16594 = cljs.core.ex_cause.call(null,t);
via = G__16593;
t = G__16594;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__16597 = datafied_throwable;
var map__16597__$1 = (((((!((map__16597 == null))))?(((((map__16597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16597):map__16597);
var via = cljs.core.get.call(null,map__16597__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__16597__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__16597__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16598 = cljs.core.last.call(null,via);
var map__16598__$1 = (((((!((map__16598 == null))))?(((((map__16598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16598):map__16598);
var type = cljs.core.get.call(null,map__16598__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__16598__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__16598__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16599 = data;
var map__16599__$1 = (((((!((map__16599 == null))))?(((((map__16599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16599):map__16599);
var problems = cljs.core.get.call(null,map__16599__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__16599__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__16599__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16600 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__16600__$1 = (((((!((map__16600 == null))))?(((((map__16600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16600):map__16600);
var top_data = map__16600__$1;
var source = cljs.core.get.call(null,map__16600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__16605 = phase;
var G__16605__$1 = (((G__16605 instanceof cljs.core.Keyword))?G__16605.fqn:null);
switch (G__16605__$1) {
case "read-source":
var map__16606 = data;
var map__16606__$1 = (((((!((map__16606 == null))))?(((((map__16606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16606):map__16606);
var line = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__16608 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__16608__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16608,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16608);
var G__16608__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16608__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16608__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16608__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__16609 = top_data;
var G__16609__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__16609,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__16609);
var G__16609__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__16609__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__16609__$1);
var G__16609__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16609__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16609__$2);
var G__16609__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16609__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16609__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16609__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16609__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__16610 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16610,(0),null);
var method = cljs.core.nth.call(null,vec__16610,(1),null);
var file = cljs.core.nth.call(null,vec__16610,(2),null);
var line = cljs.core.nth.call(null,vec__16610,(3),null);
var G__16613 = top_data;
var G__16613__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__16613,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__16613);
var G__16613__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__16613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__16613__$1);
var G__16613__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__16613__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__16613__$2);
var G__16613__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__16613__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__16613__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__16613__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__16613__$4;
}

break;
case "execution":
var vec__16614 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__16614,(0),null);
var method = cljs.core.nth.call(null,vec__16614,(1),null);
var file = cljs.core.nth.call(null,vec__16614,(2),null);
var line = cljs.core.nth.call(null,vec__16614,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__16614,source__$1,method,file,line,G__16605,G__16605__$1,map__16597,map__16597__$1,via,trace,phase,map__16598,map__16598__$1,type,message,data,map__16599,map__16599__$1,problems,fn,caller,map__16600,map__16600__$1,top_data,source){
return (function (p1__16596_SHARP_){
var or__4131__auto__ = (p1__16596_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__16596_SHARP_);
}
});})(vec__16614,source__$1,method,file,line,G__16605,G__16605__$1,map__16597,map__16597__$1,via,trace,phase,map__16598,map__16598__$1,type,message,data,map__16599,map__16599__$1,problems,fn,caller,map__16600,map__16600__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__16617 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__16617__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__16617,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__16617);
var G__16617__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__16617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__16617__$1);
var G__16617__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__16617__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__16617__$2);
var G__16617__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__16617__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__16617__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__16617__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__16617__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16605__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__16621){
var map__16622 = p__16621;
var map__16622__$1 = (((((!((map__16622 == null))))?(((((map__16622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16622):map__16622);
var triage_data = map__16622__$1;
var phase = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__16624 = phase;
var G__16624__$1 = (((G__16624 instanceof cljs.core.Keyword))?G__16624.fqn:null);
switch (G__16624__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16625_16634 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16626_16635 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16627_16636 = true;
var _STAR_print_fn_STAR__temp_val__16628_16637 = ((function (_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16627_16636;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16628_16637;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,_STAR_print_fn_STAR__temp_val__16628_16637,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,_STAR_print_fn_STAR__temp_val__16628_16637,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__16619_SHARP_){
return cljs.core.dissoc.call(null,p1__16619_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,_STAR_print_fn_STAR__temp_val__16628_16637,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__16625_16634,_STAR_print_fn_STAR__orig_val__16626_16635,_STAR_print_newline_STAR__temp_val__16627_16636,_STAR_print_fn_STAR__temp_val__16628_16637,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16626_16635;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16625_16634;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16629_16638 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16630_16639 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16631_16640 = true;
var _STAR_print_fn_STAR__temp_val__16632_16641 = ((function (_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16631_16640;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16632_16641;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,_STAR_print_fn_STAR__temp_val__16632_16641,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,_STAR_print_fn_STAR__temp_val__16632_16641,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__16620_SHARP_){
return cljs.core.dissoc.call(null,p1__16620_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,_STAR_print_fn_STAR__temp_val__16632_16641,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__16629_16638,_STAR_print_fn_STAR__orig_val__16630_16639,_STAR_print_newline_STAR__temp_val__16631_16640,_STAR_print_fn_STAR__temp_val__16632_16641,sb__4661__auto__,G__16624,G__16624__$1,loc,class_name,simple_class,cause_type,format,map__16622,map__16622__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16630_16639;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16629_16638;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16624__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
