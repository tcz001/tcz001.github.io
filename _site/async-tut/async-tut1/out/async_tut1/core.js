// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
async_tut1.core.listen = (function listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
async_tut1.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
async_tut1.core.jsonp = (function jsonp(uri){
var out = cljs.core.async.chan.call(null);
var req = (new goog.net.Jsonp((new goog.Uri(uri))));
req.send(null,((function (out,req){
return (function (res){
return cljs.core.async.put_BANG_.call(null,out,res);
});})(out,req))
);

return out;
});
async_tut1.core.query_url = (function query_url(q){
return [cljs.core.str(async_tut1.core.wiki_search_url),cljs.core.str(q)].join('');
});
var c__18230__auto___29546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto___29546){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto___29546){
return (function (state_29537){
var state_val_29538 = (state_29537[(1)]);
if((state_val_29538 === (2))){
var inst_29534 = (state_29537[(2)]);
var inst_29535 = console.log(inst_29534);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29537__$1,inst_29535);
} else {
if((state_val_29538 === (1))){
var inst_29531 = async_tut1.core.query_url.call(null,"cats");
var inst_29532 = async_tut1.core.jsonp.call(null,inst_29531);
var state_29537__$1 = state_29537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29537__$1,(2),inst_29532);
} else {
return null;
}
}
});})(c__18230__auto___29546))
;
return ((function (switch__18215__auto__,c__18230__auto___29546){
return (function() {
var state_machine__18216__auto__ = null;
var state_machine__18216__auto____0 = (function (){
var statearr_29542 = [null,null,null,null,null,null,null];
(statearr_29542[(0)] = state_machine__18216__auto__);

(statearr_29542[(1)] = (1));

return statearr_29542;
});
var state_machine__18216__auto____1 = (function (state_29537){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_29537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e29543){if((e29543 instanceof Object)){
var ex__18219__auto__ = e29543;
var statearr_29544_29547 = state_29537;
(statearr_29544_29547[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29548 = state_29537;
state_29537 = G__29548;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_29537){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_29537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto___29546))
})();
var state__18232__auto__ = (function (){var statearr_29545 = f__18231__auto__.call(null);
(statearr_29545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto___29546);

return statearr_29545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto___29546))
);

async_tut1.core.user_query = (function user_query(){
return goog.dom.getElement("query").value;
});
async_tut1.core.render_query = (function render_query(results){
return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4394__auto__ = (function iter__29553(s__29554){
return (new cljs.core.LazySeq(null,(function (){
var s__29554__$1 = s__29554;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29554__$1);
if(temp__4126__auto__){
var s__29554__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29554__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__29554__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__29556 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__29555 = (0);
while(true){
if((i__29555 < size__4393__auto__)){
var result = cljs.core._nth.call(null,c__4392__auto__,i__29555);
cljs.core.chunk_append.call(null,b__29556,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));

var G__29557 = (i__29555 + (1));
i__29555 = G__29557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),iter__29553.call(null,cljs.core.chunk_rest.call(null,s__29554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),null);
}
} else {
var result = cljs.core.first.call(null,s__29554__$2);
return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__29553.call(null,cljs.core.rest.call(null,s__29554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,results);
})())),cljs.core.str("</ul>")].join('');
});
async_tut1.core.init = (function init(){
var clicks = async_tut1.core.listen.call(null,goog.dom.getElement("search"),"click");
var results_view = goog.dom.getElement("results");
var c__18230__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18230__auto__,clicks,results_view){
return (function (){
var f__18231__auto__ = (function (){var switch__18215__auto__ = ((function (c__18230__auto__,clicks,results_view){
return (function (state_29617){
var state_val_29618 = (state_29617[(1)]);
if((state_val_29618 === (8))){
var inst_29605 = (state_29617[(2)]);
var inst_29606 = cljs.core.nth.call(null,inst_29605,(0),null);
var inst_29607 = cljs.core.nth.call(null,inst_29605,(1),null);
var inst_29608 = async_tut1.core.render_query.call(null,inst_29607);
var inst_29609 = results_view.innerHTML = inst_29608;
var state_29617__$1 = (function (){var statearr_29619 = state_29617;
(statearr_29619[(7)] = inst_29609);

(statearr_29619[(8)] = inst_29606);

return statearr_29619;
})();
var statearr_29620_29634 = state_29617__$1;
(statearr_29620_29634[(2)] = null);

(statearr_29620_29634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (7))){
var inst_29599 = (state_29617[(2)]);
var inst_29601 = async_tut1.core.user_query.call(null);
var inst_29602 = async_tut1.core.query_url.call(null,inst_29601);
var inst_29603 = async_tut1.core.jsonp.call(null,inst_29602);
var state_29617__$1 = (function (){var statearr_29621 = state_29617;
(statearr_29621[(9)] = inst_29599);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(8),inst_29603);
} else {
if((state_val_29618 === (6))){
var inst_29613 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
var statearr_29622_29635 = state_29617__$1;
(statearr_29622_29635[(2)] = inst_29613);

(statearr_29622_29635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (5))){
var state_29617__$1 = state_29617;
var statearr_29623_29636 = state_29617__$1;
(statearr_29623_29636[(2)] = null);

(statearr_29623_29636[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (4))){
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29617__$1,(7),clicks);
} else {
if((state_val_29618 === (3))){
var inst_29615 = (state_29617[(2)]);
var state_29617__$1 = state_29617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29617__$1,inst_29615);
} else {
if((state_val_29618 === (2))){
var state_29617__$1 = state_29617;
var statearr_29624_29637 = state_29617__$1;
(statearr_29624_29637[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29618 === (1))){
var state_29617__$1 = state_29617;
var statearr_29626_29638 = state_29617__$1;
(statearr_29626_29638[(2)] = null);

(statearr_29626_29638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var statearr_29630 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29630[(0)] = state_machine__18216__auto__);

(statearr_29630[(1)] = (1));

return statearr_29630;
});
var state_machine__18216__auto____1 = (function (state_29617){
while(true){
var ret_value__18217__auto__ = (function (){try{while(true){
var result__18218__auto__ = switch__18215__auto__.call(null,state_29617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18218__auto__;
}
break;
}
}catch (e29631){if((e29631 instanceof Object)){
var ex__18219__auto__ = e29631;
var statearr_29632_29639 = state_29617;
(statearr_29632_29639[(5)] = ex__18219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29640 = state_29617;
state_29617 = G__29640;
continue;
} else {
return ret_value__18217__auto__;
}
break;
}
});
state_machine__18216__auto__ = function(state_29617){
switch(arguments.length){
case 0:
return state_machine__18216__auto____0.call(this);
case 1:
return state_machine__18216__auto____1.call(this,state_29617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18216__auto____0;
state_machine__18216__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18216__auto____1;
return state_machine__18216__auto__;
})()
;})(switch__18215__auto__,c__18230__auto__,clicks,results_view))
})();
var state__18232__auto__ = (function (){var statearr_29633 = f__18231__auto__.call(null);
(statearr_29633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18230__auto__);

return statearr_29633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18232__auto__);
});})(c__18230__auto__,clicks,results_view))
);

return c__18230__auto__;
});
async_tut1.core.init.call(null);

//# sourceMappingURL=core.js.map