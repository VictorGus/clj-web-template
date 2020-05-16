// Compiled by ClojureScript 1.10.520 {}
goog.provide('ui.layout');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('app.styles');
goog.require('zframes.flash');
ui.layout.layout_style = app.styles.style.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flashes",".flashes",732744110),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"right","right",-452581833),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"500px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null)], null));
ui.layout.layout = (function ui$layout$layout(page){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-100","div.h-100",1804561247),ui.layout.layout_style,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zframes.flash.flashes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layout","div#layout",1715686928),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#content","div#content",-850771127),page], null)], null)], null);
});

//# sourceMappingURL=layout.js.map
