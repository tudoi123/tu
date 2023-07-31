import{c as b,z as C,e as L,D as c}from"./links.50b3c915.js";import{l as f}from"./license.a5355f46.js";import{C as M}from"./index.333853dc.js";import{r as o,o as a,d as l,w as n,a as y,t as d,b as u,c as _,e as p,C as S,g as D}from"./vue.runtime.esm-bundler.3acceac0.js";import{_ as m}from"./_plugin-vue_export-helper.109ab23d.js";import{B as T}from"./DatePicker.68db096a.js";import{C as B}from"./Blur.0a5b0806.js";import{C as A}from"./Index.15ade0e7.js";import O from"./ContentRankings.05766958.js";import{C as J}from"./Index.73685636.js";import R from"./Dashboard.cf166e4a.js";import N from"./KeywordRankings.dd2b879c.js";import P from"./SeoStatistics.5b724915.js";import"./default-i18n.41786823.js";import"./isArrayLikeObject.71906cce.js";import"./upperFirst.92607be0.js";import"./_stringToArray.4de3b1f3.js";import"./toString.3425ebfb.js";import"./Caret.918abbf1.js";import"./get.03b63251.js";import"./isUndefined.d0805433.js";import"./_getAllKeys.0859f548.js";import"./_getTag.3f649f93.js";import"./debounce.d985e307.js";import"./toNumber.8f3d4cd6.js";import"./_baseTrim.8725856f.js";import"./isEqual.78195933.js";import"./_baseIsEqual.956e5caf.js";import"./allowed.8cc2579e.js";/* empty css             */import"./params.0be92a7a.js";/* empty css                                            *//* empty css                                              */import"./constants.008ef172.js";import"./SaveChanges.7ff5a9ed.js";/* empty css                                              */import"./Header.6b3613fe.js";import"./addons.d112d026.js";import"./LicenseKeyBar.409140a3.js";import"./LogoGear.1564d7d6.js";import"./AnimatedNumber.fdea1d09.js";import"./numbers.cd5a4c70.js";import"./Logo.35a4df98.js";import"./Support.086162cc.js";import"./Tabs.de5972ab.js";import"./TruSeoScore.177d3103.js";import"./Information.19739ce3.js";import"./Slide.0a204345.js";import"./Date.c9a4f74a.js";import"./Exclamation.d174eb67.js";import"./Url.213fa2f5.js";import"./Gear.dd775150.js";import"./Row.3c0caea3.js";import"./PostsTable.2dfd65ab.js";import"./WpTable.9b15154a.js";import"./PostTypes.9ab32454.js";import"./Statistic.9c03bebc.js";import"./_arrayEach.56a9f647.js";import"./vue.runtime.esm-bundler.61ce2f45.js";import"./Tooltip.38bcb67e.js";import"./ScoreButton.fc3e4cb0.js";import"./Table.7ca525c9.js";import"./RequiredPlans.ad97ee04.js";import"./Card.f9c412a3.js";import"./Overview.b90c7814.js";import"./DonutChartWithLegend.c3192bbc.js";import"./KeywordsGraph.8ff0b507.js";import"./SeoStatisticsOverview.9a468e00.js";import"./Portal.8b523c86.js";import"./Index.86d6af04.js";import"./SeoRevisions.d8d073d0.js";import"./html.fc130714.js";import"./UserAvatar.4128f3fa.js";import"./Profile.ee002d2e.js";import"./Eye.1c05dbd5.js";import"./List.c7ba0129.js";import"./Statistics.b573e63b.js";const V={setup(){return{optionsStore:b(),searchStatisticsStore:C()}},components:{CoreAlert:M},data(){return{error:this.$t.__("Your connection with Google Search Console has expired or is invalid. Please check that your site is verified in Google Search Console and try to reconnect. If the problem persists, please contact our support team.",this.$td)}},computed:{invalidAuthentication(){var t,s;return this.searchStatisticsStore.unverifiedSite||typeof((s=(t=this.optionsStore.internalOptions.internal)==null?void 0:t.searchStatistics)==null?void 0:s.profile)!="object"}}};function G(t,s,i,g,r,e){const h=o("core-alert");return e.invalidAuthentication?(a(),l(h,{key:0,class:"aioseo-input-error aioseo-search-statistics-authentication-alert",type:"red"},{default:n(()=>[y("strong",null,d(r.error),1)]),_:1})):u("",!0)}const U=m(V,[["render",G]]),z={};function F(t,s){return a(),_("div")}const I=m(z,[["render",F]]),E={};function H(t,s){return a(),_("div")}const j=m(E,[["render",H]]);const q={setup(){return{licenseStore:L(),searchStatisticsStore:C()}},emits:["rolling"],components:{AuthenticationAlert:U,BaseDatePicker:T,CoreBlur:B,CoreMain:A,ContentRankings:O,Cta:J,Dashboard:R,KeywordRankings:N,PostDetail:I,Settings:j,SeoStatistics:P},data(){return{maxDate:null,minDate:null,loadingConnect:!1,strings:{pageName:this.$t.__("Search Statistics",this.$td),ctaHeaderText:this.$t.__("Connect your website to Google Search Console",this.$td),ctaDescription:this.$t.__("Connect to Google Search Console to receive valuable insights on how your content is being discovered. Identify areas for improvement in order to improve search engine rankings and drive more traffic to your website.",this.$td),ctaButtonText:this.$t.__("Connect to Google Search Console",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Improved visibility",this.$td),feature3:this.$t.__("Track page and keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{defaultRange(){const t=new Date(`${this.searchStatisticsStore.range.start} 00:00:00`),s=new Date(`${this.searchStatisticsStore.range.end} 00:00:00`);return[t,s]},excludeTabs(){const t=["post-detail"];return(this.licenseStore.isUnlicensed||!f.hasCoreFeature("search-statistics"))&&t.push("settings"),t},isSettings(){return this.$route.name==="settings"},showConnectCta(){return(f.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite)&&!this.isSettings},showDatePicker(){return!["settings","content-rankings"].includes(this.$route.name)&&this.searchStatisticsStore.isConnected&&!this.searchStatisticsStore.unverifiedSite},containerClasses(){const t=[];return this.searchStatisticsStore.fetching&&t.push("aioseo-blur"),t},getOriginalMaxDate(){return this.searchStatisticsStore.latestAvailableDate?c.fromFormat(this.searchStatisticsStore.latestAvailableDate,"yyyy-MM-dd").setZone(c.zone)||c.local().plus({days:-2}):c.local().plus({days:-2})},datepickerShortcuts(){return[{text:this.$t.__("Last 7 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last7Days"),[this.getOriginalMaxDate.plus({days:-6}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 28 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last28Days"),[this.getOriginalMaxDate.plus({days:-27}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 3 Months",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last3Months"),[this.getOriginalMaxDate.plus({days:-89}).toJSDate(),this.getOriginalMaxDate.toJSDate()])}]}},methods:{isDisabledDate(t){return this.minDate===null?!0:t.getTime()<this.minDate.getTime()||t.getTime()>this.maxDate.getTime()},onDateChange(t,s){this.searchStatisticsStore.setDateRange({dateRange:t,rolling:s})},connect(){this.loadingConnect=!0,this.searchStatisticsStore.getAuthUrl().then(t=>{window.location=t})},highlightShortcut(t){if(!t)return;document.querySelectorAll(".el-picker-panel__shortcut").forEach(i=>{switch(i.innerText){case this.$t.__("Last 7 Days",this.$td):t==="last7Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 28 Days",this.$td):t==="last28Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 3 Months",this.$td):t==="last3Months"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 6 Months",this.$td):t==="last6Months"?i.classList.add("active"):i.classList.remove("active");break;default:i.classList.remove("active")}})}},mounted(){this.minDate=c.now().plus({months:-16}).toJSDate(),this.maxDate=this.getOriginalMaxDate.toJSDate()}},K={key:0,class:"connect-cta"};function Y(t,s,i,g,r,e){const h=o("base-date-picker"),v=o("authentication-alert"),x=o("core-blur"),$=o("cta"),k=o("core-main");return a(),l(k,{"page-name":r.strings.pageName,"exclude-tabs":e.excludeTabs,showTabs:!e.excludeTabs.includes(t.$route.name),containerClasses:e.containerClasses},{extra:n(()=>[e.showDatePicker?(a(),l(h,{key:0,onChange:e.onDateChange,onUpdated:s[0]||(s[0]=w=>e.highlightShortcut(w)),defaultValue:e.defaultRange,defaultRolling:g.searchStatisticsStore.rolling,isDisabledDate:e.isDisabledDate,shortcuts:e.datepickerShortcuts,size:"small"},null,8,["onChange","defaultValue","defaultRolling","isDisabledDate","shortcuts"])):u("",!0)]),default:n(()=>[y("div",null,[p(v),e.showConnectCta?(a(),_("div",K,[p(x,null,{default:n(()=>[(a(),l(S(t.$route.name)))]),_:1}),p($,{"cta-button-action":"",onCtaButtonClick:e.connect,"cta-button-loading":r.loadingConnect,"show-link":!1,"button-text":r.strings.ctaButtonText,alignTop:!0,"feature-list":[r.strings.feature1,r.strings.feature2,r.strings.feature3,r.strings.feature4]},{"header-text":n(()=>[D(d(r.strings.ctaHeaderText),1)]),description:n(()=>[D(d(r.strings.ctaDescription),1)]),_:1},8,["onCtaButtonClick","cta-button-loading","button-text","feature-list"])])):u("",!0),e.showConnectCta?u("",!0):(a(),l(S(t.$route.name),{key:1}))])]),_:1},8,["page-name","exclude-tabs","showTabs","containerClasses"])}const De=m(q,[["render",Y]]);export{De as default};