// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.basic_components.spinner');
goog.require('cljs.core');
goog.require('ui.styles');
goog.require('reagent.core');
ui.basic_components.spinner.spinner_style = ui.styles.style.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sk-chase",".sk-chase",-1442997733),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"animation","animation",-1248293244),"sk-chase 2.5s infinite linear both "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sk-chase",".sk-chase",-1442997733),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"animation","animation",-1248293244),"sk-chase-dot 2.0s infinite ease-in-out both"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sk-chase-dot:before",".sk-chase-dot:before",-115181065),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),"",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"25%",new cljs.core.Keyword(null,"height","height",1025178622),"25%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%",new cljs.core.Keyword(null,"animation","animation",-1248293244),"sk-chase-dot-before 2.0s infinite ease-in-out both"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(1)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-1.1s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(2)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-1.0s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(3)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.9s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(4)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.8s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(5)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.7s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(6)"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.6s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(1):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-1.1s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(2):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-1.0s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(3):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.9s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(4):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.8s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(5):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.7s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,".sk-chase-dot:nth-child(6):before"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),"-0.6s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"@keyframes.sk-chase"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(360deg)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"@keyframes.sk-chase-dot"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(360deg)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"@keyframes.sk-chase-dot-before"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"50%"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.4)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,"100%, 0%"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1.0)"], null)], null)], null));
ui.basic_components.spinner.spinner = (function ui$basic_components$spinner$spinner(){
var loading_QMARK_ = reagent.core.atom.call(null,false);
return ((function (loading_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase","div.sk-chase",-2055662848),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),ui.basic_components.spinner.spinner_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sk-chase-dot","div.sk-chase-dot",-1945979787)], null)], null);
});
;})(loading_QMARK_))
});

//# sourceMappingURL=spinner.js.map
