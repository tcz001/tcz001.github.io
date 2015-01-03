// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_();
async_tut1.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__29644_29647 = el;
var G__29645_29648 = type;
var G__29646_29649 = ((function (G__29644_29647,G__29645_29648,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__29644_29647,G__29645_29648,out))
;
goog.events.listen(G__29644_29647,G__29645_29648,G__29646_29649);

return out;
});
async_tut1.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
async_tut1.core.jsonp = (function jsonp(uri){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var req = (new goog.net.Jsonp((new goog.Uri(uri))));
req.send(null,((function (out,req){
return (function (res){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,res);
});})(out,req))
);

return out;
});
async_tut1.core.query_url = (function query_url(q){
return [cljs.core.str(async_tut1.core.wiki_search_url),cljs.core.str(q)].join('');
});
var c__18230__auto___29665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto___29665){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___29665){
return (function (state_29656){
var state_val_29657 = (state_29656[(1)]);
if((state_val_29657 === (2))){
var inst_29653 = (state_29656[(2)]);
var inst_29654 = console.log(inst_29653);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29656__$1,inst_29654);
} else {
if((state_val_29657 === (1))){
var inst_29650 = async_tut1.core.query_url("cats");
var inst_29651 = async_tut1.core.jsonp(inst_29650);
var state_29656__$1 = state_29656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29656__$1,(2),inst_29651);
} else {
return null;
}
}
});})(c__18230__auto___29665))
;
return ((function (switch__18215__auto__,c__18230__auto___29665){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_29661 = [null,null,null,null,null,null,null];
(statearr_29661[(0)] = state_machine__18216__auto__);

(statearr_29661[(1)] = (1));

return statearr_29661;
});
var state_machine__18216__auto____1 = (function (state_29656){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_29656);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e29662){if((e29662 instanceof Object)){
var ex__18219__auto__ = e29662;
var statearr_29663_29666 = state_29656;
(statearr_29663_29666[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29656);

return cljs.core.constant$keyword$59;
} else {
throw e29662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__29667 = state_29656;
state_29656 = G__29667;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_29656){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_29656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___29665))
})();
var state__18232__auto__ = (function (){var statearr_29664 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_29664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___29665);

return statearr_29664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto___29665))
);

async_tut1.core.user_query = (function user_query(){
return (function (){var G__29669 = "query";
return goog.dom.getElement(G__29669);
})().value;
});
async_tut1.core.render_query = (function render_query(results){
return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4394__auto__ = (function iter__29676(s__29677){
return (new cljs.core.LazySeq(null,(function (){
var s__29677__$1 = s__29677;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__29677__$1);
if(temp__4126__auto__){
var s__29677__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29677__$2)){
var c__4392__auto__ = cljs.core.chunk_first(s__29677__$2);
var size__4393__auto__ = cljs.core.count(c__4392__auto__);
var b__29679 = cljs.core.chunk_buffer(size__4393__auto__);
if((function (){var i__29678 = (0);
while(true){
if((i__29678 < size__4393__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4392__auto__,i__29678);
cljs.core.chunk_append(b__29679,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));

var G__29682 = (i__29678 + (1));
i__29678 = G__29682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29679),iter__29676(cljs.core.chunk_rest(s__29677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29679),null);
}
} else {
var result = cljs.core.first(s__29677__$2);
return cljs.core.cons([cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__29676(cljs.core.rest(s__29677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__(results);
})())),cljs.core.str("</ul>")].join('');
});
async_tut1.core.init = (function init(){
var clicks = async_tut1.core.listen((function (){var G__29723 = "search";
return goog.dom.getElement(G__29723);
})(),"click");
var results_view = (function (){var G__29724 = "results";
return goog.dom.getElement(G__29724);
})();
var c__18230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18230__auto__,clicks,results_view){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__,clicks,results_view){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (8))){
var inst_29734 = (state_29746[(2)]);
var inst_29735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29734,(0),null);
var inst_29736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29734,(1),null);
var inst_29737 = async_tut1.core.render_query(inst_29736);
var inst_29738 = results_view.innerHTML = inst_29737;
var state_29746__$1 = (function (){var statearr_29748 = state_29746;
(statearr_29748[(7)] = inst_29738);

(statearr_29748[(8)] = inst_29735);

return statearr_29748;
})();
var statearr_29749_29763 = state_29746__$1;
(statearr_29749_29763[(2)] = null);

(statearr_29749_29763[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
if((state_val_29747 === (7))){
var inst_29728 = (state_29746[(2)]);
var inst_29730 = async_tut1.core.user_query();
var inst_29731 = async_tut1.core.query_url(inst_29730);
var inst_29732 = async_tut1.core.jsonp(inst_29731);
var state_29746__$1 = (function (){var statearr_29750 = state_29746;
(statearr_29750[(9)] = inst_29728);

return statearr_29750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29746__$1,(8),inst_29732);
} else {
if((state_val_29747 === (6))){
var inst_29742 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29751_29764 = state_29746__$1;
(statearr_29751_29764[(2)] = inst_29742);

(statearr_29751_29764[(1)] = (3));


return cljs.core.constant$keyword$59;
} else {
if((state_val_29747 === (5))){
var state_29746__$1 = state_29746;
var statearr_29752_29765 = state_29746__$1;
(statearr_29752_29765[(2)] = null);

(statearr_29752_29765[(1)] = (6));


return cljs.core.constant$keyword$59;
} else {
if((state_val_29747 === (4))){
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29746__$1,(7),clicks);
} else {
if((state_val_29747 === (3))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (2))){
var state_29746__$1 = state_29746;
var statearr_29753_29766 = state_29746__$1;
(statearr_29753_29766[(1)] = (4));



return cljs.core.constant$keyword$59;
} else {
if((state_val_29747 === (1))){
var state_29746__$1 = state_29746;
var statearr_29755_29767 = state_29746__$1;
(statearr_29755_29767[(2)] = null);

(statearr_29755_29767[(1)] = (2));


return cljs.core.constant$keyword$59;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18230__auto__,clicks,results_view))
;
return ((function (switch__18215__auto__,c__18230__auto__,clicks,results_view){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = state_machine__18216__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var state_machine__18216__auto____1 = (function (state_29746){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__(state_29746);
if(cljs.core.keyword_identical_QMARK_(result__18218__auto__,cljs.core.constant$keyword$59)){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__18219__auto__ = e29760;
var statearr_29761_29768 = state_29746;
(statearr_29761_29768[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29746);

return cljs.core.constant$keyword$59;
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18217__auto__,cljs.core.constant$keyword$59)){
var G__29769 = state_29746;
state_29746 = G__29769;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__,clicks,results_view))
})();
var state__18232__auto__ = (function (){var statearr_29762 = (function (){return (f__18231__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18231__auto__.cljs$core$IFn$_invoke$arity$0() : f__18231__auto__.call(null));
})();
(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18232__auto__);
});})(c__18230__auto__,clicks,results_view))
);

return c__18230__auto__;
});
async_tut1.core.init();
