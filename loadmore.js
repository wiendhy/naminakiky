!function(t,e){t.InfiniteScroll=function(n){function r(t,n){return n=n||e,n.querySelectorAll(t)}function o(t){return void 0!==t}function a(t){return"function"==typeof t}function i(t,e){t=t||{};for(var n in e)t[n]="object"==typeof e[n]?i(t[n],e[n]):e[n];return t}function s(t,e,n){return o(t)?o(e)?void(o(n)?g[t][n]=e:g[t].push(e)):g[t]:g}function d(t,e){o(e)?delete g[t][e]:g[t]=[]}function l(t,e){if(o(g[t]))for(var n in g[t])g[t][n](e)}function c(){return L.innerHTML=p.text.loading,v=!0,M?(y.classList.add(p.state.loading),l("loading",[p]),void u(M,function(t,n){y.className=x+" "+p.state.load,h=e.createElement("div"),h.innerHTML=t;var o=r("title",h),a=r(p.target.post,h),i=r(p.target.anchors+" "+p.target.anchor,h),s=r(p.target.post,H);if(o=o&&o[0]?o[0].innerHTML:"",a.length&&s.length){var d=s[s.length-1];e.title=o,d.insertAdjacentHTML("afterend",'<span class="fi" id="#fi:'+q+'"></span>'),h=e.createElement("div");for(var c=0,u=a.length;u>c;++c)h.appendChild(a[c]);d.insertAdjacentHTML("afterend",h.innerHTML),f(),M=i.length?i[0].href:!1,v=!1,q++,l("load",[p,t,n])}},function(t,e){y.classList.add(p.state.error),v=!1,f(1),l("error",[p,t,e])})):(y.classList.add(p.state.loaded),L.innerHTML=p.text.loaded,l("loaded",[p]))}function f(t){if(L.innerHTML="",T){h.innerHTML=p.text[t?"error":"load"];var e=h.firstChild;e.onclick=function(){return 2===p.type&&(T=!1),c(),!1},L.appendChild(e)}}var u="infinite-scroll-state-",p={target:{posts:".posts",post:".post",anchors:".anchors",anchor:".anchor"},text:{load:"%s",loading:"%s",loaded:"%s",error:"%s"},state:{load:u+"load",loading:u+"loading",loaded:u+"loaded",error:u+"error"}},g={load:[],loading:[],loaded:[],error:[]};p=i(p,n||{}),p.on=s,p.off=d;var h=null,u=function(e,n,r){if(t.XMLHttpRequest){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(200!==o.status)return void(r&&a(r)&&r(o.responseText,o));n&&a(n)&&n(o.responseText,o)}},o.open("GET",e),o.send()}},T=1!==p.type,v=!1,H=r(p.target.posts)[0],L=r(p.target.anchors)[0],M=r(p.target.anchor,L),m=e.body,y=e.documentElement,x=y.className||"",E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=0,b=null,q=1;if(M.length){M=M[0].href,H.insertAdjacentHTML("afterbegin",'<span class="fi" id="#fi:0"></span>'),h=e.createElement("div"),f();var w=function(){E=H.offsetTop+H.offsetHeight,j=t.innerHeight,A=m.scrollTop||y.scrollTop,v||E>A+j||c()};w(),0!==p.type&&t.addEventListener("scroll",function(){T||(b&&t.clearTimeout(b),b=t.setTimeout(w,0200))},!1)}return p}}(window,document);
var infinite_scroll = new InfiniteScroll({
 type: 0,
 target: {
  posts: '.blog-posts',
  post: '.post-outer',
  anchors: '.blog-pager',
  anchor: '.blog-pager-older-link'
 },
 text: {
  load: '<a class="js-load" href="javascript:;">Load More</a>',
  loading: '<a class="js-load">Loading...</a>',
  loaded: '<a class="js-load">All Post Show</a>',
  error: '<a class="js-load">ERROR</a>'
 }
});
