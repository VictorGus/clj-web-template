// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.basic_components.info_input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ui.styles');
ui.basic_components.info_input.input_style = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".wrapper",".wrapper",-1906185478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"20px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"15px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-item-title",".info-item-title",-1097338875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 7px rgba(0,0,0,0.5)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-item-value-wrapper",".info-item-value-wrapper",-703415273),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"outline","outline",793464534),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"#666666",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f2f2f2",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 7px rgba(0,0,0,0.5)"], null)], null)], null)], null));
ui.basic_components.info_input.info_input = (function ui$basic_components$info_input$info_input(p__30093){
var map__30094 = p__30093;
var map__30094__$1 = (((((!((map__30094 == null))))?(((((map__30094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30094):map__30094);
var title = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"value","value",305978217));
var edit_QMARK_ = reagent.core.atom.call(null,false);
var v = reagent.core.atom.call(null,value);
return ((function (edit_QMARK_,v,map__30094,map__30094__$1,title,value){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),ui.basic_components.info_input.input_style,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info-item-title","div.info-item-title",283199807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"badge badge-primary text-wrap"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.info-item-value-wrapper","span.info-item-value-wrapper",-220791532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#info-item-value","input#info-item-value",-1186502189),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),((8) * (1.75 + cljs.core.count.call(null,cljs.core.deref.call(null,v))))], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,v),new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (edit_QMARK_,v,map__30094,map__30094__$1,title,value){
return (function (e){
e.target.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((8) * ((1) + e.target.value.length))),"px"].join('');

return cljs.core.reset_BANG_.call(null,v,e.target.value);
});})(edit_QMARK_,v,map__30094,map__30094__$1,title,value))
], null)], null)], null)], null)], null);
});
;})(edit_QMARK_,v,map__30094,map__30094__$1,title,value))
});

//# sourceMappingURL=info_input.js.map
