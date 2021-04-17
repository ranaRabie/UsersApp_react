(this.webpackJsonptrufla_react=this.webpackJsonptrufla_react||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s.n(n),i=s(13),a=s.n(i),c=(s(24),s(25),s(18)),u=s(16),l=s(14),o=s(15),h=s(19),d=s(17),f=s(4),j=s.n(f),v=s(0),b=[],O=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={users:[],viewInterestsList:[],noUsers:!1},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;j.a.get("/users.json").then((function(t){e.setState({users:t.data}),e.calculateFollowersNumber(),e.getInterests(),e.sortUsers()})).catch((function(e){console.log(e)}))}},{key:"getOccurrence",value:function(e,t){return e.filter((function(e){return e===t})).length}},{key:"calculateFollowersNumber",value:function(){for(var e=this.state.users.map((function(e){return e.following})).flat(),t=Object(u.a)(this.state.users),s=0;s<t.length;s++){var n=this.getOccurrence(e,this.state.users[s].id),r=Object(c.a)({},t[s]);r.followersCounetr=n,t[s]=r,this.setState({users:t})}}},{key:"sortUsers",value:function(){this.state.users.sort((function(e,t){return t.followersCounetr-e.followersCounetr})),this.setState({users:this.state.users})}},{key:"getInterests",value:function(){var e=this;j.a.get("/interests.json").then((function(t){for(var s=t.data,n=e.state.users,r=0;r<n.length;r++)if(n[r].interests)for(var i=0;i<s.length;i++)for(var a=0;a<n[r].interests.length;a++)n[r].interests[a]===s[i].id&&(n[r].interests[a]=s[i].name,e.setState({users:e.state.users}))})).catch((function(e){console.log(e)}))}},{key:"viewInterests",value:function(e){if(b.includes(e)){var t=b.indexOf(e);b.splice(t,1),this.setState({viewInterestsList:b})}else b.push(e),this.setState({viewInterestsList:b})}},{key:"deleteInterests",value:function(e,t){for(var s=0;s<this.state.users.length;s++)if(this.state.users[s].id===e){delete this.state.users[s].interests,this.setState({users:this.state.users});var n=b.indexOf(t);b.splice(n,1),this.setState({viewInterestsList:b})}}},{key:"deleteUser",value:function(e){for(var t=0;t<this.state.users.length;t++)if(this.state.users[t].id===e){var s=this.state.users.indexOf(this.state.users[t]);this.state.users.splice(s,1),this.setState({users:this.state.users});var n=b.indexOf(e);b.splice(n,1),this.setState({viewInterestsList:b})}}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Users"}),Object(v.jsxs)("ul",{children:[this.state.users.length>0?"":Object(v.jsx)("li",{className:"user-item no-user",children:"no users found"}),this.state.users.map((function(t,s){return Object(v.jsxs)("li",{className:"user-item",children:[Object(v.jsxs)("div",{className:"user-head",children:[Object(v.jsx)("h2",{children:t.name}),Object(v.jsxs)("p",{children:["Followers: ",t.followersCounetr]}),t.interests?Object(v.jsx)("div",{className:"interests-wrapper",children:Object(v.jsxs)("div",{className:"interests-list "+(e.state.viewInterestsList.includes(s)?"show":"hide"),children:[Object(v.jsx)("span",{className:"interest-item",children:t.interests}),Object(v.jsx)("button",{onClick:function(){return e.deleteInterests(t.id,s)},className:"link danger-link",children:"Delete Interests"})]})}):""]}),Object(v.jsxs)("div",{className:"user-footer",children:[t.interests?Object(v.jsx)("button",{onClick:function(){return e.viewInterests(s)},className:"btn dark-btn",children:"view interests"}):"",Object(v.jsx)("button",{onClick:function(){return e.deleteUser(t.id)},className:"btn danger-btn",children:"delete user"})]})]},s)}))]})]})}}]),s}(n.Component);var g=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(O,{})})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.cf42ca45.chunk.js.map