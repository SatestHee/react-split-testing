(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(5),o=n.n(i),c=n(6),u=n(7),l=n(9),s=n(8),m=n(10),p=n(2),f=n(3),h=n.n(f),v=n(1),y=n.n(v);var b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e};function E(e,t){return e(t={exports:{}},t.exports),t.exports}var C=E(function(e){function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(r){return"function"===typeof Symbol&&"symbol"===t(Symbol.iterator)?e.exports=n=function(e){return t(e)}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},n(r)}e.exports=n});var w=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e};var k=function(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?w(e):t},x=E(function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t}),V=E(function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t});var S=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)};var O=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};function _(e,t){if(!t)return-1;for(var n=0,r=0;r<e.length;r++)n+=e[r];for(var a=function(e){for(var t=0,n=0;n<e.length;n++)t+=e.charCodeAt(n)*Math.pow(10,n);var r=1e4*Math.sin(t);return r-Math.floor(r)}(t)*n,i=0;i<e.length;i++){if(a<e[i])return i;a-=e[i]}return-1}function j(e){if(e||0===e)return String(e);if(!window||!("localStorage"in window))return null;var t="__ab_experiment_identifier__";try{(e=(e=localStorage.getItem(t))&&String(e))||(e=function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<20;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}(),localStorage.setItem(t,e))}catch(n){return null}return e}function N(e){return e||0===e?parseFloat(e):1}var A=function(e){function t(e){var n;return b(this,t),(n=k(this,x(t).call(this,e))).state={},n.state.activeVariant=n._chooseVariant(!0),n}return S(t,e),g(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.name,r=t.children,a=t.userIdentifier,i=t.variantName,o=e.name!==n||e.userIdentifier!==a||e.variantName!==i;(o||e.children!==r)&&this.setState({activeVariant:this._chooseVariant(e,o)})}},{key:"getActiveVariant",value:function(){return this.state.activeVariant}},{key:"getActiveVariantName",value:function(){return this.state.activeVariant&&this.state.activeVariant.props.name}},{key:"getName",value:function(){return this.props.name}},{key:"getVariant",value:function(e){var t=this;return h.a.Children.toArray(this.props.children).find(function(n){return t._isVariant(n)&&n.props.name===e})}},{key:"_chooseVariant",value:function(e){var t=this.props,n=t.variantName,r=t.userIdentifier;if(n){var a=this.getVariant(n);return e&&a&&this._onChoice(a),a}var i=h.a.Children.toArray(this.props.children),o=this.state.activeVariant&&this.state.activeVariant.props.name,c=[],u=[],l=!0,s=!1,m=void 0;try{for(var p,f=i[Symbol.iterator]();!(l=(p=f.next()).done);l=!0){var v=p.value;if(this._isVariant(v)){if(!e&&o===v.props.name)return v;c.push(v),u.push(N(v.props.weight))}}}catch(d){s=!0,m=d}finally{try{l||null==f.return||f.return()}finally{if(s)throw m}}var y=_(u,j(r));if(-1===y)return null;var b=c[y];return this._onChoice(b),b}},{key:"_isVariant",value:function(e){if(!h.a.isValidElement(e))return!1;if(!e.type.isVariant)throw new Error("Experiment children must be Variant components.");return!0}},{key:"_onChoice",value:function(e){var t=this.props,n=t.onChoice,r=t.onRawChoice,a=t.name;n instanceof Function&&n(a,e.props.name),r instanceof Function&&r(this,e)}},{key:"render",value:function(){return this.state.activeVariant}}]),t}(f.Component);O(A,"propTypes",{name:y.a.string.isRequired,onChoice:y.a.func,onRawChoice:y.a.func,userIdentifier:y.a.oneOfType([y.a.string,y.a.number]),variantName:y.a.string});var R=function(e){function t(){return b(this,t),k(this,x(t).apply(this,arguments))}return S(t,e),g(t,[{key:"getName",value:function(){return this.props.name}},{key:"getWeight",value:function(){return N(this.props.weight)}},{key:"render",value:function(){return this.props.children}}]),t}(f.Component);O(R,"propTypes",{name:y.a.string.isRequired,weight:y.a.oneOfType([y.a.string,y.a.number])}),O(R,"isVariant",!0);var B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).experiment=a.a.createRef(),n.onClick=n.onClick.bind(Object(p.a)(Object(p.a)(n))),n.onChoice=n.onChoice.bind(Object(p.a)(Object(p.a)(n))),n.onRawChoice=n.onRawChoice.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onClick",value:function(){var e=this.experiment.current;alert('Experiment name: "'.concat(e.getName(),'"\n')+'Variant name: "'.concat(e.getActiveVariantName(),'"'))}},{key:"onChoice",value:function(e,t){console.log('Experiment name: "'.concat(e,'"\n')+'Variant name: "'.concat(t,'"'))}},{key:"onRawChoice",value:function(e,t){console.log('Experiment name: "'.concat(e.getName(),'"\n')+'Variant name: "'.concat(t.props.name,'"\n')+"Variant weight: ".concat(t.props.weight))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"block"},a.a.createElement("h1",null,"Experiment #1"),a.a.createElement(A,{ref:this.experiment,name:"Experiment #1",onChoice:this.onChoice},a.a.createElement(R,{name:"A"},a.a.createElement("div",null,"Section A"),a.a.createElement("button",{onClick:this.onClick},"Click me")),a.a.createElement(R,{name:"B",weight:2},a.a.createElement("div",null,"Section B"),a.a.createElement("button",{onClick:this.onClick},"Click me")),a.a.createElement(R,{name:"C"},a.a.createElement("div",null,"Section C"),a.a.createElement("button",{onClick:this.onClick},"Click me")))),a.a.createElement("div",{className:"block"},a.a.createElement("h1",null,"Experiment #2"),a.a.createElement("span",null,'(userIdentifier="something")'),a.a.createElement(A,{name:"Experiment #2",userIdentifier:"something",onRawChoice:this.onRawChoice},a.a.createElement(R,{name:"A"},a.a.createElement("div",null,"Section A")),a.a.createElement(R,{name:"B",weight:2},a.a.createElement("div",null,"Section B")))),a.a.createElement("div",{className:"block"},a.a.createElement("h1",null,"Experiment #3"),a.a.createElement("span",null,'(variantName="B")'),a.a.createElement(A,{name:"Experiment #3",variantName:"B"},a.a.createElement(R,{name:"A"},a.a.createElement("div",null,"Section A")),a.a.createElement(R,{name:"B"},a.a.createElement("div",null,"Section B")))),a.a.createElement("a",{href:"https://github.com/expert-m/react-split-testing/tree/master/examples/simple",target:"_blank",rel:"noopener noreferrer",className:"link"},"GitHub"))}}]),t}(r.Component);n(20);o.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.b4d5d4f4.chunk.js.map