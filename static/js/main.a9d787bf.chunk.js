(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(t,e,s){},9:function(t,e,s){"use strict";s.r(e);var c=s(6),n=s(3),r=s(4),a=s(8),i=s(7),o=s(0),l=s(1),u=s.n(l),d=s(5),j=s.n(d);s(15);function h(t){return Object(o.jsx)("button",{className:"square",onClick:t.onClick,children:t.value})}function x(t){var e=function(e){return Object(o.jsx)(h,{value:t.squares[e],onClick:function(){return t.onClick(e)}})};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"board-row",children:[e(0),e(1),e(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[e(3),e(4),e(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[e(6),e(7),e(8)]})]})}var b=function(t){Object(a.a)(s,t);var e=Object(i.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).handleSquareClick=function(t){var e=c.state.activeHistoryIdx,s=c.state.history.slice(0,e+1),n=s[e].squares.slice(),r=s[e].xIsNext;v(n)||n[t]||(n[t]=r?"X":"O",e++,s.push({squares:n,xIsNext:!r}),c.setState({history:s,activeHistoryIdx:e}))},c.handleButtonClick=function(t){c.setState({activeHistoryIdx:t})},c.state={history:[{squares:Array(9).fill(null),xIsNext:!0}],activeHistoryIdx:0},c}return Object(r.a)(s,[{key:"render",value:function(){var t,e=this,s=this.state.history.slice()[this.state.activeHistoryIdx],c=s.squares,n=s.xIsNext,r=v(c);return t=r?"Winner : "+r:"Next player : "+(n?"X":"O"),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(x,{squares:c,onClick:this.handleSquareClick})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{className:"status",children:t}),Object(o.jsx)("ol",{children:this.state.history.map((function(t,s){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return e.handleButtonClick(s)},children:"Go to ".concat(s>0?"move #"+s:"game start")})})}))})]})]})}}]),s}(u.a.Component);function v(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s=0;s<e.length;s++){var n=Object(c.a)(e[s],3),r=n[0],a=n[1],i=n[2];if(t[r]&&t[r]===t[a]&&t[r]===t[i])return t[r]}return null}j.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.a9d787bf.chunk.js.map