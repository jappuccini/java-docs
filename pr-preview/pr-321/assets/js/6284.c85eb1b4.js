"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([["6284"],{17802:function(t,e,a){function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{A:()=>r}),(0,a(4171).eW)(r,"populateCommonDb")},19742:function(t,e,a){a.d(e,{diagram:()=>u});var r=a(17802),i=a(72216),l=a(33417),o=a(4171),s=a(3194),c=o.vZ.packet,n=class{constructor(){this.packet=[],this.setAccTitle=o.GN,this.getAccTitle=o.eu,this.setDiagramTitle=o.g2,this.getDiagramTitle=o.Kr,this.getAccDescription=o.Mx,this.setAccDescription=o.U$}static{(0,o.eW)(this,"PacketDB")}getConfig(){let t=(0,i.Rb)({...c,...(0,o.iE)().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){(0,o.ZH)(),this.packet=[]}},d=(0,o.eW)((t,e)=>{(0,r.A)(t,e);let a=-1,i=[],l=1,{bitsPerRow:s}=e.getConfig();for(let{start:r,end:c,bits:n,label:d}of t.blocks){if(void 0!==r&&void 0!==c&&c<r)throw Error(`Packet block ${r} - ${c} is invalid. End must be greater than start.`);if((r??=a+1)!==a+1)throw Error(`Packet block ${r} - ${c??r} is not contiguous. It should start from ${a+1}.`);if(0===n)throw Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);for(c??=r+(n??1)-1,n??=c-r+1,a=c,o.cM.debug(`Packet block ${r} - ${a} with label ${d}`);i.length<=s+1&&e.getPacket().length<1e4;){let[t,a]=p({start:r,end:c,bits:n,label:d},l,s);if(i.push(t),t.end+1===l*s&&(e.pushWord(i),i=[],l++),!a)break;({start:r,end:c,bits:n,label:d}=a)}}e.pushWord(i)},"populate"),p=(0,o.eW)((t,e,a)=>{if(void 0===t.start)throw Error("start should have been set during first phase");if(void 0===t.end)throw Error("end should have been set during first phase");if(t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let r=e*a-1,i=e*a;return[{start:t.start,end:r,label:t.label,bits:r-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),k={parser:{yy:void 0},parse:(0,o.eW)(async t=>{let e=await (0,s.Qc)("packet",t),a=k.parser?.yy;if(!(a instanceof n))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");o.cM.debug(e),d(e,a)},"parse")},h=(0,o.eW)((t,e,a,r)=>{let i=r.db,s=i.getConfig(),{rowHeight:c,paddingY:n,bitWidth:d,bitsPerRow:p}=s,k=i.getPacket(),h=i.getDiagramTitle(),f=c+n,u=f*(k.length+1)-(h?0:c),g=d*p+2,y=(0,l.P)(e);for(let[t,e]of(y.attr("viewbox",`0 0 ${g} ${u}`),(0,o.v2)(y,u,g,s.useMaxWidth),k.entries()))b(y,e,t,s);y.append("text").text(h).attr("x",g/2).attr("y",u-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),b=(0,o.eW)((t,e,a,{rowHeight:r,paddingX:i,paddingY:l,bitWidth:o,bitsPerRow:s,showBits:c})=>{let n=t.append("g"),d=a*(r+l)+l;for(let t of e){let e=t.start%s*o+1,a=(t.end-t.start+1)*o-i;if(n.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),n.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;let l=t.end===t.start,p=d-2;n.append("text").attr("x",e+(l?a/2:0)).attr("y",p).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(t.start),l||n.append("text").attr("x",e+a).attr("y",p).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),f={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},u={parser:k,get db(){return new n},renderer:{draw:h},styles:(0,o.eW)(({packet:t}={})=>{let e=(0,i.Rb)(f,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);