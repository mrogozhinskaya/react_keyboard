(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s.n(n),r=s(4),c=s(5),o=s(7),d=s(6),i=s(1),p=s.n(i),u=s(0),l=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handlePressedKey=function(t){e.setState({pressedKey:t.key})},e}return Object(c.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handlePressedKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handlePressedKey)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:this.state.pressedKey?Object(u.jsx)("p",{className:"App__message",children:"The last pressed key is [".concat(this.state.pressedKey,"]")}):Object(u.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),s}(p.a.Component);s(13);a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b0c7d119.chunk.js.map