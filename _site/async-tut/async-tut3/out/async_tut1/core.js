// Compiled by ClojureScript 0.0-2511
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.date');
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
async_tut1.core.user_comment = (function user_comment(){
return goog.dom.getElement("comment").value;
});
async_tut1.core.render_list = (function render_list(results){
return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__4394__auto__ = (function iter__38108(s__38109){
return (new cljs.core.LazySeq(null,(function (){
var s__38109__$1 = s__38109;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38109__$1);
if(temp__4126__auto__){
var s__38109__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38109__$2)){
var c__4392__auto__ = cljs.core.chunk_first.call(null,s__38109__$2);
var size__4393__auto__ = cljs.core.count.call(null,c__4392__auto__);
var b__38111 = cljs.core.chunk_buffer.call(null,size__4393__auto__);
if((function (){var i__38110 = (0);
while(true){
if((i__38110 < size__4393__auto__)){
var result = cljs.core._nth.call(null,c__4392__auto__,i__38110);
cljs.core.chunk_append.call(null,b__38111,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));

var G__38112 = (i__38110 + (1));
i__38110 = G__38112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),iter__38108.call(null,cljs.core.chunk_rest.call(null,s__38109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),null);
}
} else {
var result = cljs.core.first.call(null,s__38109__$2);
return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__38108.call(null,cljs.core.rest.call(null,s__38109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4394__auto__.call(null,cljs.core.reverse.call(null,results));
})())),cljs.core.str("</ul>")].join('');
});
/**
* Returns vector of (up to) n items from the end of vector v
*/
async_tut1.core.peekn = (function peekn(v,n){
if((cljs.core.count.call(null,v) > n)){
return cljs.core.subvec.call(null,v,(cljs.core.count.call(null,v) - n));
} else {
return v;
}
});
async_tut1.core.init = (function init(){
var clicks = async_tut1.core.listen.call(null,goog.dom.getElement("submit"),"click");
var results_view = goog.dom.getElement("results");
var comments = cljs.core.async.chan.call(null);
var c__5808__auto___38385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto___38385,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38385,clicks,results_view,comments){
return (function (state_38263){
var state_val_38264 = (state_38263[(1)]);
if((state_val_38264 === (8))){
var inst_38255 = (state_38263[(2)]);
var state_38263__$1 = (function (){var statearr_38265 = state_38263;
(statearr_38265[(7)] = inst_38255);

return statearr_38265;
})();
var statearr_38266_38386 = state_38263__$1;
(statearr_38266_38386[(2)] = null);

(statearr_38266_38386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38264 === (7))){
var inst_38253 = (state_38263[(2)]);
var state_38263__$1 = (function (){var statearr_38267 = state_38263;
(statearr_38267[(8)] = inst_38253);

return statearr_38267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38263__$1,(8),comments,"NPC1 : =\uFFE3\u03C9\uFFE3=");
} else {
if((state_val_38264 === (6))){
var inst_38259 = (state_38263[(2)]);
var state_38263__$1 = state_38263;
var statearr_38268_38387 = state_38263__$1;
(statearr_38268_38387[(2)] = inst_38259);

(statearr_38268_38387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38264 === (5))){
var state_38263__$1 = state_38263;
var statearr_38269_38388 = state_38263__$1;
(statearr_38269_38388[(2)] = null);

(statearr_38269_38388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38264 === (4))){
var inst_38251 = cljs.core.async.timeout.call(null,(250));
var state_38263__$1 = state_38263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38263__$1,(7),inst_38251);
} else {
if((state_val_38264 === (3))){
var inst_38261 = (state_38263[(2)]);
var state_38263__$1 = state_38263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38263__$1,inst_38261);
} else {
if((state_val_38264 === (2))){
var state_38263__$1 = state_38263;
var statearr_38270_38389 = state_38263__$1;
(statearr_38270_38389[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38264 === (1))){
var state_38263__$1 = state_38263;
var statearr_38272_38390 = state_38263__$1;
(statearr_38272_38390[(2)] = null);

(statearr_38272_38390[(1)] = (2));


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
});})(c__5808__auto___38385,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38385,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38276 = [null,null,null,null,null,null,null,null,null];
(statearr_38276[(0)] = state_machine__5794__auto__);

(statearr_38276[(1)] = (1));

return statearr_38276;
});
var state_machine__5794__auto____1 = (function (state_38263){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_38263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38277){if((e38277 instanceof Object)){
var ex__5797__auto__ = e38277;
var statearr_38278_38391 = state_38263;
(statearr_38278_38391[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38392 = state_38263;
state_38263 = G__38392;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38263){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38385,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38279 = f__5809__auto__.call(null);
(statearr_38279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38385);

return statearr_38279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto___38385,clicks,results_view,comments))
);


var c__5808__auto___38393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto___38393,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38393,clicks,results_view,comments){
return (function (state_38294){
var state_val_38295 = (state_38294[(1)]);
if((state_val_38295 === (8))){
var inst_38286 = (state_38294[(2)]);
var state_38294__$1 = (function (){var statearr_38296 = state_38294;
(statearr_38296[(7)] = inst_38286);

return statearr_38296;
})();
var statearr_38297_38394 = state_38294__$1;
(statearr_38297_38394[(2)] = null);

(statearr_38297_38394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38295 === (7))){
var inst_38284 = (state_38294[(2)]);
var state_38294__$1 = (function (){var statearr_38298 = state_38294;
(statearr_38298[(8)] = inst_38284);

return statearr_38298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38294__$1,(8),comments,"NPC2 : \u30FE(\u309C\u0434\u309C\uFF1B)");
} else {
if((state_val_38295 === (6))){
var inst_38290 = (state_38294[(2)]);
var state_38294__$1 = state_38294;
var statearr_38299_38395 = state_38294__$1;
(statearr_38299_38395[(2)] = inst_38290);

(statearr_38299_38395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38295 === (5))){
var state_38294__$1 = state_38294;
var statearr_38300_38396 = state_38294__$1;
(statearr_38300_38396[(2)] = null);

(statearr_38300_38396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38295 === (4))){
var inst_38282 = cljs.core.async.timeout.call(null,(1000));
var state_38294__$1 = state_38294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38294__$1,(7),inst_38282);
} else {
if((state_val_38295 === (3))){
var inst_38292 = (state_38294[(2)]);
var state_38294__$1 = state_38294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38294__$1,inst_38292);
} else {
if((state_val_38295 === (2))){
var state_38294__$1 = state_38294;
var statearr_38301_38397 = state_38294__$1;
(statearr_38301_38397[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38295 === (1))){
var state_38294__$1 = state_38294;
var statearr_38303_38398 = state_38294__$1;
(statearr_38303_38398[(2)] = null);

(statearr_38303_38398[(1)] = (2));


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
});})(c__5808__auto___38393,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38393,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38307 = [null,null,null,null,null,null,null,null,null];
(statearr_38307[(0)] = state_machine__5794__auto__);

(statearr_38307[(1)] = (1));

return statearr_38307;
});
var state_machine__5794__auto____1 = (function (state_38294){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_38294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38308){if((e38308 instanceof Object)){
var ex__5797__auto__ = e38308;
var statearr_38309_38399 = state_38294;
(statearr_38309_38399[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38400 = state_38294;
state_38294 = G__38400;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38294){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38393,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38310 = f__5809__auto__.call(null);
(statearr_38310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38393);

return statearr_38310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto___38393,clicks,results_view,comments))
);


var c__5808__auto___38401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto___38401,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto___38401,clicks,results_view,comments){
return (function (state_38333){
var state_val_38334 = (state_38333[(1)]);
if((state_val_38334 === (7))){
var inst_38314 = (state_38333[(2)]);
var inst_38323 = cljs.core.async.chan.call(null,(1));
var inst_38324 = (function (){var c__5808__auto____$1 = inst_38323;
return ((function (c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments){
return (function (state_38321){
var state_val_38322 = (state_38321[(1)]);
if((state_val_38322 === (2))){
var inst_38319 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38321__$1,inst_38319);
} else {
if((state_val_38322 === (1))){
var inst_38315 = async_tut1.core.user_comment.call(null);
var inst_38316 = cljs.core.println.call(null,"putting into comments: ",inst_38315);
var inst_38317 = [cljs.core.str("USER : "),cljs.core.str(inst_38315)].join('');
var state_38321__$1 = (function (){var statearr_38335 = state_38321;
(statearr_38335[(7)] = inst_38316);

return statearr_38335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38321__$1,(2),comments,inst_38317);
} else {
return null;
}
}
});})(c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38339 = [null,null,null,null,null,null,null,null];
(statearr_38339[(0)] = state_machine__5794__auto__);

(statearr_38339[(1)] = (1));

return statearr_38339;
});
var state_machine__5794__auto____1 = (function (state_38321){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_38321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38340){if((e38340 instanceof Object)){
var ex__5797__auto__ = e38340;
var statearr_38341_38402 = state_38321;
(statearr_38341_38402[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38403 = state_38321;
state_38321 = G__38403;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38321){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38342 = f__5809__auto__.call(null);
(statearr_38342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto____$1);

return statearr_38342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});
;})(c__5808__auto____$1,inst_38314,inst_38323,state_val_38334,c__5808__auto___38401,clicks,results_view,comments))
})();
var inst_38325 = cljs.core.async.impl.dispatch.run.call(null,inst_38324);
var state_38333__$1 = (function (){var statearr_38343 = state_38333;
(statearr_38343[(7)] = inst_38314);

(statearr_38343[(8)] = inst_38325);

return statearr_38343;
})();
var statearr_38344_38404 = state_38333__$1;
(statearr_38344_38404[(2)] = null);

(statearr_38344_38404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38334 === (6))){
var inst_38329 = (state_38333[(2)]);
var state_38333__$1 = state_38333;
var statearr_38345_38405 = state_38333__$1;
(statearr_38345_38405[(2)] = inst_38329);

(statearr_38345_38405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38334 === (5))){
var state_38333__$1 = state_38333;
var statearr_38346_38406 = state_38333__$1;
(statearr_38346_38406[(2)] = null);

(statearr_38346_38406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38334 === (4))){
var state_38333__$1 = state_38333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38333__$1,(7),clicks);
} else {
if((state_val_38334 === (3))){
var inst_38331 = (state_38333[(2)]);
var state_38333__$1 = state_38333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38333__$1,inst_38331);
} else {
if((state_val_38334 === (2))){
var state_38333__$1 = state_38333;
var statearr_38347_38407 = state_38333__$1;
(statearr_38347_38407[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38334 === (1))){
var state_38333__$1 = state_38333;
var statearr_38349_38408 = state_38333__$1;
(statearr_38349_38408[(2)] = null);

(statearr_38349_38408[(1)] = (2));


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
});})(c__5808__auto___38401,clicks,results_view,comments))
;
return ((function (switch__5793__auto__,c__5808__auto___38401,clicks,results_view,comments){
return (function() {
var state_machine__5794__auto__ = null;
var state_machine__5794__auto____0 = (function (){
var statearr_38353 = [null,null,null,null,null,null,null,null,null];
(statearr_38353[(0)] = state_machine__5794__auto__);

(statearr_38353[(1)] = (1));

return statearr_38353;
});
var state_machine__5794__auto____1 = (function (state_38333){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_38333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38354){if((e38354 instanceof Object)){
var ex__5797__auto__ = e38354;
var statearr_38355_38409 = state_38333;
(statearr_38355_38409[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38410 = state_38333;
state_38333 = G__38410;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38333){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto___38401,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38356 = f__5809__auto__.call(null);
(statearr_38356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto___38401);

return statearr_38356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto___38401,clicks,results_view,comments))
);


var c__5808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5808__auto__,clicks,results_view,comments){
return (function (){
var f__5809__auto__ = (function (){var switch__5793__auto__ = ((function (c__5808__auto__,clicks,results_view,comments){
return (function (state_38372){
var state_val_38373 = (state_38372[(1)]);
if((state_val_38373 === (4))){
var inst_38358 = (state_38372[(7)]);
var inst_38361 = (state_38372[(2)]);
var inst_38362 = cljs.core.println.call(null,"taking from comments: ",inst_38361);
var inst_38363 = async_tut1.core.render_list.call(null,inst_38358);
var inst_38364 = results_view.innerHTML = inst_38363;
var inst_38365 = cljs.core.println.call(null,inst_38358);
var inst_38366 = cljs.core.conj.call(null,inst_38358,inst_38361);
var inst_38367 = async_tut1.core.peekn.call(null,inst_38366,(10));
var inst_38358__$1 = inst_38367;
var state_38372__$1 = (function (){var statearr_38374 = state_38372;
(statearr_38374[(8)] = inst_38365);

(statearr_38374[(7)] = inst_38358__$1);

(statearr_38374[(9)] = inst_38364);

(statearr_38374[(10)] = inst_38362);

return statearr_38374;
})();
var statearr_38375_38411 = state_38372__$1;
(statearr_38375_38411[(2)] = null);

(statearr_38375_38411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38373 === (3))){
var inst_38370 = (state_38372[(2)]);
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38372__$1,inst_38370);
} else {
if((state_val_38373 === (2))){
var state_38372__$1 = state_38372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38372__$1,(4),comments);
} else {
if((state_val_38373 === (1))){
var inst_38357 = cljs.core.PersistentVector.EMPTY;
var inst_38358 = inst_38357;
var state_38372__$1 = (function (){var statearr_38376 = state_38372;
(statearr_38376[(7)] = inst_38358);

return statearr_38376;
})();
var statearr_38377_38412 = state_38372__$1;
(statearr_38377_38412[(2)] = null);

(statearr_38377_38412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var statearr_38381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38381[(0)] = state_machine__5794__auto__);

(statearr_38381[(1)] = (1));

return statearr_38381;
});
var state_machine__5794__auto____1 = (function (state_38372){
while(true){
var ret_value__5795__auto__ = (function (){try{while(true){
var result__5796__auto__ = switch__5793__auto__.call(null,state_38372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5796__auto__;
}
break;
}
}catch (e38382){if((e38382 instanceof Object)){
var ex__5797__auto__ = e38382;
var statearr_38383_38413 = state_38372;
(statearr_38383_38413[(5)] = ex__5797__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38414 = state_38372;
state_38372 = G__38414;
continue;
} else {
return ret_value__5795__auto__;
}
break;
}
});
state_machine__5794__auto__ = function(state_38372){
switch(arguments.length){
case 0:
return state_machine__5794__auto____0.call(this);
case 1:
return state_machine__5794__auto____1.call(this,state_38372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5794__auto____0;
state_machine__5794__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5794__auto____1;
return state_machine__5794__auto__;
})()
;})(switch__5793__auto__,c__5808__auto__,clicks,results_view,comments))
})();
var state__5810__auto__ = (function (){var statearr_38384 = f__5809__auto__.call(null);
(statearr_38384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5808__auto__);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5810__auto__);
});})(c__5808__auto__,clicks,results_view,comments))
);

return c__5808__auto__;
});
async_tut1.core.init.call(null);

//# sourceMappingURL=core.js.map