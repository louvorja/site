import{_ as l,c as a,o as r,a as t,g as y,t as i,F as c,r as _,f as h,h as b,e as g}from"./index-08fq19KC.js";const $={name:"LyricLayoutComponent",props:{css:String},computed:{uuid(){return"uuid-"+Math.random().toString(36).substr(2,9)},style(){let s="";return this.css.split(`
`).forEach(e=>{e.includes("{")?s+=`#${this.uuid} ${e}`:s+=e,s+=`
`}),`<style>${s}</style>`}}},x=["id"],v={cellspacing:"0",cellpadding:"0",width:"100%",height:"100%",id:"body",style:{position:"absolute",bottom:"0",height:"100px"}},L={style:{"text-align":"center"}},k={id:"quadro",class:"quadro"},F=["innerHTML"];function S(s,e,d,u,p,o){return r(),a(c,null,[t("div",{id:o.uuid,style:{position:"relative"}},[e[0]||(e[0]=t("img",{src:y,style:{width:"100%",height:"250px"},class:"object-fit-cover"},null,-1)),t("table",v,[t("tbody",null,[t("tr",null,[t("td",L,[t("div",k,i(s.$t("help.lyric_css")),1)])])])])],8,x),t("div",{innerHTML:o.style},null,8,F)],64)}const w=l($,[["render",S],["__scopeId","data-v-adaa55d8"]]),C={name:"TemplatesCSSComponent",components:{LyricLayout:w},computed:{list(){return[{font:"BebasNeue-Regular.ttf",style:`*{
    font-size:75px;
    font-family:"Bebas Neue Regular"; 
    letter-spacing: 0.03em;
    text-shadow: black 0.1em 0.1em 0.3em;
}
.quadro{
    background-color:rgba(0, 0, 0, 0);
}
table td{
    vertical-align:bottom !important;
}`},{style:`
*{
    font-size:30px;
    font-family:"Open Sans", Verdana, Arial, Helvetica, sans-serif; 
    letter-spacing: 0.03em;
    text-shadow: black 0.1em 0.1em 0.3em;
}
.quadro{
    background-image: linear-gradient(to right, #751ab6c2, #247980b6, #899207b7, #69bfb6b9,#7f1e928a );
    border-radius: 5%;
    padding:10px 40px;
    color:#FFFFFF;
    font-weight:bold;
    transition: opacity 600ms, visibility 600ms;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}`}]}}},B={class:"my-3"},N=["href"],q={class:"m-3"};function T(s,e,d,u,p,o){const m=_("LyricLayout");return r(!0),a(c,null,h(o.list,(n,f)=>(r(),a("div",{class:"row",key:f},[t("div",null,[b(m,{css:n.style},null,8,["css"])]),t("div",B,[n.font?(r(),a("a",{key:0,href:"/fonts/"+n.font,class:"site-btn p-2 px-5"},i(s.$t("help.download_font")),9,N)):g("",!0),t("code",null,[t("pre",q,i(n.style),1)])]),e[0]||(e[0]=t("hr",null,null,-1))]))),128)}const H=l(C,[["render",T]]);export{H as default};
