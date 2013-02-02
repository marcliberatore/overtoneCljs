goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.provide('crate.binding.SubAtom');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"crate.binding/SubAtom");
});
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3784 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__3784)
{var vec__3785 = cljs.core.first.call(null,G__3784);
var key__$1 = cljs.core.nth.call(null,vec__3785,0,null);
var f = cljs.core.nth.call(null,vec__3785,1,null);
f.call(null,key__$1,this$,oldval,newval);
{
var G__3786 = cljs.core.next.call(null,G__3784);
G__3784 = G__3786;
continue;
}
} else
{return null;
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
crate.binding.subatom = (function subatom(atm,path){
var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:cljs.core.PersistentVector.fromArray([path], true));
var vec__3788 = ((cljs.core.instance_QMARK_.call(null,crate.binding.SubAtom,atm))?cljs.core.PersistentVector.fromArray([atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], true):cljs.core.PersistentVector.fromArray([atm,path__$1], true));
var atm__$1 = cljs.core.nth.call(null,vec__3788,0,null);
var path__$2 = cljs.core.nth.call(null,vec__3788,1,null);
var k = cljs.core.gensym.call(null,"subatom");
var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));
cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){
var latest = cljs.core.get_in.call(null,nv,path__$2);
var prev = cljs.core.get_in.call(null,ov,path__$2);
var latest_hash = cljs.core.hash.call(null,latest);
if((function (){var and__3822__auto__ = cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash);
if(and__3822__auto__)
{return cljs.core.not_EQ_.call(null,prev,latest);
} else
{return and__3822__auto__;
}
})())
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){
cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){
return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__3789__delegate = function (sa,f,x,y,z,more){
return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__3789 = function (sa,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3789__delegate.call(this, sa, f, x, y, z, more);
};
G__3789.cljs$lang$maxFixedArity = 5;
G__3789.cljs$lang$applyTo = (function (arglist__3790){
var sa = cljs.core.first(arglist__3790);
var f = cljs.core.first(cljs.core.next(arglist__3790));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3790)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3790))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3790)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3790)))));
return G__3789__delegate(sa, f, x, y, z, more);
});
G__3789.cljs$lang$arity$variadic = G__3789__delegate;
return G__3789;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$lang$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$lang$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$lang$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$lang$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$lang$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$lang$arity$variadic = sub_swap_BANG___6.cljs$lang$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){
cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = {};
crate.binding._compute = (function _compute(this$){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3822__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__2443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (crate.binding._compute[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (crate.binding._compute["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});
goog.provide('crate.binding.Computed');

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"crate.binding/Computed");
});
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){
var self__ = this;
var old = this$.value;
this$.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,old,this$.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3791 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__3791)
{var vec__3792 = cljs.core.first.call(null,G__3791);
var key__$1 = cljs.core.nth.call(null,vec__3792,0,null);
var f = cljs.core.nth.call(null,vec__3792,1,null);
f.call(null,key__$1,this$,oldval,newval);
{
var G__3793 = cljs.core.next.call(null,G__3791);
G__3791 = G__3793;
continue;
}
} else
{return null;
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){
var self__ = this;
if(cljs.core.truth_(f))
{return this$.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
crate.binding.computed = (function computed(atms,func){
var k = cljs.core.gensym.call(null,"computed");
var neue = (new crate.binding.Computed(atms,null,func,null,k));
crate.binding._compute.call(null,neue);
var G__3795_3796 = cljs.core.seq.call(null,atms);
while(true){
if(G__3795_3796)
{var atm_3797 = cljs.core.first.call(null,G__3795_3796);
cljs.core.add_watch.call(null,atm_3797,k,((function (G__3795_3796,atm_3797){
return (function (_,___$1,___$2,___$3){
return crate.binding._compute.call(null,neue);
});})(G__3795_3796,atm_3797))
);
{
var G__3798 = cljs.core.next.call(null,G__3795_3796);
G__3795_3796 = G__3798;
continue;
}
} else
{}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.z], true),(function (z){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,cljs.core.PersistentVector.fromArray([crate.binding.y], true),(function (y){
return cljs.core.filter.call(null,(function (p1__3799_SHARP_){
return (p1__3799_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){
return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = {};
crate.binding.bindable = {};
crate.binding._value = (function _value(this$){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3822__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__2443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (crate.binding._value[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (crate.binding._value["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){
if((function (){var and__3822__auto__ = this$;
if(and__3822__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3822__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__2443__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3824__auto__ = (crate.binding._on_change[goog.typeOf(x__2443__auto__)]);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{var or__3824__auto____$1 = (crate.binding._on_change["_"]);
if(or__3824__auto____$1)
{return or__3824__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});
goog.provide('crate.binding.atom_binding');

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"crate.binding/atom-binding");
});
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){
return func.call(null,crate.binding._value.call(null,this$));
}));
});
goog.provide('crate.binding.notifier');

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"crate.binding/notifier");
});
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3800 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__3800)
{var vec__3801 = cljs.core.first.call(null,G__3800);
var key = cljs.core.nth.call(null,vec__3801,0,null);
var f = cljs.core.nth.call(null,vec__3801,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__3802 = cljs.core.next.call(null,G__3800);
G__3800 = G__3802;
continue;
}
} else
{return null;
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
goog.provide('crate.binding.bound_collection');

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorPrSeq = (function (this__2383__auto__){
return cljs.core.list.call(null,"crate.binding/bound-collection");
});
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__2383__auto__,writer__2384__auto__,opt__2385__auto__){
return cljs.core._write.call(null,writer__2384__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){
var self__ = this;
return cljs.core.map.call(null,"\uFDD0'elem",cljs.core.vals.call(null,this$.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){
var self__ = this;
return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__3803){
var vec__3804 = p__3803;
var event = cljs.core.nth.call(null,vec__3804,0,null);
var el = cljs.core.nth.call(null,vec__3804,1,null);
var v = cljs.core.nth.call(null,vec__3804,2,null);
return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.opt = (function opt(bc,k){
return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){
var sa = crate.binding.subatom.call(null,bc.atm,path);
var elem = crate.binding.opt.call(null,bc,"\uFDD0'as").call(null,sa);
bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,cljs.core.ObjMap.fromObject(["\uFDD0'elem","\uFDD0'subatom"],{"\uFDD0'elem":elem,"\uFDD0'subatom":sa}));
return crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0'add",elem,cljs.core.deref.call(null,sa)], true));
});
crate.binding.bc_remove = (function bc_remove(bc,key){
var notif = bc.notif;
var prev = bc.stuff.call(null,key);
bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,cljs.core.PersistentVector.fromArray(["\uFDD0'remove",(new cljs.core.Keyword("\uFDD0'elem")).call(null,prev),null], true));
return crate.binding.sub_destroy_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'subatom")).call(null,prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){
if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if("\uFDD0'else")
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){
return cljs.core.concat.call(null,(function (){var or__3824__auto__ = crate.binding.opt.call(null,bc,"\uFDD0'path");
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;
if (goog.isDef(var_args)) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return __GT_path__delegate.call(this, bc, segs);
};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__3805){
var bc = cljs.core.first(arglist__3805);
var segs = cljs.core.rest(arglist__3805);
return __GT_path__delegate(bc, segs);
});
__GT_path.cljs$lang$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){
var prev = bc.stuff;
var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));
var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,"\uFDD0'keyfn"));
var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));
var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));
var G__3808_3810 = cljs.core.seq.call(null,added);
while(true){
if(G__3808_3810)
{var a_3811 = cljs.core.first.call(null,G__3808_3810);
crate.binding.bc_add.call(null,bc,a_3811,a_3811);
{
var G__3812 = cljs.core.next.call(null,G__3808_3810);
G__3808_3810 = G__3812;
continue;
}
} else
{}
break;
}
var G__3809 = cljs.core.seq.call(null,removed);
while(true){
if(G__3809)
{var r = cljs.core.first.call(null,G__3809);
crate.binding.bc_remove.call(null,bc,r);
{
var G__3813 = cljs.core.next.call(null,G__3809);
G__3809 = G__3813;
continue;
}
} else
{return null;
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__3814){
var vec__3817 = p__3814;
var path = cljs.core.nth.call(null,vec__3817,0,null);
var opts = cljs.core.nth.call(null,vec__3817,1,null);
var vec__3818 = (cljs.core.truth_(opts)?cljs.core.PersistentVector.fromArray([path,opts], true):cljs.core.PersistentVector.fromArray([null,path], true));
var path__$1 = cljs.core.nth.call(null,vec__3818,0,null);
var opts__$1 = cljs.core.nth.call(null,vec__3818,1,null);
var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));
var opts__$2 = cljs.core.assoc.call(null,opts__$1,"\uFDD0'path",path__$1);
var opts__$3 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__$2)))?cljs.core.assoc.call(null,opts__$2,"\uFDD0'keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__$2,"\uFDD0'keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__$2),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__3814 = null;
if (goog.isDef(var_args)) {
  p__3814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound_coll__delegate.call(this, atm, p__3814);
};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__3819){
var atm = cljs.core.first(arglist__3819);
var p__3814 = cljs.core.rest(arglist__3819);
return bound_coll__delegate(atm, p__3814);
});
bound_coll.cljs$lang$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__3820){
var vec__3822 = p__3820;
var opts = cljs.core.nth.call(null,vec__3822,0,null);
var opts__$1 = cljs.core.assoc.call(null,opts,"\uFDD0'as",as);
var atm__$1 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'path")).call(null,opts__$1)))?atm:crate.binding.subatom.call(null,atm,(new cljs.core.Keyword("\uFDD0'path")).call(null,opts__$1)));
var opts__$2 = ((cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__$1)))?cljs.core.assoc.call(null,opts__$1,"\uFDD0'keyfn",cljs.core.first):cljs.core.assoc.call(null,opts__$1,"\uFDD0'keyfn",cljs.core.comp.call(null,(new cljs.core.Keyword("\uFDD0'keyfn")).call(null,opts__$1),cljs.core.second)));
var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));
cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){
return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__3820 = null;
if (goog.isDef(var_args)) {
  p__3820 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return map_bound__delegate.call(this, as, atm, p__3820);
};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__3823){
var as = cljs.core.first(arglist__3823);
var atm = cljs.core.first(cljs.core.next(arglist__3823));
var p__3820 = cljs.core.rest(cljs.core.next(arglist__3823));
return map_bound__delegate(as, atm, p__3820);
});
map_bound.cljs$lang$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){
var G__3825 = b;
if(G__3825)
{if(cljs.core.truth_((function (){var or__3824__auto__ = null;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return G__3825.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__3825.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__3825);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable,G__3825);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){
var G__3827 = b;
if(G__3827)
{if(cljs.core.truth_((function (){var or__3824__auto__ = null;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return G__3827.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__3827.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__3827);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,crate.binding.bindable_coll,G__3827);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){
var G__3829 = atm;
if(G__3829)
{if((function (){var or__3824__auto__ = (G__3829.cljs$lang$protocol_mask$partition0$ & 32768);
if(or__3824__auto__)
{return or__3824__auto__;
} else
{return G__3829.cljs$core$IDeref$;
}
})())
{return true;
} else
{if((!G__3829.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__3829);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IDeref,G__3829);
}
});
crate.binding.value = (function value(b){
return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){
return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){
return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__3830){
var vec__3832 = p__3830;
var func = cljs.core.nth.call(null,vec__3832,0,null);
var func__$1 = (function (){var or__3824__auto__ = func;
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return cljs.core.identity;
}
})();
return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__3830 = null;
if (goog.isDef(var_args)) {
  p__3830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return bound__delegate.call(this, atm, p__3830);
};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__3833){
var atm = cljs.core.first(arglist__3833);
var p__3830 = cljs.core.rest(arglist__3833);
return bound__delegate(atm, p__3830);
});
bound.cljs$lang$arity$variadic = bound__delegate;
return bound;
})()
;
