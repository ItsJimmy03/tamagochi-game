(this.webpackJsonptama=this.webpackJsonptama||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(18),i=n.n(a),r=(n(23),n(24),n(2)),o=n(3),j=n(5),l=n(4),h=n(7),u=n.n(h),d=n.p+"static/media/cookie.3f5aaed0.png",b=n(0),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={treats:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("/api/treats").then((function(t){e.setState({treats:t.data.treats}),console.log(t.data.treats[0].name)}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"black-overlay",children:Object(b.jsx)("div",{className:"treat-container",children:Object(b.jsxs)("div",{className:"treat-blocks",children:[Object(b.jsx)("div",{className:"exitButton",onClick:this.props.onOverlayClick,children:"X"}),Object(b.jsx)("h3",{children:"Treat Inventory"}),this.state.treats.map((function(t){return Object(b.jsxs)("div",{className:"treatBlock "+t.name,onClick:e.props.onTreatItemTwo,children:[Object(b.jsx)("img",{src:d}),Object(b.jsxs)("div",{className:"desc",children:[Object(b.jsx)("h4",{children:t.name}),Object(b.jsx)("p",{children:t.details})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h4",{children:["Hunger: ",t.hunger]}),Object(b.jsxs)("h4",{children:["Hydration: ",t.thirst]})]})]})}))]})})})}}]),n}(c.Component),p=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"buttom-nav",children:Object(b.jsxs)("div",{className:"nav-grid",children:[Object(b.jsx)("div",{className:"nav-button one",onClick:this.props.onTreatClick}),Object(b.jsx)("div",{className:"nav-button two",onClick:this.props.onTreatClick}),Object(b.jsx)("div",{className:"nav-button three",onClick:this.props.onTreatClick}),Object(b.jsx)("div",{className:"nav-button four",onClick:this.props.onTreatClick}),Object(b.jsx)("div",{className:"nav-button five",onClick:this.props.onTreatClick})]})})}}]),n}(c.Component),m=n.p+"static/media/Pikachu.6c943090.png",v=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("section",{className:"game-content",children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:m})})})}}]),n}(c.Component),x=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){u.a.get("/").then((function(e){}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"hunger",children:[Object(b.jsx)("img",{src:d}),Object(b.jsx)("p",{children:"Full"})]})}}]),n}(c.Component),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"thirst",children:[Object(b.jsx)("img",{src:"https://static.vecteezy.com/system/resources/previews/002/641/118/non_2x/water-bottle-icon-vector.jpg"}),Object(b.jsx)("p",{children:"Hydrated"})]})}}]),n}(c.Component),f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("nav",{className:"top-nav",children:Object(b.jsxs)("div",{className:"nav-button-status",children:[Object(b.jsxs)("div",{className:"emotion",children:[Object(b.jsx)("img",{src:"https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_grande.png"}),Object(b.jsx)("p",{children:"Happy"})]}),Object(b.jsxs)("div",{className:"nav-button-status-hun",children:[Object(b.jsx)(x,{}),Object(b.jsx)(k,{})]})]})})}}]),n}(c.Component),y=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.onMouseMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(e){var t=document.querySelector(".game-window").getBoundingClientRect().left,n=document.getElementById("treat"),c=e.x-t-20,s=e.y-20;n.style.left=c+"px",n.style.top=s+"px"}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"treat",children:Object(b.jsx)("img",{onClick:this.props.onFeedPet,src:d})})}}]),n}(c.Component),g=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("/treats").then((function(t){e.state={treats:t.data.treats},console.log("request work!")}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"black-overlay",children:Object(b.jsx)("div",{className:"treat-container",children:Object(b.jsxs)("div",{className:"treat-blocks",children:[Object(b.jsx)("div",{className:"exitButton",onClick:this.props.onOverlayClick,children:"X"}),Object(b.jsx)("h3",{children:"Shop"}),Object(b.jsxs)("div",{className:"treatBlock",onClick:this.props.onShopItem,children:[Object(b.jsx)("img",{src:"https://cdn.pixabay.com/photo/2020/11/28/11/25/cookie-5784367_960_720.png"}),Object(b.jsxs)("div",{className:"desc",children:[Object(b.jsx)("h4",{children:"Cookie"}),Object(b.jsx)("p",{children:"A cookie is a baked or cooked snack or dessert that is typically small, flat and sweet. It usually contains flour, sugar, egg, and some type of oil, fat, or butter."})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"5 Hunger"}),Object(b.jsx)("h4",{children:"0 Thirst"}),Object(b.jsx)("h4",{children:"$5"})]})]})]})})})}}]),n}(c.Component),C=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"prompt-box",children:Object(b.jsxs)("div",{className:"prompt-grid",children:[Object(b.jsx)("p",{children:"Are you sure you want to buy X item for X amount?"}),Object(b.jsxs)("div",{className:"prompt-buttons",children:[Object(b.jsx)("button",{onClick:this.props.onClickNo,children:"No"}),Object(b.jsx)("button",{onClick:this.props.onYesButton,children:"Yes"})]})]})})}}]),n}(c.Component),N=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"black-overlay",children:Object(b.jsx)("div",{className:"treat-container",children:Object(b.jsxs)("div",{className:"treat-blocks",children:[Object(b.jsx)("div",{className:"exitButton",onClick:this.props.onOverlayClick,children:"X"}),Object(b.jsx)("h3",{children:"Settings"}),Object(b.jsx)("div",{className:"settingBlock",onClick:this.props.onSwap,children:Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Swap Pet"})})}),Object(b.jsx)("div",{className:"settingBlock",onClick:this.props.onClickMenu,children:Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Quit"})})})]})})})}}]),n}(c.Component),w=n.p+"static/media/charizard.465d670c.png",S=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"black-overlay",children:Object(b.jsx)("div",{className:"treat-container",children:Object(b.jsxs)("div",{className:"treat-blocks",children:[Object(b.jsx)("div",{className:"exitButton",onClick:this.props.onOverlayClick,children:"X"}),Object(b.jsx)("h3",{children:"Pet Swap"}),Object(b.jsxs)("div",{className:"treatBlock",onClick:this.props.onPika,children:[Object(b.jsx)("img",{src:w}),Object(b.jsxs)("div",{className:"desc",children:[Object(b.jsx)("h4",{children:"Charizard"}),Object(b.jsx)("p",{children:"Age: 10 minutes"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Hunger: Full"}),Object(b.jsx)("h4",{children:"Hydration: Dehydrated"})]})]}),Object(b.jsxs)("div",{className:"treatBlock",onClick:this.props.onChari,children:[Object(b.jsx)("img",{src:m}),Object(b.jsxs)("div",{className:"desc",children:[Object(b.jsx)("h4",{children:"Pikachu"}),Object(b.jsx)("p",{children:"Age: 5 minutes"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Hunger: Full"}),Object(b.jsx)("h4",{children:"Hydration: Full"})]})]})]})})})}}]),n}(c.Component),T=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("section",{className:"game-content",children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:w})})})}}]),n}(c.Component),P=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={pika:!0,chari:!1,treatInventory:!1,game:!1,shop:!1,settings:!1,treat:!1,thirst:5,hunger:5,swap:!1},e.onTreatClickTwo=function(t){var n="nav-button ";t.target.className==n+"one"?e.setState({treatInventory:!0}):t.target.className==n+"two"?e.setState({game:!0}):t.target.className==n+"four"?e.setState({shop:!0}):t.target.className==n+"five"&&e.setState({settings:!0})},e.onCloseOverlay=function(){e.setState({treatInventory:!1,game:!1,shop:!1,settings:!1,treat:!1,swap:!1})},e.OnTreatShop=function(){e.setState({shopPrompt:!0})},e.onClickYes=function(){e.setState({shop:!0,shopPrompt:!1})},e.onTreatItem=function(){e.setState({treatInventory:!1,treat:!0})},e.onFeed=function(){e.setState({hunger:3,treat:!1})},e.onSwapPet=function(){e.setState({swap:!0})},e.onChariSwap=function(){e.setState({pika:!0,chari:!1,swap:!1,settings:!1})},e.onPikaSwap=function(){e.setState({pika:!1,chari:!0,settings:!1,swap:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("main",{children:Object(b.jsxs)("div",{className:"game-window",children:[Object(b.jsx)(f,{props:this.state}),this.state.pika&&Object(b.jsx)(v,{}),this.state.chari&&Object(b.jsx)(T,{}),Object(b.jsx)(p,{onTreatClick:this.onTreatClickTwo}),this.state.treatInventory&&Object(b.jsx)(O,{onOverlayClick:this.onCloseOverlay,onTreatItemTwo:this.onTreatItem}),this.state.shop&&Object(b.jsx)(g,{onOverlayClick:this.onCloseOverlay,onShopItem:this.OnTreatShop}),this.state.shopPrompt&&Object(b.jsx)(C,{onYesButton:this.onClickYes}),this.state.settings&&Object(b.jsx)(N,{onOverlayClick:this.onCloseOverlay,onClickMenu:this.props.onClickGame,onSwap:this.onSwapPet}),this.state.treat&&Object(b.jsx)(y,{onFeedPet:this.onFeed}),this.state.swap&&Object(b.jsx)(S,{onOverlayClick:this.onCloseOverlay,onChari:this.onChariSwap,onPika:this.onPikaSwap})]})})})}}]),n}(c.Component),I=n.p+"static/media/logo.d66de526.png",B=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("section",{className:"menu-content",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:I})}),Object(b.jsxs)("div",{className:"button-menu",children:[Object(b.jsx)("div",{onClick:this.props.onClickGame,children:Object(b.jsx)("h3",{children:"Play"})}),Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Sign Up"})})]})]})}}]),n}(c.Component),M=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("main",{children:Object(b.jsx)("div",{className:"menu-window",children:Object(b.jsx)(B,{onClickGame:this.props.onClickGame})})})})}}]),n}(c.Component),F=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={game:!1,menu:!0},e.onOpenGame=function(){e.setState({game:!0,menu:!1})},e.onOpenMenu=function(){e.setState({game:!1,menu:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[this.state.menu&&Object(b.jsx)(M,{onClickGame:this.onOpenGame}),this.state.game&&Object(b.jsx)(P,{onClickGame:this.onOpenMenu})]})}}]),n}(c.Component);var H=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(F,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.88f9e187.chunk.js.map