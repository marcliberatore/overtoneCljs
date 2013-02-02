goog.provide('overtoneinterface.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('fetch.remotes');
goog.require('crate.core');
overtoneinterface.client.main.$body = jayq.core.$.call(null,"\uFDD0'body");
overtoneinterface.client.main.$piano = jayq.core.$.call(null,"\uFDD0'#piano");
overtoneinterface.client.main.$controls = jayq.core.$.call(null,"\uFDD0'#controls");
overtoneinterface.client.main.$notes = jayq.core.$.call(null,"\uFDD0'#notes");
overtoneinterface.client.main.$wobble = jayq.core.$.call(null,"\uFDD0'#wobble");
var group__3037__auto___3059 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
overtoneinterface.client.main.button = (function button(p__3056){
var map__3058 = p__3056;
var map__3058__$1 = ((cljs.core.seq_QMARK_.call(null,map__3058))?cljs.core.apply.call(null,cljs.core.hash_map,map__3058):map__3058);
var param = cljs.core._lookup.call(null,map__3058__$1,"\uFDD0'param",null);
var action = cljs.core._lookup.call(null,map__3058__$1,"\uFDD0'action",null);
var label = cljs.core._lookup.call(null,map__3058__$1,"\uFDD0'label",null);
var elem__3038__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a.button",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'data-action","\uFDD0'data-param"],{"\uFDD0'href":"#","\uFDD0'data-action":action,"\uFDD0'data-param":param}),label], true));
elem__3038__auto__.setAttribute("crateGroup",group__3037__auto___3059);
return elem__3038__auto__;
});
overtoneinterface.client.main.button.prototype._crateGroup = group__3037__auto___3059;
overtoneinterface.client.main.piano_notes = (function (){var iter__2540__auto__ = (function iter__3060(s__3061){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3061__$1 = s__3061;
while(true){
if(cljs.core.seq.call(null,s__3061__$1))
{var note = cljs.core.first.call(null,s__3061__$1);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str(note)].join(''),"\uFDD0'action":"play-note","\uFDD0'param":note}),iter__3060.call(null,cljs.core.rest.call(null,s__3061__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,40,60));
})();
overtoneinterface.client.main.dub_notes = (function (){var iter__2540__auto__ = (function iter__3062(s__3063){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3063__$1 = s__3063;
while(true){
if(cljs.core.seq.call(null,s__3063__$1))
{var note = cljs.core.first.call(null,s__3063__$1);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str(note)].join(''),"\uFDD0'action":"dub-note","\uFDD0'param":note}),iter__3062.call(null,cljs.core.rest.call(null,s__3063__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,40,80));
})();
overtoneinterface.client.main.dub_wobble = (function (){var iter__2540__auto__ = (function iter__3064(s__3065){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3065__$1 = s__3065;
while(true){
if(cljs.core.seq.call(null,s__3065__$1))
{var w = cljs.core.first.call(null,s__3065__$1);
return cljs.core.cons.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":[cljs.core.str("w"),cljs.core.str(w)].join(''),"\uFDD0'action":"dub-wobble","\uFDD0'param":w}),iter__3064.call(null,cljs.core.rest.call(null,s__3065__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2540__auto__.call(null,cljs.core.range.call(null,0,8));
})();
overtoneinterface.client.main.control_buttons = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"start","\uFDD0'action":"start-dub","\uFDD0'param":""}),cljs.core.ObjMap.fromObject(["\uFDD0'label","\uFDD0'action","\uFDD0'param"],{"\uFDD0'label":"stop","\uFDD0'action":"stop-dub","\uFDD0'param":""})], true);
overtoneinterface.client.main.populate = (function populate(container,buttons){
var G__3067 = cljs.core.seq.call(null,buttons);
while(true){
if(G__3067)
{var b = cljs.core.first.call(null,G__3067);
jayq.core.append.call(null,container,overtoneinterface.client.main.button.call(null,b));
{
var G__3068 = cljs.core.next.call(null,G__3067);
G__3067 = G__3068;
continue;
}
} else
{return null;
}
break;
}
});
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$piano,overtoneinterface.client.main.piano_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$controls,overtoneinterface.client.main.control_buttons);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$notes,overtoneinterface.client.main.dub_notes);
overtoneinterface.client.main.populate.call(null,overtoneinterface.client.main.$wobble,overtoneinterface.client.main.dub_wobble);
jayq.core.delegate.call(null,overtoneinterface.client.main.$body,overtoneinterface.client.main.button,"\uFDD0'click",(function (e){
e.preventDefault();
var me = this;
var $me = jayq.core.$.call(null,me);
var action = jayq.core.data.call(null,$me,"\uFDD0'action");
var param = jayq.core.data.call(null,$me,"\uFDD0'param");
var param__$1 = ((cljs.core._EQ_.call(null,param,""))?cljs.core.PersistentVector.EMPTY:cljs.core.PersistentVector.fromArray([param], true));
return fetch.remotes.remote_callback.call(null,action,param__$1,null);
}));
