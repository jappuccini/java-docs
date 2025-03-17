"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["8292"],{65521:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(16124);let a=function(e){return(0,r.Z)(e,4)}},94243:function(e,t,n){n.r(t),n.d(t,{render:()=>D});var r=n("97400"),a=n("20357");n("99788"),n("60883");var i=n("20617");n("48151"),n("93904");var d=n("34022"),c=n("49235"),o=n("61925"),s=n("65521"),l=n("97345");function g(e){var t,n,r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:(t=e,l.Z(t.nodes(),function(e){var n=t.node(e),r=t.parent(e),a={v:e};return o.Z(n)||(a.value=n),o.Z(r)||(a.parent=r),a})),edges:(n=e,l.Z(n.edges(),function(e){var t=n.edge(e),r={v:e.v,w:e.w};return o.Z(e.name)||(r.name=e.name),o.Z(t)||(r.value=t),r}))};return o.Z(e.graph())||(r.value=s.Z(e.graph())),r}n("61135");var f=n("50043"),h=new Map,u=new Map,p=new Map,w=(0,d.eW)(()=>{u.clear(),p.clear(),h.clear()},"clear"),M=(0,d.eW)((e,t)=>{let n=u.get(t)||[];return d.cM.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),v=(0,d.eW)((e,t)=>{let n=u.get(t)||[];return d.cM.info("Descendants of ",t," is ",n),d.cM.info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||M(e.v,t)||M(e.w,t)||n.includes(e.w):(d.cM.debug("Tilt, ",t,",not in descendants"),!1))},"edgeInCluster"),y=(0,d.eW)((e,t,n,r)=>{d.cM.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let a=t.children(e)||[];e!==r&&a.push(e),d.cM.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach(a=>{if(t.children(a).length>0)y(a,t,n,r);else{let i=t.node(a);d.cM.info("cp ",a," to ",r," with parent ",e),n.setNode(a,i),r!==t.parent(a)&&(d.cM.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==r&&a!==e?(d.cM.debug("Setting parent",a,e),n.setParent(a,e)):(d.cM.info("In copy ",e,"root",r,"data",t.node(e),r),d.cM.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));let c=t.edges(a);d.cM.debug("Copying Edges",c),c.forEach(a=>{d.cM.info("Edge",a);let i=t.edge(a.v,a.w,a.name);d.cM.info("Edge data",i,r);try{v(a,r)?(d.cM.info("Copying as ",a.v,a.w,i,a.name),n.setEdge(a.v,a.w,i,a.name),d.cM.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.cM.info("Skipping copy of edge ",a.v,"--\x3e",a.w," rootId: ",r," clusterId:",e)}catch(e){d.cM.error(e)}})}d.cM.debug("Removing node",a),t.removeNode(a)})},"copy"),X=(0,d.eW)((e,t)=>{let n=t.children(e),r=[...n];for(let a of n)p.set(a,e),r=[...r,...X(a,t)];return r},"extractDescendants"),m=(0,d.eW)((e,t,n)=>{let r=e.edges().filter(e=>e.v===t||e.w===t),a=e.edges().filter(e=>e.v===n||e.w===n),i=r.map(e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w})),d=a.map(e=>({v:e.v,w:e.w}));return i.filter(e=>d.some(t=>e.v===t.v&&e.w===t.w))},"findCommonEdges"),b=(0,d.eW)((e,t,n)=>{let r;let a=t.children(e);if(d.cM.trace("Searching children of id ",e,a),a.length<1)return e;for(let e of a){let a=b(e,t,n),i=m(t,n,a);if(a){if(!(i.length>0))return a;r=a}}return r},"findNonClusterChild"),E=(0,d.eW)(e=>h.has(e)&&h.get(e).externalConnections&&h.has(e)?h.get(e).id:e,"getAnchorId"),N=(0,d.eW)((e,t)=>{if(!e||t>10){d.cM.debug("Opting out, no graph ");return}for(let t of(d.cM.debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&(d.cM.warn("Cluster identified",t," Replacement id in edges: ",b(t,e,t)),u.set(t,X(t,e)),h.set(t,{id:b(t,e,t),clusterData:e.node(t)}))}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?(d.cM.debug("Cluster identified",t,u),r.forEach(e=>{M(e.v,t)^M(e.w,t)&&(d.cM.warn("Edge: ",e," leaves cluster ",t),d.cM.warn("Descendants of XXX ",t,": ",u.get(t)),h.get(t).externalConnections=!0)})):d.cM.debug("Not a cluster ",t,u)}),h.keys())){let n=h.get(t).id,r=e.parent(n);r!==t&&h.has(r)&&!h.get(r).externalConnections&&(h.get(t).id=r)}e.edges().forEach(function(t){let n=e.edge(t);d.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.cM.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,a=t.w;if(d.cM.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h.get(t.v)," --- ",h.get(t.w)),h.get(t.v)||h.get(t.w)){if(d.cM.warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=E(t.v),a=E(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let a=e.parent(r);h.get(a).externalConnections=!0,n.fromCluster=t.v}if(a!==t.w){let r=e.parent(a);h.get(r).externalConnections=!0,n.toCluster=t.w}d.cM.warn("Fix Replacing with XXX",r,a,t.name),e.setEdge(r,a,n,t.name)}}),d.cM.warn("Adjusted Graph",g(e)),C(e,0),d.cM.trace(h)},"adjustClustersAndEdges"),C=(0,d.eW)((e,t)=>{if(d.cM.warn("extractor - ",t,g(e),e.children("D")),t>10){d.cM.error("Bailing out");return}let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r){d.cM.debug("Done, no node has children",e.nodes());return}for(let r of(d.cM.debug("Nodes = ",n,t),n))if(d.cM.debug("Extracting node",r,h,h.has(r)&&!h.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),h.has(r)){if(!h.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){d.cM.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";h.get(r)?.clusterData?.dir&&(n=h.get(r).clusterData.dir,d.cM.warn("Fixing dir",h.get(r).clusterData.dir,n));let a=new f.k({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});d.cM.warn("Old graph before copy",g(e)),y(r,e,a,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:h.get(r).clusterData,label:h.get(r).label,graph:a}),d.cM.warn("New graph after copy node: (",r,")",g(a)),d.cM.debug("Old graph after copy",g(e))}else d.cM.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!h.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),d.cM.debug(h)}else d.cM.debug("Not a cluster",r,t);for(let r of(n=e.nodes(),d.cM.warn("New list of nodes",n),n)){let n=e.node(r);d.cM.warn(" Now next level",r,n),n?.clusterNode&&C(n.graph,t+1)}},"extractor"),S=(0,d.eW)((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach(t=>{let r=e.children(t),a=S(e,r);n=[...n,...a]}),n},"sorter"),x=(0,d.eW)(e=>S(e,e.children()),"sortNodesByHierarchy"),I=(0,d.eW)(async(e,t,n,o,s,l)=>{d.cM.warn("Graph in recursive render:XAX",g(t),s);let f=t.graph().rankdir;d.cM.trace("Dir in recursive render - dir:",f);let u=e.insert("g").attr("class","root");t.nodes()?d.cM.info("Recursive render XXX",t.nodes()):d.cM.info("No nodes found for",t),t.edges().length>0&&d.cM.info("Recursive edges",t.edge(t.edges()[0]));let p=u.insert("g").attr("class","clusters"),w=u.insert("g").attr("class","edgePaths"),M=u.insert("g").attr("class","edgeLabels"),v=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let r=t.node(e);if(void 0!==s){let n=JSON.parse(JSON.stringify(s.clusterData));d.cM.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",s.height),t.setNode(s.id,n),t.parent(e)||(d.cM.trace("Setting parent",e,s.id),t.setParent(e,s.id,n))}if(d.cM.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r?.clusterNode){d.cM.info("Cluster identified XBX",e,r.width,t.node(e));let{ranksep:i,nodesep:c}=t.graph();r.graph.setGraph({...r.graph.graph(),ranksep:i+25,nodesep:c});let s=await I(v,r.graph,n,o,t.node(e),l),g=s.elem;(0,a.jr)(r,g),r.diff=s.diff||0,d.cM.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,a.Yn)(g,r)}else t.children(e).length>0?(d.cM.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",t),d.cM.trace(b(r.id,t)),h.set(r.id,{id:b(r.id,t),node:r})):(d.cM.trace("Node - the non recursive path XAX",e,v,t.node(e),f),await (0,a.Lf)(v,t.node(e),{config:l,dir:f}))}));let y=(0,d.eW)(async()=>{let e=t.edges().map(async function(e){let n=t.edge(e.v,e.w,e.name);d.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.cM.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.cM.info("Fix",h,"ids:",e.v,e.w,"Translating: ",h.get(e.v),h.get(e.w)),await (0,r.I_)(M,n)});await Promise.all(e)},"processEdges");await y(),d.cM.info("Graph before layout:",JSON.stringify(g(t))),d.cM.info("############################################# XXX"),d.cM.info("###                Layout                 ### XXX"),d.cM.info("############################################# XXX"),(0,c.bK)(t),d.cM.info("Graph after layout:",JSON.stringify(g(t)));let X=0,{subGraphTitleTotalMargin:m}=(0,i.L)(l);return await Promise.all(x(t).map(async function(e){let n=t.node(e);if(d.cM.info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=m,d.cM.info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),h.get(n.id).node=n,(0,a.aH)(n);else if(t.children(e).length>0){d.cM.info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=m,t.node(n.parentId);let r=n?.padding/2||0,i=n?.labelBBox?.height||0;d.cM.debug("OffsetY",i-r||0,"labelHeight",i,"halfPadding",r),await (0,a.us)(p,n),h.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=m/2,d.cM.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,a.aH)(n)}})),t.edges().forEach(function(e){let a=t.edge(e);d.cM.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(a),a),a.points.forEach(e=>e.y+=m/2);let i=t.node(e.v);var c=t.node(e.w);let s=(0,r.QP)(w,a,h,n,i,c,o);(0,r.Jj)(a,s)}),t.nodes().forEach(function(e){let n=t.node(e);d.cM.info(e,n.type,n.diff),n.isGroup&&(X=n.diff)}),d.cM.warn("Returning from recursive render XAX",u,X),{elem:u,diff:X}},"recursiveRender"),D=(0,d.eW)(async(e,t)=>{let n=new f.k({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),i=t.select("g");(0,r.DQ)(i,e.markers,e.type,e.diagramId),(0,a.gU)(),(0,r.ZH)(),(0,a.ZH)(),w(),e.nodes.forEach(e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)}),d.cM.debug("Edges:",e.edges),e.edges.forEach(e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",a=t+"---"+t+"---2",i=n.node(t);n.setNode(r,{domId:r,id:r,parentId:i.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,i.parentId),n.setNode(a,{domId:a,id:a,parentId:i.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(a,i.parentId);let d=structuredClone(e),c=structuredClone(e),o=structuredClone(e);d.label="",d.arrowTypeEnd="none",d.id=t+"-cyclic-special-1",c.arrowTypeStart="none",c.arrowTypeEnd="none",c.id=t+"-cyclic-special-mid",o.label="",i.isGroup&&(d.fromCluster=t,o.toCluster=t),o.id=t+"-cyclic-special-2",o.arrowTypeStart="none",n.setEdge(t,r,d,t+"-cyclic-special-0"),n.setEdge(r,a,c,t+"-cyclic-special-1"),n.setEdge(a,t,o,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)}),d.cM.warn("Graph at first:",JSON.stringify(g(n))),N(n),d.cM.warn("Graph after XAX:",JSON.stringify(g(n)));let c=(0,d.nV)();await I(i,n,e.type,e.diagramId,void 0,c)},"render")}}]);