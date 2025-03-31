"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["2976"],{5491:function(e,t,i){i.d(t,{diagram:function(){return C}});var n=i(94280),s=i(91105);i(41029),i(17897),i(97832),i(42901);var r=i(51559),o=i(85587),a=i(77845),l=i(86750),c=i(35035),h=function(){var e=(0,o.eW)(function(e,t,i,n){for(i=i||{},n=e.length;n--;i[e[n]]=t);return i},"o"),t=[1,4],i=[1,13],n=[1,12],s=[1,15],r=[1,16],a=[1,20],l=[1,19],c=[6,7,8],h=[1,26],u=[1,24],g=[1,25],d=[6,7,11],p=[1,31],y=[6,7,11,24],f=[1,6,13,16,17,20,23],m=[1,35],_=[1,36],b=[1,6,7,11,13,16,17,20,23],k=[1,38],E={trace:(0,o.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:(0,o.eW)(function(e,t,i,n,s,r,o){var a=r.length-1;switch(s){case 6:case 7:return n;case 8:n.getLogger().trace("Stop NL ");break;case 9:n.getLogger().trace("Stop EOF ");break;case 11:n.getLogger().trace("Stop NL2 ");break;case 12:n.getLogger().trace("Stop EOF2 ");break;case 15:n.getLogger().info("Node: ",r[a-1].id),n.addNode(r[a-2].length,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 16:n.getLogger().info("Node: ",r[a].id),n.addNode(r[a-1].length,r[a].id,r[a].descr,r[a].type);break;case 17:n.getLogger().trace("Icon: ",r[a]),n.decorateNode({icon:r[a]});break;case 18:case 23:n.decorateNode({class:r[a]});break;case 19:n.getLogger().trace("SPACELIST");break;case 20:n.getLogger().trace("Node: ",r[a-1].id),n.addNode(0,r[a-1].id,r[a-1].descr,r[a-1].type,r[a]);break;case 21:n.getLogger().trace("Node: ",r[a].id),n.addNode(0,r[a].id,r[a].descr,r[a].type);break;case 22:n.decorateNode({icon:r[a]});break;case 27:n.getLogger().trace("node found ..",r[a-2]),this.$={id:r[a-1],descr:r[a-1],type:n.getType(r[a-2],r[a])};break;case 28:this.$={id:r[a],descr:r[a],type:0};break;case 29:n.getLogger().trace("node found ..",r[a-3]),this.$={id:r[a-3],descr:r[a-1],type:n.getType(r[a-2],r[a])};break;case 30:this.$=r[a-1]+r[a];break;case 31:this.$=r[a]}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:t},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:t},{6:i,7:[1,10],9:9,12:11,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},e(c,[2,3]),{1:[2,2]},e(c,[2,4]),e(c,[2,5]),{1:[2,6],6:i,12:21,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:i,9:22,12:11,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},{6:h,7:u,10:23,11:g},e(d,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:a,23:l}),e(d,[2,19]),e(d,[2,21],{15:30,24:p}),e(d,[2,22]),e(d,[2,23]),e(y,[2,25]),e(y,[2,26]),e(y,[2,28],{20:[1,32]}),{21:[1,33]},{6:h,7:u,10:34,11:g},{1:[2,7],6:i,12:21,13:n,14:14,16:s,17:r,18:17,19:18,20:a,23:l},e(f,[2,14],{7:m,11:_}),e(b,[2,8]),e(b,[2,9]),e(b,[2,10]),e(d,[2,16],{15:37,24:p}),e(d,[2,17]),e(d,[2,18]),e(d,[2,20],{24:k}),e(y,[2,31]),{21:[1,39]},{22:[1,40]},e(f,[2,13],{7:m,11:_}),e(b,[2,11]),e(b,[2,12]),e(d,[2,15],{24:k}),e(y,[2,30]),{22:[1,41]},e(y,[2,27]),e(y,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:(0,o.eW)(function(e,t){if(t.recoverable)this.trace(e);else{var i=Error(e);throw i.hash=t,i}},"parseError"),parse:(0,o.eW)(function(e){var t=this,i=[0],n=[],s=[null],r=[],a=this.table,l="",c=0,h=0,u=0,g=r.slice.call(arguments,1),d=Object.create(this.lexer),p={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(p.yy[y]=this.yy[y]);d.setInput(e,p.yy),p.yy.lexer=d,p.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var f=d.yylloc;r.push(f);var m=d.options&&d.options.ranges;function _(){var e;return"number"!=typeof(e=n.pop()||d.lex()||1)&&(e instanceof Array&&(e=(n=e).pop()),e=t.symbols_[e]||e),e}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,o.eW)(function(e){i.length=i.length-2*e,s.length=s.length-e,r.length=r.length-e},"popStack"),(0,o.eW)(_,"lex");for(var b,k,E,S,N,x,L,D,O,v={};;){if(E=i[i.length-1],this.defaultActions[E]?S=this.defaultActions[E]:(null==b&&(b=_()),S=a[E]&&a[E][b]),void 0===S||!S.length||!S[0]){var C="";for(x in O=[],a[E])this.terminals_[x]&&x>2&&O.push("'"+this.terminals_[x]+"'");C=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+O.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(C,{text:d.match,token:this.terminals_[b]||b,line:d.yylineno,loc:f,expected:O})}if(S[0]instanceof Array&&S.length>1)throw Error("Parse Error: multiple actions possible at state: "+E+", token: "+b);switch(S[0]){case 1:i.push(b),s.push(d.yytext),r.push(d.yylloc),i.push(S[1]),b=null,k?(b=k,k=null):(h=d.yyleng,l=d.yytext,c=d.yylineno,f=d.yylloc,u>0&&u--);break;case 2:if(L=this.productions_[S[1]][1],v.$=s[s.length-L],v._$={first_line:r[r.length-(L||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(L||1)].first_column,last_column:r[r.length-1].last_column},m&&(v._$.range=[r[r.length-(L||1)].range[0],r[r.length-1].range[1]]),void 0!==(N=this.performAction.apply(v,[l,h,c,p.yy,S[1],s,r].concat(g))))return N;L&&(i=i.slice(0,-1*L*2),s=s.slice(0,-1*L),r=r.slice(0,-1*L)),i.push(this.productions_[S[1]][0]),s.push(v.$),r.push(v._$),D=a[i[i.length-2]][i[i.length-1]],i.push(D);break;case 3:return!0}}return!0},"parse")},S={EOF:1,parseError:(0,o.eW)(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},"parseError"),setInput:(0,o.eW)(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,o.eW)(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:(0,o.eW)(function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},"unput"),more:(0,o.eW)(function(){return this._more=!0,this},"more"),reject:(0,o.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,o.eW)(function(e){this.unput(this.match.slice(e))},"less"),pastInput:(0,o.eW)(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,o.eW)(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,o.eW)(function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},"showPosition"),test_match:(0,o.eW)(function(e,t){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in s)this[r]=s[r];return!1},"test_match"),next:(0,o.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,i,n,s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!t||i[0].length>t[0].length)){if(t=i,n=r,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,s[r])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,s[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,o.eW)(function(){var e=this.next();return e||this.lex()},"lex"),begin:(0,o.eW)(function(e){this.conditionStack.push(e)},"begin"),popState:(0,o.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,o.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,o.eW)(function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:(0,o.eW)(function(e){this.begin(e)},"pushState"),stateStackSize:(0,o.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,o.eW)(function(e,t,i,n){switch(i){case 0:return this.pushState("shapeData"),t.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:return t.yytext=t.yytext.replace(/\n\s*/g,"<br/>"),24;case 4:return 24;case 5:case 10:case 29:case 32:this.popState();break;case 6:return e.getLogger().trace("Found comment",t.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 11:e.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return e.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:e.getLogger().trace("end icon"),this.popState();break;case 16:return e.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return e.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return e.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return e.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:case 21:case 22:case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 30:e.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return e.getLogger().trace("description:",t.yytext),"NODE_DESCR";case 33:return this.popState(),e.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),e.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),e.getLogger().trace("node end ...",t.yytext),"NODE_DEND";case 36:case 39:case 40:return this.popState(),e.getLogger().trace("node end (("),"NODE_DEND";case 37:case 38:return this.popState(),e.getLogger().trace("node end (-"),"NODE_DEND";case 41:case 42:return e.getLogger().trace("Long description:",t.yytext),21}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}};function N(){this.yy={}}return E.lexer=S,(0,o.eW)(N,"Parser"),N.prototype=E,E.Parser=N,new N}();h.parser=h;var u=[],g=[],d=0,p={},y=(0,o.eW)(()=>{u=[],g=[],d=0,p={}},"clear"),f=(0,o.eW)(e=>{if(0===u.length)return null;let t=u[0].level,i=null;for(let e=u.length-1;e>=0;e--)if(u[e].level!==t||i||(i=u[e]),u[e].level<t)throw Error('Items without section detected, found section ("'+u[e].label+'")');return e===i?.level?null:i},"getSection"),m=(0,o.eW)(function(){return g},"getSections"),_=(0,o.eW)(function(){let e=[],t=m(),i=(0,o.nV)();for(let n of t){let t={id:n.id,label:(0,o.oO)(n.label??"",i),isGroup:!0,ticket:n.ticket,shape:"kanbanSection",level:n.level,look:i.look};for(let s of(e.push(t),u.filter(e=>e.parentId===n.id))){let t={id:s.id,parentId:n.id,label:(0,o.oO)(s.label??"",i),isGroup:!1,ticket:s?.ticket,priority:s?.priority,assigned:s?.assigned,icon:s?.icon,shape:"kanbanItem",level:s.level,rx:5,ry:5,cssStyles:["text-align: left"]};e.push(t)}}return{nodes:e,edges:[],other:{},config:(0,o.nV)()}},"getData"),b=(0,o.eW)((e,t,i,s,r)=>{let a=(0,o.nV)(),l=a.mindmap?.padding??o.vZ.mindmap.padding;switch(s){case k.ROUNDED_RECT:case k.RECT:case k.HEXAGON:l*=2}let c={id:(0,o.oO)(t,a)||"kbn"+d++,level:e,label:(0,o.oO)(i,a),width:a.mindmap?.maxNodeWidth??o.vZ.mindmap.maxNodeWidth,padding:l,isGroup:!1};if(void 0!==r){let e;e=r.includes("\n")?r+"\n":"{\n"+r+"\n}";let t=(0,n.z)(e,{schema:n.A});if(t.shape&&(t.shape!==t.shape.toLowerCase()||t.shape.includes("_")))throw Error(`No such shape: ${t.shape}. Shape names should be lowercase.`);t?.shape&&"kanbanItem"===t.shape&&(c.shape=t?.shape),t?.label&&(c.label=t?.label),t?.icon&&(c.icon=t?.icon.toString()),t?.assigned&&(c.assigned=t?.assigned.toString()),t?.ticket&&(c.ticket=t?.ticket.toString()),t?.priority&&(c.priority=t?.priority)}let h=f(e);h?c.parentId=h.id||"kbn"+d++:g.push(c),u.push(c)},"addNode"),k={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},E=(0,o.eW)((e,t)=>{switch(o.cM.debug("In get type",e,t),e){case"[":return k.RECT;case"(":return")"===t?k.ROUNDED_RECT:k.CLOUD;case"((":return k.CIRCLE;case")":return k.CLOUD;case"))":return k.BANG;case"{{":return k.HEXAGON;default:return k.DEFAULT}},"getType"),S=(0,o.eW)((e,t)=>{p[e]=t},"setElementForId"),N=(0,o.eW)(e=>{if(!e)return;let t=(0,o.nV)(),i=u[u.length-1];e.icon&&(i.icon=(0,o.oO)(e.icon,t)),e.class&&(i.cssClasses=(0,o.oO)(e.class,t))},"decorateNode"),x=(0,o.eW)(e=>{switch(e){case k.DEFAULT:return"no-border";case k.RECT:return"rect";case k.ROUNDED_RECT:return"rounded-rect";case k.CIRCLE:return"circle";case k.CLOUD:return"cloud";case k.BANG:return"bang";case k.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),L=(0,o.eW)(()=>o.cM,"getLogger"),D=(0,o.eW)(e=>p[e],"getElementById"),O=(0,o.eW)(async(e,t,i,n)=>{o.cM.debug("Rendering kanban diagram\n"+e);let a=n.db.getData(),l=(0,o.nV)();l.htmlLabels=!1;let c=(0,r.P)(t),h=c.append("g");h.attr("class","sections");let u=c.append("g");u.attr("class","items");let g=a.nodes.filter(e=>e.isGroup),d=0,p=[],y=25;for(let e of g){let t=l?.kanban?.sectionWidth||200;d+=1,e.x=t*d+(d-1)*10/2,e.width=t,e.y=0,e.height=3*t,e.rx=5,e.ry=5,e.cssClasses=e.cssClasses+" section-"+d;let i=await (0,s.us)(h,e);y=Math.max(y,i?.labelBBox?.height),p.push(i)}let f=0;for(let e of g){let t=p[f];f+=1;let i=l?.kanban?.sectionWidth||200,n=-(3*i)/2+y,r=n;for(let t of a.nodes.filter(t=>t.parentId===e.id)){if(t.isGroup)throw Error("Groups within groups are not allowed in Kanban diagrams");t.x=e.x,t.width=i-15;let n=(await (0,s.Lf)(u,t,{config:l})).node().getBBox();t.y=r+n.height/2,await (0,s.aH)(t),r=t.y+n.height/2+5}let o=t.cluster.select("rect"),c=Math.max(r-n+30,50)+(y-25);o.attr("height",c)}(0,o.j7)(void 0,c,l.mindmap?.padding??o.vZ.kanban.padding,l.mindmap?.useMaxWidth??o.vZ.kanban.useMaxWidth)},"draw"),v=(0,o.eW)(e=>{let t="";for(let t=0;t<e.THEME_COLOR_LIMIT;t++)e["lineColor"+t]=e["lineColor"+t]||e["cScaleInv"+t],(0,a.Z)(e["lineColor"+t])?e["lineColor"+t]=(0,l.Z)(e["lineColor"+t],20):e["lineColor"+t]=(0,c.Z)(e["lineColor"+t],20);let i=(0,o.eW)((t,i)=>e.darkMode?(0,c.Z)(t,i):(0,l.Z)(t,i),"adjuster");for(let n=0;n<e.THEME_COLOR_LIMIT;n++){let s=""+(17-3*n);t+=`
    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} polygon, .section-${n-1} path  {
      fill: ${i(e["cScale"+n],10)};
      stroke: ${i(e["cScale"+n],10)};

    }
    .section-${n-1} text {
     fill: ${e["cScaleLabel"+n]};
    }
    .node-icon-${n-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+n]};
    }
    .section-edge-${n-1}{
      stroke: ${e["cScale"+n]};
    }
    .edge-depth-${n-1}{
      stroke-width: ${s};
    }
    .section-${n-1} line {
      stroke: ${e["cScaleInv"+n]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `}return t},"genSections"),C={db:{clear:y,addNode:b,getSections:m,getData:_,nodeType:k,getType:E,setElementForId:S,decorateNode:N,type2Str:x,getLogger:L,getElementById:D},renderer:{draw:O},parser:h,styles:(0,o.eW)(e=>`
  .edge {
    stroke-width: 3;
  }
  ${v(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles")}}}]);