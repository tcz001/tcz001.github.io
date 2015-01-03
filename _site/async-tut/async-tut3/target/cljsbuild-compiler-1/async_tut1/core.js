// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.date');
goog.require('goog.events');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_();
async_tut1.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__38418_38421 = el;
var G__38419_38422 = type;
var G__38420_38423 = ((function (G__38418_38421,G__38419_38422,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__38418_38421,G__38419_38422,out))
;
goog.events.listen(G__38418_38421,G__38419_38422,G__38420_38423);

return out;
});
async_tut1.core.user_comment = (function user_comment(){
return (function (){var G__38425 = "comment";
return goog.dom.getElement(G__38425);
})().value;
});
async_tut1.core.render_list = (function render_list(results){
return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__4394__auto__ = (function iter__38432(s__38433){
return (new cljs.core.LazySeq(null,(function (){
var s__38433__$1 = s__38433;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__38433__$1);
if(temp__4126__auto__){
var s__38433__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38433__$2)){
var c__4392__auto__ = cljs.core.chunk_first(s__38433__$2);
var size__4393__auto__ = cljs.core.count(c__4392__auto__);
var b__38435 = cljs.core.chunk_buffer(size__4393__auto__);
if((function (){var i__38434 = (0);
while(true){
if((i__38434 < size__4393__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4392__auto__,i__38434);
cljs.core.chunk_append(b__38435,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));

var G__38438 = (i__38434 + (1));
i__38434 = G__38438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38435),iter__38432(cljs.core.chunk_rest(s__38433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38435),null);
}
} else {
var result = cljs.core.first(s__38433__$2);
return cljs.core.cons([cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__38432(cljs.core.rest(s__38433__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__(cljs.core.reverse(results));
})())),cljs.core.str("</ul>")].join('');
});
/**
* Returns vector of (up to) n items from the end of vector v
*/
async_tut1.core.peekn = (function peekn(v,n){
if((cljs.core.count(v) > n)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(cljs.core.count(v) - n));
} else {
return v;
}
});
async_tut1.core.init = (function init(){
var clicks = async_tut1.core.listen((function (){var G__38577 = "submit";
return goog.dom.getElement(G__38577);
})(),"click");
var results_view = (function (){var G__38578 = "results";
return goog.dom.getElement(G__38578);
})();
var comments = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__5808__auto___38715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto___38715,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38715,clicks,results_view,comments){
return (function (state_38593){
var state_val_38594 = (state_38593[(1)]);
if((state_val_38594 === (8))){
var inst_38585 = (state_38593[(2)]);
var state_38593__$1 = (function (){var statearr_38595 = state_38593;
(statearr_38595[(7)] = inst_38585);

return statearr_38595;
})();
var statearr_38596_38716 = state_38593__$1;
(statearr_38596_38716[(2)] = null);

(statearr_38596_38716[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38594 === (7))){
var inst_38583 = (state_38593[(2)]);
var state_38593__$1 = (function (){var statearr_38597 = state_38593;
(statearr_38597[(8)] = inst_38583);

return statearr_38597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38593__$1,(8),comments,"NPC1 : =\uFFE3\u03C9\uFFE3=");
} else {
if((state_val_38594 === (6))){
var inst_38589 = (state_38593[(2)]);
var state_38593__$1 = state_38593;
var statearr_38598_38717 = state_38593__$1;
(statearr_38598_38717[(2)] = inst_38589);

(statearr_38598_38717[(1)] = (3));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38594 === (5))){
var state_38593__$1 = state_38593;
var statearr_38599_38718 = state_38593__$1;
(statearr_38599_38718[(2)] = null);

(statearr_38599_38718[(1)] = (6));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38594 === (4))){
var inst_38581 = cljs.core.async.timeout((250));
var state_38593__$1 = state_38593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38593__$1,(7),inst_38581);
} else {
if((state_val_38594 === (3))){
var inst_38591 = (state_38593[(2)]);
var state_38593__$1 = state_38593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38593__$1,inst_38591);
} else {
if((state_val_38594 === (2))){
var state_38593__$1 = state_38593;
var statearr_38600_38719 = state_38593__$1;
(statearr_38600_38719[(1)] = (4));



return cljs.core.constant$keyword$45;
} else {
if((state_val_38594 === (1))){
var state_38593__$1 = state_38593;
var statearr_38602_38720 = state_38593__$1;
(statearr_38602_38720[(2)] = null);

(statearr_38602_38720[(1)] = (2));


return cljs.core.constant$keyword$45;
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
});})(c__5808__auto___38715,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38715,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38606 = [null,null,null,null,null,null,null,null,null];
(statearr_38606[(0)] = state_machine__5794__auto__);

(statearr_38606[(1)] = (1));

return statearr_38606;
});
var state_machine__5794__auto____1 = (function (state_38593){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_38593);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$45)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38607){if((e38607 instanceof Object)){
var ex__5797__auto__ = e38607;
var statearr_38608_38721 = state_38593;
(statearr_38608_38721[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38593);

return cljs.core.constant$keyword$45;
} else {
throw e38607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$45)){
var G__38722 = state_38593;
state_38593 = G__38722;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38593){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38715,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38609 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_38609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38715);

return statearr_38609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto___38715,clicks,results_view,comments))
);


var c__5808__auto___38723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto___38723,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38723,clicks,results_view,comments){
return (function (state_38624){
var state_val_38625 = (state_38624[(1)]);
if((state_val_38625 === (8))){
var inst_38616 = (state_38624[(2)]);
var state_38624__$1 = (function (){var statearr_38626 = state_38624;
(statearr_38626[(7)] = inst_38616);

return statearr_38626;
})();
var statearr_38627_38724 = state_38624__$1;
(statearr_38627_38724[(2)] = null);

(statearr_38627_38724[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38625 === (7))){
var inst_38614 = (state_38624[(2)]);
var state_38624__$1 = (function (){var statearr_38628 = state_38624;
(statearr_38628[(8)] = inst_38614);

return statearr_38628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38624__$1,(8),comments,"NPC2 : \u30FE(\u309C\u0434\u309C\uFF1B)");
} else {
if((state_val_38625 === (6))){
var inst_38620 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
var statearr_38629_38725 = state_38624__$1;
(statearr_38629_38725[(2)] = inst_38620);

(statearr_38629_38725[(1)] = (3));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38625 === (5))){
var state_38624__$1 = state_38624;
var statearr_38630_38726 = state_38624__$1;
(statearr_38630_38726[(2)] = null);

(statearr_38630_38726[(1)] = (6));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38625 === (4))){
var inst_38612 = cljs.core.async.timeout((1000));
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38624__$1,(7),inst_38612);
} else {
if((state_val_38625 === (3))){
var inst_38622 = (state_38624[(2)]);
var state_38624__$1 = state_38624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38624__$1,inst_38622);
} else {
if((state_val_38625 === (2))){
var state_38624__$1 = state_38624;
var statearr_38631_38727 = state_38624__$1;
(statearr_38631_38727[(1)] = (4));



return cljs.core.constant$keyword$45;
} else {
if((state_val_38625 === (1))){
var state_38624__$1 = state_38624;
var statearr_38633_38728 = state_38624__$1;
(statearr_38633_38728[(2)] = null);

(statearr_38633_38728[(1)] = (2));


return cljs.core.constant$keyword$45;
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
});})(c__5808__auto___38723,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38723,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38637 = [null,null,null,null,null,null,null,null,null];
(statearr_38637[(0)] = state_machine__5794__auto__);

(statearr_38637[(1)] = (1));

return statearr_38637;
});
var state_machine__5794__auto____1 = (function (state_38624){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_38624);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$45)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38638){if((e38638 instanceof Object)){
var ex__5797__auto__ = e38638;
var statearr_38639_38729 = state_38624;
(statearr_38639_38729[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38624);

return cljs.core.constant$keyword$45;
} else {
throw e38638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$45)){
var G__38730 = state_38624;
state_38624 = G__38730;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38624){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38723,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38640 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_38640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38723);

return statearr_38640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto___38723,clicks,results_view,comments))
);


var c__5808__auto___38731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto___38731,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38731,clicks,results_view,comments){
return (function (state_38663){
var state_val_38664 = (state_38663[(1)]);
if((state_val_38664 === (7))){
var inst_38644 = (state_38663[(2)]);
var inst_38653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38654 = (function (){var c__5808__auto____$1 = inst_38653;
return ((function (c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments){
return (function (state_38651){
var state_val_38652 = (state_38651[(1)]);
if((state_val_38652 === (2))){
var inst_38649 = (state_38651[(2)]);
var state_38651__$1 = state_38651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38651__$1,inst_38649);
} else {
if((state_val_38652 === (1))){
var inst_38645 = async_tut1.core.user_comment();
var inst_38646 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["putting into comments: ",inst_38645], 0));
var inst_38647 = [cljs.core.str("USER : "),cljs.core.str(inst_38645)].join('');
var state_38651__$1 = (function (){var statearr_38665 = state_38651;
(statearr_38665[(7)] = inst_38646);

return statearr_38665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38651__$1,(2),comments,inst_38647);
} else {
return null;
}
}
});})(c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38669 = [null,null,null,null,null,null,null,null];
(statearr_38669[(0)] = state_machine__5794__auto__);

(statearr_38669[(1)] = (1));

return statearr_38669;
});
var state_machine__5794__auto____1 = (function (state_38651){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_38651);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$45)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38670){if((e38670 instanceof Object)){
var ex__5797__auto__ = e38670;
var statearr_38671_38732 = state_38651;
(statearr_38671_38732[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38651);

return cljs.core.constant$keyword$45;
} else {
throw e38670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$45)){
var G__38733 = state_38651;
state_38651 = G__38733;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38651){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38672 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_38672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto____$1);

return statearr_38672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});
;})(c__5808__auto____$1,inst_38644,inst_38653,state_val_38664,c__5808__auto___38731,clicks,results_view,comments))
})();
var inst_38655 = cljs.core.async.impl.dispatch.run(inst_38654);
var state_38663__$1 = (function (){var statearr_38673 = state_38663;
(statearr_38673[(7)] = inst_38644);

(statearr_38673[(8)] = inst_38655);

return statearr_38673;
})();
var statearr_38674_38734 = state_38663__$1;
(statearr_38674_38734[(2)] = null);

(statearr_38674_38734[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38664 === (6))){
var inst_38659 = (state_38663[(2)]);
var state_38663__$1 = state_38663;
var statearr_38675_38735 = state_38663__$1;
(statearr_38675_38735[(2)] = inst_38659);

(statearr_38675_38735[(1)] = (3));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38664 === (5))){
var state_38663__$1 = state_38663;
var statearr_38676_38736 = state_38663__$1;
(statearr_38676_38736[(2)] = null);

(statearr_38676_38736[(1)] = (6));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38664 === (4))){
var state_38663__$1 = state_38663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38663__$1,(7),clicks);
} else {
if((state_val_38664 === (3))){
var inst_38661 = (state_38663[(2)]);
var state_38663__$1 = state_38663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38663__$1,inst_38661);
} else {
if((state_val_38664 === (2))){
var state_38663__$1 = state_38663;
var statearr_38677_38737 = state_38663__$1;
(statearr_38677_38737[(1)] = (4));



return cljs.core.constant$keyword$45;
} else {
if((state_val_38664 === (1))){
var state_38663__$1 = state_38663;
var statearr_38679_38738 = state_38663__$1;
(statearr_38679_38738[(2)] = null);

(statearr_38679_38738[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
return null;
}
}
}
}
}
}
}
});})(c__5808__auto___38731,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38731,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38683 = [null,null,null,null,null,null,null,null,null];
(statearr_38683[(0)] = state_machine__5794__auto__);

(statearr_38683[(1)] = (1));

return statearr_38683;
});
var state_machine__5794__auto____1 = (function (state_38663){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_38663);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$45)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38684){if((e38684 instanceof Object)){
var ex__5797__auto__ = e38684;
var statearr_38685_38739 = state_38663;
(statearr_38685_38739[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38663);

return cljs.core.constant$keyword$45;
} else {
throw e38684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$45)){
var G__38740 = state_38663;
state_38663 = G__38740;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38663){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38731,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38686 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_38686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38731);

return statearr_38686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto___38731,clicks,results_view,comments))
);


var c__5808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__5808__auto__,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto__,clicks,results_view,comments){
return (function (state_38702){
var state_val_38703 = (state_38702[(1)]);
if((state_val_38703 === (4))){
var inst_38688 = (state_38702[(7)]);
var inst_38691 = (state_38702[(2)]);
var inst_38692 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["taking from comments: ",inst_38691], 0));
var inst_38693 = async_tut1.core.render_list(inst_38688);
var inst_38694 = results_view.innerHTML = inst_38693;
var inst_38695 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_38688], 0));
var inst_38696 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_38688,inst_38691);
var inst_38697 = async_tut1.core.peekn(inst_38696,(10));
var inst_38688__$1 = inst_38697;
var state_38702__$1 = (function (){var statearr_38704 = state_38702;
(statearr_38704[(8)] = inst_38692);

(statearr_38704[(9)] = inst_38694);

(statearr_38704[(10)] = inst_38695);

(statearr_38704[(7)] = inst_38688__$1);

return statearr_38704;
})();
var statearr_38705_38741 = state_38702__$1;
(statearr_38705_38741[(2)] = null);

(statearr_38705_38741[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
if((state_val_38703 === (3))){
var inst_38700 = (state_38702[(2)]);
var state_38702__$1 = state_38702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38702__$1,inst_38700);
} else {
if((state_val_38703 === (2))){
var state_38702__$1 = state_38702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38702__$1,(4),comments);
} else {
if((state_val_38703 === (1))){
var inst_38687 = cljs.core.PersistentVector.EMPTY;
var inst_38688 = inst_38687;
var state_38702__$1 = (function (){var statearr_38706 = state_38702;
(statearr_38706[(7)] = inst_38688);

return statearr_38706;
})();
var statearr_38707_38742 = state_38702__$1;
(statearr_38707_38742[(2)] = null);

(statearr_38707_38742[(1)] = (2));


return cljs.core.constant$keyword$45;
} else {
return null;
}
}
}
}
});})(c__5808__auto__,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto__,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38711[(0)] = state_machine__5794__auto__);

(statearr_38711[(1)] = (1));

return statearr_38711;
});
var state_machine__5794__auto____1 = (function (state_38702){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__(state_38702);
if(cljs.core.keyword_identical_QMARK_(result__5796__auto__,cljs.core.constant$keyword$45)){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38712){if((e38712 instanceof Object)){
var ex__5797__auto__ = e38712;
var statearr_38713_38743 = state_38702;
(statearr_38713_38743[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38702);

return cljs.core.constant$keyword$45;
} else {
throw e38712;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__5795__auto__,cljs.core.constant$keyword$45)){
var G__38744 = state_38702;
state_38702 = G__38744;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38702){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto__,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38714 = (function (){return (f__5809__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5809__auto__.cljs$core$IFn$_invoke$arity$0() : f__5809__auto__.call(null));
})();
(statearr_38714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto__);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5810__auto__);
});})(c__5808__auto__,clicks,results_view,comments))
);

return c__5808__auto__;
});
async_tut1.core.init();
