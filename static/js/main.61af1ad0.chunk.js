(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(2),r=a.n(i),l=a(3),o=a(4),s=a(6),b=a(5),u=a(7),m=(a(13),a(14),a(15),function(t){var e=t.isActiveTab,a=t.index,n=t.title,i=t.handleClick;return c.a.createElement("button",{type:"button",onClick:i,className:e===a?"button button--active":"button"},n)}),v=function(t){var e=t.tabs,a=t.getActiveTab,n=t.activeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs tabs__container"},c.a.createElement("div",{className:"tabs__wrapper"},e.map(function(t,e){var i=t.title;return c.a.createElement(m,{handleClick:function(){return a(e)},title:i,key:i,index:e,isActiveTab:n})}))),c.a.createElement("p",{className:"tabs__content"},e[n].content))},p=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={activeTab:0,tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]},a.getActiveTab=function(t){a.setState({activeTab:t})},a}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.state,e=t.tabs,a=t.activeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Tabs with React")),c.a.createElement(v,{tabs:e,getActiveTab:this.getActiveTab,activeTab:a}))}}]),e}(c.a.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.61af1ad0.chunk.js.map