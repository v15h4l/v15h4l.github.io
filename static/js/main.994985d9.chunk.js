(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{125:function(t,e,n){"use strict";n.r(e);var i=n(122),r=n(4),s=n(118),a=n(119),c=n(124),u=n(123),o=(n(128),n(21)),l=n.n(o),d=n(16),h=n.n(d);n(426);function j(t){return Object(r.jsx)("button",{className:"square "+(t.isWinningSquare&&"winning"),onClick:t.onClick,children:t.value})}function v(t){var e=0,n=[1,2,3];return Object(r.jsx)("div",{children:n.map((function(i){return Object(r.jsx)("div",{className:"board-row",children:n.map((function(n){return function(e){var n;return Object(r.jsx)(j,{value:t.squares[e],isWinningSquare:(null===(n=t.winningSquares)||void 0===n?void 0:n.indexOf(e))>=0,onClick:function(){return t.onClick(e)}})}(e++)}))})}))})}var x=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).handleSquareClick=function(t){var e=i.state.activeHistoryIdx,n=i.state.history.slice(0,e+1),r=n[e].squares.slice(),s=n[e].xIsNext;b(r)||r[t]||(r[t]=s?"X":"O",e++,n.push({squares:r,xIsNext:!s}),i.setState({history:n,activeHistoryIdx:e}))},i.handleButtonClick=function(t){i.setState({activeHistoryIdx:t})},i.state={history:[{squares:Array(9).fill(null),xIsNext:!0}],activeHistoryIdx:0},i}return Object(a.a)(n,[{key:"render",value:function(){var t,e,n=this,i=this.state.history.slice()[this.state.activeHistoryIdx],s=i.squares,a=i.xIsNext,c=b(s);return c?(t="Winner : "+c.winner,e=c.winningSquares.slice()):t=function(t){return!t.some((function(t){return!t}))}(s)?"Match Drawn":"Next player : "+(a?"X":"O"),Object(r.jsxs)("div",{className:"game",children:[Object(r.jsx)("div",{className:"game-board",children:Object(r.jsx)(v,{squares:s,winningSquares:e,onClick:this.handleSquareClick})}),Object(r.jsxs)("div",{className:"game-info",children:[Object(r.jsx)("div",{className:"status",children:t}),Object(r.jsx)("ol",{children:this.state.history.map((function(t,e){return Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:"move-btn "+(e===n.state.activeHistoryIdx&&"active"),onClick:function(){return n.handleButtonClick(e)},children:"Go to ".concat(e>0?"move #"+e:"game start")},e)})}))})]})]})}}]),n}(l.a.Component);function b(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var r=Object(i.a)(e[n],3),s=r[0],a=r[1],c=r[2];if(t[s]&&t[s]===t[a]&&t[s]===t[c])return{winner:t[s],winningSquares:[s,a,c]}}return null}h.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))},426:function(t,e,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.994985d9.chunk.js.map