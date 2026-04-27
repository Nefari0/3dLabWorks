(this.webpackJsonp3depot=this.webpackJsonp3depot||[]).push([[0],Array(30).concat([function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},,,,,function(e,t,s){},,,,,,,,,function(e,t,s){},,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,function(e,t){},,,,,,,,,,function(e,t,s){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,s){},,,function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(3),n=s.n(i),o=s(33),a=s.n(o),r=(s(74),s(42),s(138),s(4)),c=s.n(r);s(97);const l={user:{},isLoggedIn:!1,isLoading:!1,loginError:!1,loginOpen:!1},d="LOGIN_USER",h="LOGOUT_USER",p="REGISTER_USER",m="UPDATE_USER",u="SHOW_DATA",g="AUTO_LOGIN",x="OPEN_LOGIN";function j(e){return{type:x,payload:e}}function b(e,t,s,i){return{type:d,payload:c.a.post("/auth/login",{user_name:e,password:t,last_visit:s,visited:i})}}function w(e,t,s,i,n,o){return{type:p,payload:c.a.post("/auth/register",{user_name:e,password:t,email:s,first_name:i,is_admin:n,is_sudo:o})}}function f(e){return{type:m,payload:e}}var O=s(7),v=(s(101),s(5));const y=v.c.header`
    position: relative;
    margin: none;
    height: 60px;
    min-width: 300px;
    background: linear-gradient(0deg,#5077be,#6495ed);
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`,k=v.c.a`
    position:relative;
    margin:none;
    width:100px;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`,_=v.c.img`    
    position: relative;
    height: 50px;
    @media (max-width:${325}px) {display: none;}
    @media (max-width:400px) {}
`,L=v.c.img`    
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #2D0E94;
    box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    display:none;
    
    @media (max-width:${325}px) {display:block;}
`,N=v.c.img`
    position: relative;
    height: 50px;
    width: 228px;
    margin-top: 8px;

    @media (max-width:485px) {
        left: -20px;  
        -webkit-transform: scale(.75);
        -ms-transform: scale(.75);
        transform: scale(.75);
    }
    @media (max-width:${325}px) {
        left:-40px;
    }
`;var C=s(0);const I={margin:"auto",marginLeft:"10px",marginRight:"10px",height:"40px",width:"40px",opacity:"60%",color:"#6495ed",paddingTop:"10px"},S=e=>{let{...t}=e;return Object(C.jsx)("svg",{...t,xmlns:"http://www.w3.org/2000/svg",className:"comment-menu small-icon",style:{marginBottom:"10px",marginRight:"0px",height:"40px",width:"40px",opacity:"60%"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})})},M=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),U=()=>Object(C.jsx)("svg",{style:I,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),F=()=>Object(C.jsx)("svg",{style:I,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),T=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),P=e=>{let{...t}=e;return Object(C.jsx)("svg",{className:"close-button",style:{color:"#fff",height:"35px",width:"35px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",...t,children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})},D=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})}),E=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{color:"#fff",marginLeft:"20[x"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),R=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),A=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),B=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})}),$=()=>Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"header-menu-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"})}),z=v.b`

    svg {
        position: absolute;
        height: 25px;
        border-radius: 50%;
        color: #fff;
        bottom: -5px;
        right: 0px;
    }

    img {display:block;}
`,V=v.c.div`
    width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    right: 20px;
    
    img {
        position: absolute;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        z-index: 0;
        border: 1px solid #3c598e;
        box-shadow: 0 4px 3px 0  rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
        top: 5px;
        display:none;
    }
    
    svg {
        height: 35px;
        width:35px;
        position:relative;
    }

    ${e=>{let{isLoggedIn:t}=e;return t&&z}}

    @media (min-width:820px) {
        display:none;
    }

    @media (max-width:400px) {
        -webkit-transform: scale(.75);
        -ms-transform: scale(.75);
        transform: scale(.75);

        right:0px;
    }
`;var G=e=>{let{photo:t,isLoggedIn:s,...i}=e;return Object(C.jsxs)(V,{isLoggedIn:s,...i,children:[Object(C.jsx)("img",{src:t||"https://firebasestorage.googleapis.com/v0/b/depot-7bb3e.appspot.com/o/Chris%20deMontigny%2Fphotos%2Fprofile-pic-placeholder.JPEG?alt=media&token=0f93dc94-dd77-4072-82bd-925a3b19acf3"}),Object(C.jsx)(D,{})]})},W=s(8);s(104),s(51);class H extends i.Component{render(){return Object(C.jsx)("div",{className:"agreement-container",children:Object(C.jsx)("p",{className:"agreement-text",children:"Any and all information and content that a User submits to, or uses with, the Sites or Services (e.g., content in the User\u2019s profile or postings, user-created designs), including any modifications, improvements, or alterations (\u201cModification\u201d) made to products available by Company or its authorized suppliers through MadModels3d (all such products collectively referred to herein as the \u201cMadModels3d Experimental Product\u201d) or to any print profiles, modes, or settings created by you using Company products (\u201cPrint Profile\u201d). You retain all your intellectual property rights in your User Content. Company does not claim ownership in any User Content. You are solely responsible for your User Content, and you assume all risks associated with use of your User Content, including any reliance on its accuracy, completeness, or usefulness by others, or any disclosure of your User Content by you that makes you or any third party personally identifiable. Unless Company states otherwise in a writing to you, you may not state or imply that your User Content is in any way provided, sponsored, or endorsed by the Company. The Company is not obligated to backup any User Content and User Content may be deleted at any time. You are solely responsible for creating backup copies of your User Content if you desire."})})}}var J=H;var q=Object(O.b)(function(e){return e},{registerUser:w,loginUser:b})(e=>{const{isLoggedIn:t,saveSession:s,current_user:n}=e,{user:o,photo:a}=e.user.user,[r,c]=Object(i.useState)(""),[l,d]=Object(i.useState)(""),[h,p]=Object(i.useState)(!0),[m,u]=Object(i.useState)(!1),[g,x]=Object(i.useState)(""),[j,b]=Object(i.useState)(""),[w,f]=Object(i.useState)(""),[O,v]=Object(i.useState)(""),[y]=Object(i.useState)(!1),[k]=Object(i.useState)(!1),[_,L]=Object(i.useState)(!1),[N,I]=Object(i.useState)(!0),S=()=>{u(!m)},M=()=>{L(!_)};return Object(C.jsxs)("div",{className:`plogin-container ${!m||`plogin-Container r-selected ${!!N||"plogin-container r-selected agree-view"}`}`,children:[Object(C.jsxs)("section",{className:`login-title ${!m||`rlogin-title ${!!N||"rlogin-title rlogin-title-agreement"}`}`,children:[Object(C.jsx)("svg",{className:"close-button",style:{color:"#fff",height:"35px",width:"35px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},onClick:e.exit,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),m?Object(C.jsx)("h2",{style:{textTransform:"none"},children:"Create Account"}):t?Object(C.jsx)("h2",{style:{textTransform:"none"},children:"Log Out"}):Object(C.jsx)("h2",{style:{textTransform:"none"},children:"Log In to Your Accout"})]}),m?Object(C.jsxs)("section",{className:"rform",children:[N?Object(C.jsxs)("form",{style:{height:"450px"},children:[Object(C.jsx)("input",{value:r,onChange:e=>c(e.target.value),placeholder:"Username",className:"log-input log-form-length disabled",style:{marginLeft:"2px"}}),Object(C.jsx)("input",{value:l,onChange:e=>d(e.target.value),placeholder:"Password",className:"log-input log-form-length disabled",style:{marginLeft:"2px",marginTop:"17px",marginBottom:"2px"},type:"password"}),Object(C.jsx)("input",{value:g,onChange:e=>x(e.target.value),placeholder:"Email",className:"log-input log-form-length disabled",style:{marginLeft:"2px",marginTop:"18px",marginBottom:"2px"}}),Object(C.jsx)("input",{value:j,onChange:e=>b(e.target.value),placeholder:"First Name",className:"log-input log-form-length disabled",style:{marginLeft:"2px",marginTop:"17px",marginBottom:"2px"}}),Object(C.jsx)("input",{value:w,onChange:e=>f(e.target.value),placeholder:"Last Name",className:"log-input log-form-length disabled",style:{marginLeft:"2px",marginBottom:"20px",marginTop:"17px"}})]}):Object(C.jsx)(J,{}),Object(C.jsxs)("div",{className:"keep-session-check",children:[_?Object(C.jsx)("svg",{onClick:M,style:{color:"#3c598e",marginLeft:"0px",marginRight:"2px",height:"20px",width:"20px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}):Object(C.jsx)("svg",{onClick:M,style:{color:"#3c598e",marginLeft:"0px",marginRight:"2px",height:"20px",width:"20px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(C.jsx)("p",{style:{fontSize:"10px",marginBottom:"0px",marginLeft:"0px"},onClick:()=>{I(!N)},children:"I agree to terms and conditions"})]}),N?Object(C.jsx)("a",{className:"login-button",style:{marginTop:"10px"},onClick:()=>{if(!0!==_)return alert("please agree to conditions");e.registerUser(r,l,g,j,y,k),e.exit()},children:"Sign Up"}):null,Object(C.jsx)("div",{className:"build-account",children:Object(C.jsx)("a",{style:{fontWeight:"400",color:"blue"},onClick:S,children:"Cancel"})}),Object(C.jsx)("div",{className:"r-form-fake-bottom"})]}):Object(C.jsxs)("section",{className:"form",children:[t?Object(C.jsx)("img",{style:{height:"100px",borderRadius:"50%",marginTop:"20px"},src:a}):null,t?null:Object(C.jsx)("input",{value:r,onChange:e=>c(e.target.value),placeholder:"Username",className:"log-input log-form-length disabled",style:{marginBottom:"5px",marginTop:"21px"}}),t?null:Object(C.jsx)("input",{value:l,onChange:e=>d(e.target.value),placeholder:"Password",className:"log-input log-form-length disabled",style:{marginBottom:"5px",marginTop:"17px"},type:"password"}),t?Object(C.jsx)("div",{className:"keep-session log-form-length"}):Object(C.jsxs)("ul",{className:"keep-session log-form-length",children:[Object(C.jsxs)("div",{className:"keep-session-check",children:[Object(C.jsx)("svg",{onClick:()=>p(!h),style:{color:"#3c598e",marginLeft:"0px",marginRight:"2px",height:"20px",width:"20px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:!1===h?Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}):Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(C.jsx)("p",{style:{fontSize:"10px",marginBottom:"0px",marginLeft:"0px"},children:"stay logged in?"})]}),Object(C.jsx)("p",{style:{fontSize:"10px",marginBottom:"0px",marginLeft:"0px",color:"blue"},children:"Forgot password?"})]}),t?Object(C.jsx)("a",{className:"login-button",onClick:e.logout,children:"Log Out"}):Object(C.jsx)("a",{className:"login-button",onClick:async()=>{e.execute(r,l,h)},children:"Log In"}),t?Object(C.jsxs)("div",{className:"build-account",children:[Object(C.jsx)("p",{children:"Logged in as:"}),Object(C.jsx)("a",{style:{fontWeight:"400",color:"blue"},children:o})]}):Object(C.jsxs)("div",{className:"build-account",children:[Object(C.jsx)("p",{children:"Need an account?"}),Object(C.jsx)("a",{style:{fontWeight:"400",color:"blue"},onClick:S,children:"Sign up"})]})]})]})});s(105);class Y extends i.Component{render(){return Object(C.jsxs)("div",{className:"load-box",children:[Object(C.jsx)("div",{className:"load-background"}),Object(C.jsx)("div",{className:"load"})]})}}var X=Y,Z=s.p+"static/media/cdLabs-logo-1-alpha.8a76484b.png",K=s.p+"static/media/MM3D2333x50orthofff.66b36e66.png",Q=s.p+"static/media/CDinits.d5585836.png";const ee=v.b`
    height:0px;
    width:0px;
    transition: all 500ms;
    
    ul {
        display:none;
    }
`,te=v.c.nav`

        
    @media (min-width:820px) {
        display:none;
    }

    border-radius: 5px;
    list-style-type: none;
    background-color: #6495ed;
    box-shadow: 0px 5px 20px -7px #000000;
    border: solid 1px #3c598e;
    margin-top: 60px;
    margin-right: 40px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-items: baseline;
    overflow: hidden;
    z-index: 15;
    width:${125}px;
    height:${e=>{let{isLoggedIn:t}=e;return t?"150":"110"}}px;
    transition: all 500ms;

    ul {
        width:250px;
    }
    
    li {
        text-align:left;
        color:#fff;
        margin-left:5px;
        display:flex;
    }

    svg {
        height: 25px;
        width: 25px;
        padding:0px;
        margin-top:2px;
        margin-right:10px;
    }

    a {text-decoration:none;}

    ${e=>{let{isMenuOpen:t}=e;return!t&&ee}}
`;var se=s(34);var ie=e=>{const{isLoggedIn:t,isMenuOpen:s,toggleLogin:i,toggleMenu:n}=e;return Object(C.jsx)(te,{isMenuOpen:s,isLoggedIn:t,children:Object(C.jsxs)("ul",{style:{paddingTop:"10px"},onClick:()=>n(),children:[Object(C.jsxs)("li",{onClick:i,children:[t?Object(C.jsx)(R,{}):Object(C.jsx)(E,{}),t?"Logout":"Login"]}),Object(C.jsx)(se.Link,{to:"/about",children:Object(C.jsxs)("li",{children:[Object(C.jsx)(A,{}),"About"]})}),Object(C.jsx)(se.Link,{to:"/explore",children:Object(C.jsxs)("li",{children:[Object(C.jsx)(B,{}),"Explore"]})}),t&&Object(C.jsx)(se.Link,{to:"/user",children:Object(C.jsxs)("li",{children:[Object(C.jsx)($,{}),"My page"]})})]})})};class ne extends i.Component{constructor(e){super(),this.state={username:{},user_name:"",password:"",setPermission:!0,isLoggedInState:null,saveSession:!1,unique_id:null},this.handleLogging=this.handleLogging.bind(this),this.resetState=this.resetState.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.handleClick=this.handleClick.bind(this),this.handlePassword=this.handlePassword.bind(this),this.handleUserName=this.handleUserName.bind(this),this.toggleLogin=this.toggleLogin.bind(this),this.handleLogout=this.handleLogout.bind(this),this.setSaveSession=this.setSaveSession.bind(this),this.sessionToWindow=this.sessionToWindow.bind(this)}sessionToWindow(e,t){localStorage.setItem(e,t)}async componentDidMount(e){const t=localStorage.visited,s=(localStorage.assigned_browser,localStorage.user_name),i=new Date;void 0!=t&&void 0!=localStorage.user_name&&this.props.autoLogin(s,i,t).catch(e=>console.log("there was an error",e));const n=()=>{const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e()+e()+"-"+e()};if(void 0===t){const e=n(),t=n();this.sessionToWindow("visited",e),this.sessionToWindow("assigned_browser",t)}void 0!==t&&this.setState({unique_id:t})}componentWillUpdate(){const{setPermission:e}=this.state,{user:t}=this.props;!0===t.isLoggedIn&&!0===e&&this.setState({username:t.user.user.user,isLoggedInState:t.isLoggedIn,setPermission:!1})}resetState(){this.setState({setPermission:!1,username:{},user_name:"",password:"",isMenuOpen:!1,toggleHideLoggin:!0})}handleLogging(){const{user_name:e,password:t}=this.state,{loginUser:s,logoutUser:i}=this.props,n=new Date,o=localStorage.visited;this.toggleLogin(),!1===this.props.isLoggedIn?s(e,t,n,o):i()}toggleMenu(){this.setState({isMenuOpen:!this.state.isMenuOpen})}async handleClick(e,t,s){const{menuOpen:i}=this.props.user,{user_name:n,password:o}=this.state,a=localStorage.visited,r=new Date;await this.props.loginUser(e,t,r,a),!0===s&&!0===this.props.user.isLoggedIn?localStorage.setItem("user_name",e):localStorage.removeItem("visited"),this.toggleLogin(),this.setState({user_name:"",password:""})}handleLogout(){const{menuOpen:e}=this.props.user;localStorage.removeItem("user_name"),localStorage.setItem("visited",(()=>{const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e()+e()+"-"+e()})()),this.toggleLogin(),this.props.logoutUser()}handleUserName(e){this.setState({...this.state,user_name:e})}handlePassword(e){this.setState({...this.state,password:e})}toggleLogin(){const{loginOpen:e}=this.props.user;this.props.remoteLogin(!e)}setSaveSession(){this.setState({saveSession:!this.state.saveSession})}render(){const{saveSession:e,isMenuOpen:t,user_name:s}=this.state,{isLoggedIn:i,isLoading:n,loginOpen:o}=this.props.user,{photo:a,user:r}=this.props.user.user;return Object(C.jsxs)(y,{children:[!0===n?Object(C.jsx)(X,{}):null,Object(C.jsxs)(k,{href:"https://chris.madmodels3d.com/",target:"_blank",children:[Object(C.jsx)(_,{src:Z}),Object(C.jsx)(L,{src:Q})]}),Object(C.jsx)(W.c,{to:"/",style:{textDecoration:"none",color:"#fff"},children:Object(C.jsx)(N,{className:"mm3d-logo",src:K})}),Object(C.jsxs)("ul",{className:"desktop-nav",children:[Object(C.jsx)(W.c,{to:"/about",style:{textDecoration:"none"},children:Object(C.jsx)("li",{className:"link-item",children:Object(C.jsx)("a",{children:"About"})})}),Object(C.jsx)(W.c,{to:"/explore",style:{textDecoration:"none"},children:Object(C.jsx)("li",{className:"link-item",children:Object(C.jsx)("a",{children:"Explore"})})}),i?Object(C.jsx)(W.c,{to:"/user",style:{textDecoration:"none"},children:Object(C.jsx)("li",{className:"link-item",children:Object(C.jsx)("a",{children:r})})}):Object(C.jsx)("div",{}),Object(C.jsx)("a",{className:"link-button",onClick:this.toggleLogin,children:i?"logout":"Login"})]}),Object(C.jsx)(G,{onClick:this.toggleMenu,isLoggedIn:i,photo:a}),Object(C.jsx)(ie,{isMenuOpen:t,isLoggedIn:i,toggleLogin:this.toggleLogin,toggleMenu:this.toggleMenu}),o?Object(C.jsx)(q,{current_user:s,setSaveSession:this.setSaveSession,logout:this.handleLogout,execute:this.handleClick,name:this.handleUserName,pass:this.handlePassword,hide:this.state.openLogin,exit:this.toggleLogin,isLoggedIn:this.props.user.isLoggedIn,saveSession:e}):Object(C.jsx)("div",{className:"blank-div"})]})}}var oe=Object(O.b)(function(e){return e},{loginUser:b,logoutUser:function(){return{type:h,payload:c.a.get("/auth/logout")}},updateUser:f,autoLogin:function(e,t,s){return{type:g,payload:c.a.post("/auth/browser/login",{user_name:e,last_visit:t,visited:s})}},remoteLogin:j})(ne),ae=s(13);const re={models:[],featured:[],isloading:!1},ce="GET_MODELS",le="GET_FEATURED";function de(){return{type:ce,payload:c.a.get("/api/project/join")}}s(37);var he=e=>{const t=e=>Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"});return Object(C.jsx)("div",{children:Object(C.jsx)("svg",{style:{margin:"auto",marginLeft:"10px",marginRight:"10px",height:"40px",width:"40px",opacity:"60%",color:"#6495ed",paddingTop:"10px"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(e=>{switch(e){case"download_icon":return Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"});case"large_heart":case"large_heart_dark":return t();case"edit_project":return Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"});case"comments":return Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"});case"folder":return Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":2,d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"});case"info":return Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"});case"largeX":return Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"});case"send":return Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})}})(e.params)})})};const pe={largeWidth:1e3,medWidth:600,smallWidth:300},me=v.c.p`
    padding: 10px;
    color: #222; 
    background: #fff;
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 1em to 1.5em;
    font-family: 'Inter', sans-serif;

    @media (max-width: 650px) {
        // width: 50%;
    }
`,ue=v.c.header`
    position: relative;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(0turn,#5077be,#6495ed);
`,ge=v.c.footer`
    background:none;
    border-radius: 0 0 10px 10px;
    border-bottom: 16px solid #6495ed;
`,xe=v.c.div`
    border-radius: 10px;
    margin: 10px;
    margin-left:15px;
    height: 350px;
    width: 280px;
    box-shadow: 0px 5px 20px -7px #000000;
    background-color: #fff;
    text-align: left;
    display: flex;
	flex-direction: column;
    justify-content: space-between;
    overflow:hidden;
    // border: 4px solid #6495ed;

    header {
        // display: flex;
        // align-items: center;
        // margin-top: 5px;
        // margin: 0px;
        // opacity: .8;
    }

    @media (max-height:520px) {height: 330px;}

    @media (max-width:650px) {
        width: 290px;
        margin-left:10px;
    }

    // @media (max-width:530px) {
    //     width
    // }
`,je=Object(v.c)(ue)`
    min-height: 60px;
    width: 298px;
    min-width: 0;
    display: flex;
    align-items: center;

    h5 {
        color:#fff;
        margin:0px;
        width:190px;
        min-height: 10px;
        font-size: 14px;
        position:relative;
        margin: 0;
    }
    
    i {
        margin:auto;
        position:relative;
        color:#283c5f;
        // color:#0a0f18;
        font-weight:500;
    }
`,be=v.c.img`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 5px;
    margin-left: 10px;
`,we=v.c.section`
    background-color: #000;
    overflow: hidden;
    margin-bottom: auto;
    max-height: 160px;

    img {
        opacity: 0.7;
        width: 280px;
        max-height: 188px;
        -webkit-transform: scale(2.15);
        -ms-transform: scale(2.15);
        transform: scale(1.15);
        -webkit-transition: -webkit-transform 0.5s, opacity 0.5s;
        transition: transform 0.5s, opacity 0.5s;
        overflow: hidden;

        &:hover {
            opacity: 1;
            -webkit-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
        }
    }

`,fe=v.c.section`
    border-top:1px solid #555;
    height: 200px;
    display: flex;
    align-items: center;
`,Oe=v.c.div`
    margin-right: 15px;
    padding-right: 1px;

    aside {
        border-left:1px solid #555555;
        height: 40px;
        width: 131px;
        margin: none;
        display: flex;
        align-items: center;
        color: #555;
        font-size: 15px;

        svg {
            margin-left: 10px;
            margin-bottom: 7px;
        }
    }

    @media (max-width:1000px) {
        margin-right: 15px;
        padding-right: 1px;
    }
`,ve=Object(v.c)(ge)`
    height:60px;
    width:100%;
`;var ye=Object(O.b)(function(e){return e},{getModels:de,updateUser:f,remoteLogin:j})(e=>{const{firebase_url:t,firebase_url01:s,name:n,user_name:o,model_id:a,photo_url:r,user_id:l,likes:d,catagory:h}=e.data,{isLoggedIn:p,id:m,user_likes:u}=e,[g,x]=Object(i.useState)(0),[j,b]=Object(i.useState)(!1);Object(i.useEffect)(()=>{x(d),!0===v()&&!1===j&&b(!0)},[]);const w=()=>{window.scrollTo(0,0),e.remoteLogin(!0)},f=async e=>{console.log("params",e),c.a.get(`/api/like/update/${e}`).then(e=>{const{likes:t}=e.data[0];x(t)})},O=()=>{!0===p&&void 0!=m?(async(e,t)=>{const s=e,i=t;await c.a.post("/api/projects/like",{user_id:s,model_id:i}),await f(i),await b(!j),await v(j)})(m,a):w()},v=t=>!0===e.projectIsLiked(a,u);return Object(C.jsxs)(xe,{children:[Object(C.jsxs)(je,{children:[Object(C.jsx)(W.c,{to:`/viewuser/${l}`,children:Object(C.jsx)(be,{src:(()=>{const{user_photo_url:t}=e;return void 0!=r?r:t})()})}),Object(C.jsxs)("h5",{style:{paddingBottom:"",paddingTop:"",fontWeight:"40"},children:[n,Object(C.jsx)("br",{}),Object(C.jsxs)("i",{children:["by ",(()=>{const{current_user_name:t}=e;return void 0!=o?o:t})()]})]})]}),Object(C.jsx)(W.c,{to:`/projectdetails/${a}`,children:Object(C.jsx)(we,{children:Object(C.jsx)("img",{src:s})})}),Object(C.jsxs)(fe,{children:[Object(C.jsx)("div",{onClick:()=>!0===p||"hyperlink"===h?window.open(t):w(),children:Object(C.jsx)(he,{params:"download_icon",fill:"none",stroke:"currentColor"})}),p||"hyperlink"===h?Object(C.jsx)("a",{style:{marginRight:"10px",textDecoration:"none"},href:`${t}`,target:"_blank",rel:"noopener noreferrer",children:"hyperlink"===h?"visit":"download"}):Object(C.jsx)("a",{style:{marginRight:"10px",color:"#555"},onClick:()=>w(),children:"download"}),Object(C.jsxs)(Oe,{children:[Object(C.jsxs)("aside",{style:{borderBottom:"1px solid #555"},children:[!1===j?Object(C.jsx)("svg",{className:"small-icon",onClick:O,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}):Object(C.jsx)("svg",{className:"small-icon",onClick:O,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),Object(C.jsx)("p",{style:{marginLeft:"10px"},children:g})]}),Object(C.jsxs)("aside",{children:[Object(C.jsx)("svg",{className:"small-icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),Object(C.jsx)("p",{style:{marginLeft:"10px"},children:"share"})]})]})]}),Object(C.jsx)(ve,{})]})}),ke=s(40),_e=s.n(ke);s(111);const Le=v.c.section`
    position: relative;
    border-radius: 10px;
    width: 297px;
    height: 350px;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display: flex;
    flex-direction: column;
	justify-content: space-between;
	align-items: center;

    @media (max-width:1000px) {
        width: 240px;
        margin-left:0px;
        margin-right:20px;
    }
    
`,Ne=Object(v.c)(ue)`
    color: #fff;
    position: absolute;
    text-transform: none;
    height: 60px;
    width: 298px;
    transition: all 100ms;
    margin: 0px;
    display: flex;
    align-items: center;
    z-index:1;
    // background: linear-gradient(0turn,#5077be,#6495ed);

    h5 {
        color:#fff;
        margin:0px;
        width:190px;
        min-height: 10px;
        font-size: 14px;
        position:relative;
        margin: 10px;
        font-weight:40;
    }

    i,
    a {
        text-decoration:none;
        color:#283c5f;
        font-weight:500;
    }

    div {
        margin-bottom: 5px;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: baseline;
        align-content: flex-end;
    }

    @media (max-width:1000px) {
        width: 241px;
    }
`,Ce=Object(v.c)(W.c)`
    height:15px;

    i {
        position:relative;
        margin:auto;
        bottom:12px;
    }
`,Ie=v.c.div`
    width:298px;
    height:191px;
    display: none;

    @media (max-width:1000px) {
        display: inline;
        margin: auto;
    }
`,Se=Object(v.c)(Ie)`
    display: inline;
    margin: auto;

    // background-color:pink;

    // iframe {
    //     display:none;
    // }


    @media (max-width:1000px) {
        display:none;
    }
`,Me=Object(v.c)(ge)`
    height:80px;
    width:100%;
`;var Ue=e=>{const{video_url:t,firebase_url:s,category:i,tag:n,photo_url:o,user_name:a,name:r,video_name:c,model_id:l}=e;return Object(C.jsxs)(Le,{children:[Object(C.jsxs)(Ne,{children:[Object(C.jsx)(W.c,{to:"/viewuser/12",children:Object(C.jsx)("img",{className:"video-user-photo",src:o})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("h5",{children:"dummy project"===r?c:r}),Object(C.jsx)(Ce,{to:"/viewuser/12",children:Object(C.jsxs)("i",{children:["Video by ",a]})})]})]}),Object(C.jsxs)("div",{className:"",style:{marginTop:"40px",xIndex:"0"},children:[Object(C.jsx)(Se,{children:Object(C.jsx)(_e.a,{className:"react-player",url:t,width:"298px",height:"191px",controls:!0})}),Object(C.jsx)(Ie,{children:Object(C.jsx)(_e.a,{className:"react-player",url:t,width:"240px",height:"150px",controls:!0})}),Object(C.jsxs)("div",{className:"video-info-container",children:[Object(C.jsx)("header",{className:"video-header",children:Object(C.jsxs)("p",{className:"video-header-text",children:[i,": ",n]})}),null===s?Object(C.jsx)("p",{className:"video-container-text",children:"There are no files associated with this video"}):Object(C.jsx)("p",{className:"video-container-text",children:Object(C.jsx)(W.c,{to:`/projectdetails/${l}`,children:"view details"})})]})]}),Object(C.jsx)(Me,{})]})};const Fe=v.c.div`
    width: ${350}px;
    height: ${350}px;
    position: relative;    
    margin: auto;
    top:-100px;
    -webkit-perspective: 1000px;
    -webkit-perspective-origin: 0px -100px;

    @media (max-width:2000px) {
      transform: scale(0.8);
    }
    
    @media (max-width:1070px) {
      transform: scale(0.6);
    }

    @media (max-width:450px) {
      -webkit-perspective: 1600px;
    }

    @media (max-height:520px) {
      transform: scale(0.4);
      top:-50px;
    }
`,Te=v.c.div`
    -webkit-transform-style: preserve-3d;  
    position:relative;
    margin:auto;

    transform: rotateY(${e=>{let{rotation:t}=e;return t}}deg);
    transition: all 1000ms;
    width: ${350}px;
    height: ${350}px;
`,Pe=v.c.figure`
    position: absolute;
    -webkit-transform-style: preserve-3d;
    width:${e=>{let{cubeParams:t}=e;return t}}px;
    height: ${e=>{let{cubeParams:t}=e;return t}}px;
    -webkit-transform: rotateY(${e=>{let{cubeRotations:t,i:s}=e;return t*s+1}}deg) translateZ(${e=>{let{cubeParams:t}=e;return t/2*3.14}}px);
    transition: all 1000ms;
    pointer-events: none;
`,De=v.c.div`
    -webkit-transform-style: preserve-3d;
    position: absolute;
    width: ${e=>{let{cubeParams:t}=e;return t}}px;
    height:400px;
    pointer-events: auto;

    -webkit-transform: rotateY(${e=>{let{rotationIters:t,cubeRotations:s,i:i}=e;return t}}deg) translateZ(${0}px);
    
    transition: all 1000ms;
    
`;var Ee=e=>{let{state:t,mappedModels:s,mappedVideos:i,cubeRotations:n}=e;const{yRotation:o}=t,a=[...s,...i],r=300*a.length,c=a.map((e,t)=>{const s=t+1,i=s*n+o;return Object(C.jsx)(Pe,{cubeParams:300,i:t+1,cubeRotations:n,rotationIters:i,yRotation:o*s,children:Object(C.jsx)(De,{rotationIters:-i,children:e})},t)});return Object(C.jsx)(Fe,{circumference:r,children:Object(C.jsx)(Te,{rotation:o,cubeParams:300*a.length/2,children:c})})},Re=s.p+"static/media/blender_background.a862b66c.png";const Ae=v.c.section`
    position:relative;
    height: 90vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(${Re});
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-items: baseline;
    // overflow-x: scroll;
    overflow:hidden;
    border-bottom: solid 20px #6495ed;

    @media (max-width:300px) {
        min-width: 300px;
    }

    @media (min-height:700px) {
        height: 92vh;
    }

    @media (min-height:850px) {
        height: 94vh;   
    }
`,Be=v.c.section`
    position:relative;
    height: 70vh;
    width: 100vw;
    display: flex;
    overflow: none;
    z-index: 0;
`,$e=v.b`
    border-radius:50%;
    position:absolute;
    z-index:1000000000000000000000;
    // top:80%;
    border:solid #fff 1px;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, .7);
    height:50px;
    width:50px;
`,ze=v.c.button`
    ${$e}
    left:3px;
`,Ve=v.c.button`
    ${$e}
    right:3px;
    `;class Ge extends i.Component{constructor(){super(),this.getFeaturedVideos=async()=>{this.setLoading();try{await this.props.getFeatured(),await c.a.get("/api/videos/featured").then(e=>{this.setState({videos:e.data,loading:!1})})}catch(e){alert("Content not available"),this.setLoading()}},this.state={projects:[],videos:[],user_name:"",password:"",userLikes:null,loading:!1,yRotation:0},this.stateHandler=this.stateHandler.bind(this),this.projectIsLiked=this.projectIsLiked.bind(this)}componentDidMount(){this.getFeaturedVideos()}setLoading(){this.setState({loading:!this.state.loading})}stateHandler(e,t){this.setState({[e]:t})}projectIsLiked(e,t){try{return t.filter(t=>t.model_id===e)[0].model_id===e}catch(s){console.log("user does not like this project",s)}}render(){const{loading:e,videos:t}=this.state,{isLoggedIn:s}=this.props.user,{user_likes:i,model_likes:n}=this.props.user.user,{featured:o}=this.props.models,a=360/[...t,...o].length,r=o.map(e=>Object(C.jsx)(ye,{data:e,projectIsLiked:this.projectIsLiked,isLoggedIn:s,model_likes:n,likes:e.likes,id:e.user_id,user_likes:i},e.model_id)),c=t.map(e=>Object(C.jsx)(Ue,{video_url:e.video_url,category:e.category,tag:e.tag,firebase_url:e.firebase_url,photo_url:e.photo_url,user_name:e.user_name,name:e.name,video_name:e.video_name,model_id:e.model_id},e.video_id));return Object(C.jsxs)(Ae,{children:[!e||Object(C.jsx)(X,{}),Object(C.jsx)(Be,{children:Object(C.jsx)(Ee,{state:this.state,props:this.props,setState:this.setState,projectIsLiked:this.projectIsLiked,mappedModels:r,mappedVideos:c,cubeRotations:a})}),Object(C.jsx)(ze,{onClick:()=>this.stateHandler("yRotation",this.state.yRotation+a),children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),Object(C.jsx)(Ve,{onClick:()=>this.stateHandler("yRotation",this.state.yRotation-a),children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})}}var We=Object(O.b)(function(e){return e},{loginUser:b,updateUser:f,getModels:de,getFeatured:function(){return{type:le,payload:c.a.get("api/featured/join")}}})(Ge);s(117);var He=e=>Object(C.jsxs)("div",{className:"group-page",children:[Object(C.jsx)("ul",{}),Object(C.jsx)("h3",{children:"group page"})]});s(30);const Je="GET_PROJECTS";function qe(){return{type:Je,payload:c.a.get("/api/projects/all")}}var Ye=s(26),Xe=s.n(Ye);const Ze=s(63).a.initializeApp({apiKey:"AIzaSyB6ImzEUWfnyXD6bcpNEN8ktaMSfos8Js0",authDomain:"depot-7bb3e.firebaseapp.com",projectId:"depot-7bb3e",storageBucket:"depot-7bb3e.appspot.com",messagingSenderId:"38861699624",appId:"1:38861699624:web:b1d9abfce822f3a4d2531d",measurementId:"G-DSTFFPFHLD"}),Ke=(Ze.firestore(),{isLoading:!1,url:{},error:!1}),Qe="DELETE_FILE",et="ADD_TO_FIREBASE",tt="REF_FROM_URL",st=e=>{const t=Ze.storage().refFromURL(e);return{type:Qe,payload:t.delete().then(function(e){})}},it=(e,t)=>{const s=Ze.storage().ref(t).child(e.name).put(e);return{type:et,payload:s}};s(118),s(119);const nt=v.c.section`
    position: fixed;
    top: 100px;
    height: 350px;
    width: 400px;
    z-index: 1000;

    @media(max-width:700px){
        width: 298px;

        img {
            width: 100%;
            box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
        }
    }
`,ot=v.c.button`
    position: absolute;
    background: linear-gradient(0turn,#5077be,#6495ed);
    height: 50px;
    width: 200px;
    border-radius: 2px;
    font-size: 14px;
    border:solid 1px #3c598e;
    z-index: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    color: #fff;

    @media (max-width:700px) {
        height: 25px;
        width: 80px;
        
`;var at=e=>{const{previewImageFile:t,photo_url:s}=e,i=()=>{e.handleInput("previewImageFile",null),e.handleInput("photo_url",null)};return Object(C.jsxs)(nt,{children:[Object(C.jsx)("img",{src:t}),Object(C.jsx)(ot,{style:{width:"50%"},onClick:()=>(async()=>{await e.addPhoto(s),await i()})(),children:"Submit"}),Object(C.jsx)(ot,{style:{right:"0px",width:"50%"},onClick:()=>i(["string"]),children:"Cancel"})]})};class rt extends i.Component{constructor(e){super(e),this.removeFileFromSpace=async()=>{const{firebase_url:e,model_id:t}=this.props.info;this.setIsLoading(),null!=e&&await this.props.deleteFile(e),await this.deleteAllImages(!0),await c.a.delete(`/api/project/delete/${t}`),this.setIsLoading(),this.props.setIsDeleted()},this.deleteAllImages=e=>{const{modelImages:t}=this.props;var s=[...t];!0===e&&s.map(e=>{this.props.deleteFile(e.photo_url)})},this.replaceModelFile=async()=>{const{photo_url:e,file_url:t}=this.state,{model_id:s,firebase_url:i}=this.props.info,{user_id:n}=this.props;this.setIsLoading();const o=await this.props.getRefFromUrl(i).payload;try{await this.props.deleteFile(i)}catch(c){console.log("this file doesnt exist")}const a=await this.props.addNewModel(t,o),r=await a.action.payload.ref.getDownloadURL();await this.newModelToDB(s,r),this.setIsLoading()},this.newModelToDB=(e,t)=>{c.a.post("/api/project/update/file",{url:t,model_id:e})},this.fileHandler=async(e,t,s)=>{const i=e.target.files[0];this.setState({[s]:i,[t]:URL.createObjectURL(i)})},this.handlePhoto=async e=>{var t=!1;if(e.target.files[0]&&(t=!0),t)try{Xe.a.imageFileResizer(e.target.files[0],400,267,"JPEG",100,0,e=>{console.log(e,"uri"),this.setState({previewImageFile:URL.createObjectURL(e),photo_url:e})},"file",298,191)}catch(s){console.log(s)}},this.setIsLoading=()=>{this.setState({isLoading:!this.state.isLoading})},this.passNewPhotoToFB=async()=>{const{photo_url:e}=this.state;this.addPhoto(e),this.setState({previewImageFile:null}),await this.props.getImages()},this.addPhoto=async e=>{const{model_id:t,info:s}=this.props,{user_id:i,name:n}=s;this.setIsLoading();const o=await this.props.addNewModel(e,`madmodels/projects/${i}/${n}/`),a=await o.action.payload.ref.getDownloadURL();await c.a.post("/api/project/photos/put",{model_id:t,name:n,photo_url:a}),await this.props.getImages(),this.setState({previewImageFile:null}),this.setIsLoading()},this.executeChange=async()=>{const{model_id:e}=this.props.info,{name:t,description:s}=this.state;this.setIsLoading(),await c.a.post("/api/project/edit/name",{name:t,description:s,model_id:e}),this.setIsLoading(),this.props.getDetails()},this.confirmDelete=()=>{this.setState({openDeleteConfirm:!this.state.openDeleteConfirm})},this.state={name:this.props.info.name,user_id:this.props.info.user_id,description:this.props.info.description,photo_url:null,file_url:null,isLoading:!1,imageUr1:null,openDeleteConfirm:!1,isLoading:!1,previewImageFile:null,isDeleted:!1,newImage:""},this.handleInput=this.handleInput.bind(this),this.executeChange=this.executeChange.bind(this),this.fileHandler=this.fileHandler.bind(this),this.addPhoto=this.addPhoto.bind(this),this.setIsLoading=this.setIsLoading.bind(this),this.removeFileFromSpace=this.removeFileFromSpace.bind(this),this.confirmDelete=this.confirmDelete.bind(this),this.newModelToDB=this.newModelToDB.bind(this),this.replaceModelFile=this.replaceModelFile.bind(this)}componentDidUpdate(){}handleInput(e,t){this.setState({[e]:t})}render(){const{previewImageFile:e,isLoading:t,openDeleteConfirm:s,photo_url:i,description:n,name:o,file_url:a}=this.state;return Object(C.jsxs)("div",{className:"edit-project-container",children:[t?Object(C.jsx)(X,{}):null,Object(C.jsx)("button",{style:{width:"30px",height:"20px",fontSize:"10px",marginLeft:"85%",marginTop:"10px"},onClick:()=>this.confirmDelete(),children:"delete"}),s?Object(C.jsxs)("div",{className:"select-delete",children:[Object(C.jsx)("p",{onClick:()=>this.removeFileFromSpace(),children:"yes"}),Object(C.jsx)("p",{onClick:()=>this.confirmDelete(),children:"no"})]}):null,Object(C.jsx)("div",{className:"section-title",children:Object(C.jsx)("p",{style:{color:"#555"},children:"Add Image / Update File"})}),e&&Object(C.jsx)(at,{previewImageFile:e,photo_url:i,addPhoto:this.addPhoto,handleInput:this.handleInput}),a?Object(C.jsxs)("section",{className:"replace-file-warning",children:[Object(C.jsx)("h4",{children:"replace file?"}),Object(C.jsxs)("span",{className:"select-delete",style:{height:"50px",backgroundColor:"#5077be"},children:[Object(C.jsx)("p",{className:"delete-button-txt",onClick:()=>this.replaceModelFile(),children:"yes"}),Object(C.jsx)("p",{className:"delete-button-txt",onClick:()=>this.handleInput("file_url",null),children:"no"})]})]}):null,Object(C.jsxs)("section",{className:"edit-project-row row-x",style:{height:"30px",color:"#555"},children:[null===e&&null===a?Object(C.jsxs)("div",{className:"edit-file-input-box ",children:[Object(C.jsx)("div",{className:"edit-file-button ",children:Object(C.jsx)("p",{children:"Add Image"})}),Object(C.jsx)("input",{className:"fake-input-file ",style:{marginLeft:"40px"},type:"file",accept:"image/png,image/jpeg",onChange:e=>this.handlePhoto(e)})]}):null,null===e&&null===a?Object(C.jsxs)("div",{className:"edit-photo-input-box",children:[Object(C.jsx)("div",{className:"edit-file-button",children:Object(C.jsx)("p",{children:"New File"})}),Object(C.jsx)("input",{className:"fake-input-file",style:{marginLeft:"40px"},type:"file",accept:".blend,.stl",onChange:e=>this.fileHandler(e,null,"file_url")})]}):null]}),Object(C.jsx)("section",{className:"edit-project-row text-input-row",children:Object(C.jsxs)("div",{className:"input-left-column",children:[Object(C.jsx)("div",{className:"section-title",children:Object(C.jsx)("p",{style:{color:"#555"},children:"Name"})}),Object(C.jsx)("input",{value:o,className:"text-input",onChange:e=>this.handleInput("name",e.target.value)}),Object(C.jsx)("div",{className:"section-title",children:Object(C.jsx)("p",{style:{color:"#555"},children:"Description"})}),Object(C.jsx)("textarea",{name:"text",rows:"5",cols:"50",wrap:"soft",placeholder:"text",value:n,className:"text-input input-description",onChange:e=>this.handleInput("description",e.target.value),children:" "})]})}),Object(C.jsx)("div",{className:"section-title",children:Object(C.jsx)("p",{style:{color:"#555"},children:"Submit Changes / Delete"})}),null===e&&null===a?Object(C.jsx)("div",{className:"edit-file-button",style:{position:"relative",marginTop:"10px",height:"30px",width:"80px"},onClick:()=>this.executeChange(),children:Object(C.jsx)("p",{children:"Submit"})}):null]})}}var ct=Object(O.b)(e=>e,{addNewModel:it,deleteFile:st,getRefFromUrl:e=>{const t=Ze.storage().refFromURL(e).fullPath.split("/").slice(0,-1).join("/");return{type:tt,payload:t}}})(rt);s(120);const lt=v.c.section`

    height: 450px;
    width: 300px;
    border-radius: 3%;
    background-color: #fff;
    color: #555;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
    align-items: flex-start;
	align-content: center;
    top: 5vh;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
    position: fixed;
    z-index:10;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);
    margin: none;
    overflow: hidden;
`,dt=v.c.header`
    color: #fff;
    position: absolute;
    text-transform: none;
    top: -1px;
    height: 80px;
    width: 100%;
    background: linear-gradient(0turn,#5077be,#6495ed);
    padding-top: 10%;
    margin: none;
    transition: all 100ms;

    h2 {text-transform:none;}
`,ht=v.c.form`
    position: absolute;
    height: 300px;
    width: 100%;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    transition: all 100ms;
`,pt=v.c.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`,mt=v.c.header`
    opacity: .5;
    height: 20px;
    width: 100%;
    border-top: solid 1px #6495ed;
    margin-top: 10px;
    text-align: left;
    margin-left: 5px;
    font-size: x-small;
    font-weight: 600;
`,ut=v.b`
    opacity: .01;
    left: 5px;
    bottom: 5px;
    width: 150%;
    height: 27%;
    z-index: 1;
`,gt=v.c.div`
    position: absolute;
    height: 80px;
    width: 100%;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
    overflow: none;
`,xt=v.c.button`
    margin-bottom: 50px;
    margin-left: 45px;
    height: 25px;
    width: 200px;
    border-radius: 2px;
    font-size: 18px;
    border:solid 1px #3c598e;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`,jt=v.c.input`
    position: absolute;
    top: 10px;
    height: 40px;
    width: 300px;
    color: #555;
    z-index: 10000;
    ${ut}
`;var bt=e=>{let{handleFile:t,getFileName:s}=e;return Object(C.jsx)(gt,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(xt,{children:s()}),Object(C.jsx)(jt,{style:{marginLeft:"40px"},type:"file",accept:".blend,.stl",onChange:e=>t(e)})]})})};const wt=v.c.div`
    position: relative;
    height: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;

    img {
        width:80px;
        height:80px;
        border-radius:10px;
        margin-left:35%;
        margin-bottom:0px;
        // background-color:yellow;
    }

    input[type='file']
    {
        text-indent: -999em;
        outline: none;
        position: absolute;
        left: 20%;
        opacity: .1;
        height: 80px;
        width: 80px;
        z-index: 10000;
    }
    `;var ft=e=>{let{previewImageFile:t,handlePhoto:s}=e;return Object(C.jsxs)(wt,{children:[Object(C.jsx)("img",{src:t}),Object(C.jsx)("input",{style:{marginLeft:"40px"},type:"file",accept:"image/png,image/jpeg",onChange:e=>s(e)})]})};class Ot extends i.Component{constructor(){super(),this.getFileName=()=>null!=this.props.file?this.props.file.name:"Add File",this.state={description:"",name:"",previewImageFile:null},this.getFileName=this.getFileName.bind(this)}render(){return Object(C.jsxs)(lt,{children:[Object(C.jsxs)(dt,{children:[Object(C.jsx)(P,{onClick:()=>this.props.resetView()}),Object(C.jsx)("h2",{children:"Create a project"})]}),Object(C.jsxs)(ht,{onSubmit:e=>this.props.createNewProject(e),children:[Object(C.jsx)(pt,{children:Object(C.jsx)(bt,{getFileName:this.getFileName,handleFile:this.props.handleFile})}),this.props.file&&Object(C.jsxs)(pt,{children:[Object(C.jsx)(mt,{children:Object(C.jsx)("p",{children:"Add Photo"})}),Object(C.jsx)(ft,{handlePhoto:this.props.handlePhoto,previewImageFile:this.props.previewImageFile})]}),Object(C.jsx)(mt,{children:Object(C.jsx)("p",{children:"Name and description"})}),Object(C.jsx)("input",{placeholder:"Name",className:"log-input log-form-length disabled",style:{marginBottom:"5px",marginTop:"21px"},required:!0,onChange:e=>this.props.handleAddText("projectName",e.target.value)}),Object(C.jsx)("textarea",{placeholder:"description",name:"text",rows:"5",cols:"50",wrap:"soft",className:"text-input input-description",onChange:e=>this.props.handleAddText("projectDescription",e.target.value)}),this.props.file&&Object(C.jsx)("button",{style:{marginTop:"10px"},type:"submit",children:"Submit"})]})]})}}var vt=Ot;class yt extends i.Component{constructor(){super(),this.getProjects=()=>{const{id:e}=this.props.user.user;c.a.get(`/api/projects/${e}`).then(e=>this.setState({...this.state,data:e.data}))},this.createNewProject=async e=>{e.preventDefault();const{file:t,imageFile:s,fileUrl:i,imageUrl:n,projectDescription:o,projectName:a}=this.state,r=this.props.user.user.id,{name:c}=this.state.file;if(void 0!=c){this.props.setIsLoading();const e=await this.props.addNewModel(t,`madmodels/projects/${r}/${a}/`),i=await e.action.payload.ref.getDownloadURL();var l=null;if(null!=s){const e=await this.props.addNewModel(s,`madmodels/projects/${r}/${a}/`);l=await e.action.payload.ref.getDownloadURL()}await this.addToDatabase(i,l),await this.getProjects(),this.props.resetView(),this.props.setIsLoading()}},this.setFileUrl=async e=>{this.setState({fileUrl:e})},this.setImageUrl=async e=>{this.setState({imageUrl:e})},this.handleFile=async e=>{const t=e.target.files[0];this.addFile(await t)},this.handlePhoto=async e=>{const t=e.target.files[0];this.addPhoto(await t)},this.fileHandler=async e=>{const{file:t,fileUrl:s,imageFile:i,imageUrl:n}=this.state;this.sendIntoSpace()},this.fileHandlerRemove=e=>{this.setState({file:null})},this.handleDelete=e=>{this.setState({imageFile:null})},this.sendIntoSpace=async()=>{const{file:e,imageFile:t,fileUrl:s,imageUrl:i,projectDescription:n,projectName:o}=this.state,{id:a}=this.props.username.user;this.state.fileUrl;this.props.setIsLoading();const r=await this.getFileUrl(e);if(this.setFileUrl(await r.getDownloadURL()),null!=t){const e=await this.getImUrl(t);this.setImageUrl(await e.getDownloadURL())}await this.addToDatabase(this.state.fileUrl,this.state.imageUrl),await this.getProjects(),this.props.setIsLoading(),this.props.resetView()},this.getImUrl=async e=>{const{id:t}=this.props.user.user,s=Ze.storage().ref(`madmodels/projects/${t}/`).child(e.name);return await s.put(e),console.log("image loaded"),s},this.getFileUrl=async e=>{const{id:t}=this.props.user.user,s=Ze.storage().ref(`madmodels/projects/${t}/`).child(e.name);return await s.put(e),console.log("file loaded"),s},this.removeFileFromSpace=async(e,t,s)=>{if(this.props.setIsLoading(),null!=e){const t=await Ze.storage().refFromURL(e);await t.delete().then(function(e){console.log("image deleted")}).catch(function(e){console.log("there was an error",e)})}if(null!=s){const e=await Ze.storage().refFromURL(s);await e.delete().then(function(e){console.log("image deleted")}).catch(function(e){console.log("there was an error",e)})}await c.a.delete(`/api/project/delete/${t}`),this.props.setIsLoading()},this.addToDatabase=async(e,t)=>{console.log("this is from addToDatabase function");const{projectDescription:s,projectName:i}=this.state,n=this.props.user.user.id,o=i,a=s,r=e,l=t;await c.a.post("/api/project/post",{id:n,name:o,description:a,firebase_url:r,firebase_url01:l,is_hidden:!1}).then(e=>e.status),await this.props.getProjects()},this.state={openEditModel:!1,data:[],fileUrl:null,file:null,previewImageFile:null,previewModelFile:null,imageFile:null,imageUrl:null,newItem:{},props:null,openAddProject:!1,projectName:"",projectDescription:""},this.setFileUrl=this.setFileUrl.bind(this),this.handleFile=this.handleFile.bind(this),this.addFile=this.addFile.bind(this),this.addPhoto=this.addPhoto.bind(this),this.handlePhoto=this.handlePhoto.bind(this),this.fileHandler=this.fileHandler.bind(this),this.addToDatabase=this.addToDatabase.bind(this),this.fileHandlerRemove=this.fileHandlerRemove.bind(this),this.removeFileFromSpace=this.removeFileFromSpace.bind(this),this.addNewProject=this.addNewProject.bind(this),this.getImUrl=this.getImUrl.bind(this),this.getFileUrl=this.getFileUrl.bind(this),this.handleAddText=this.handleAddText.bind(this),this.projectIsLiked=this.projectIsLiked.bind(this),this.getProjects=this.getProjects.bind(this),this.createNewProject=this.createNewProject.bind(this)}componentDidMount(){this.getProjects()}handleAddText(e,t){this.setState({[e]:t})}addFile(e){this.setState({file:e,previewModelFile:URL.createObjectURL(e)})}addPhoto(e){this.setState({imageFile:e,previewImageFile:URL.createObjectURL(e)})}handleChange(e){this.setState({file:e})}addNewProject(e){this.setState({openAddProject:!this.state.openAddProject})}projectIsLiked(e,t){try{return t.filter(t=>t.model_id===e)[0].model_id===e}catch(s){console.log("user does not like this project",s)}}render(){const{openAddProject:e,openEditModel:t,previewImageFile:s,previewModelFile:i,data:n,file:o}=this.state,{photo_url:a,user:r,showCreateProject:c}=this.props,l=n.map(e=>Object(C.jsx)(ye,{data:e,name:e.name,img:e.firebase_url01,file:e.firebase_url,id:e.model_id,delete:this.deleteModel,removeFileFromSpace:this.removeFileFromSpace,openEdidModel:this.openEditModel,projectIsLiked:this.projectIsLiked,user_photo_url:a,current_user_name:r.user.user},e.model_id));return Object(C.jsxs)("div",{className:"collections",children:[c&&Object(C.jsx)(vt,{resetView:this.props.resetView,handleFile:this.handleFile,handleAddText:this.handleAddText,handlePhoto:this.handlePhoto,previewImageFile:s,previewModelFile:i,file:o,sendIntoSpace:this.sendIntoSpace,createNewProject:this.createNewProject}),l]})}}var kt=Object(O.b)(function(e){return e},{getProjects:qe,addNewModel:it})(yt);s(121);const{largeWidth:_t,medWidth:Lt,smallWidth:Nt}=pe,Ct=(v.b`
    @media(max-width:1100px) {
        width:${Lt}px;
    }
`,v.b`
    @media (max-width:650px) {
        width:${Nt}px;
    }
`,v.c.section`
    min-height: 100px;
    // width: ${_t}px;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
    justify-content: start;
	align-items: stretch;
    align-content: center;
    border-radius: 2px;
    margin:auto; 

    `),It=v.c.div`
    background: linear-gradient(0turn,#5077be,#6495ed);

    h2 {
        margin-left: 5px;
        font-size: medium;
        color: #fff;
        text-transform: none;
        font-weight: 600;
        text-align:center;
    }
`,St=v.c.div`
    margin-top: 5px;
    text-align: right;
    color: #555;
    background-color: rgb(253, 249, 249);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding:10px;
    text-align:left;
`;var Mt=e=>{let{state:t}=e;const[s,n]=Object(i.useState)(!1);return Object(C.jsxs)(Ct,{children:[Object(C.jsx)(It,{children:Object(C.jsx)("h2",{children:"More about me"})}),Object(C.jsx)(St,{children:Object(C.jsx)(me,{children:t.userBio})})]})};class Ut extends i.Component{constructor(e){super(e),this.state={}}render(){return Object(C.jsx)("div",{className:"sec-test-container"})}}var Ft=Ut;s(31);var Tt=e=>{const{user_name:t,first_name:s,last_name:i,user_id:n}=e;return Object(C.jsx)(W.c,{to:`/viewuser/${n}`,children:Object(C.jsxs)("div",{className:"show-user",children:[Object(C.jsx)("p",{className:"admin-a",children:s+" "+i}),Object(C.jsx)("p",{className:"admin-a",children:t})]})})};var Pt=e=>{const{unique_id:t,remount:s,date_created:i,id:n,last_visit:o}=e;return Object(C.jsxs)("div",{className:"traffic-display-unit",children:[Object(C.jsx)("p",{className:"traffic-text",children:i})," ",Object(C.jsx)("p",{className:"traffic-text",children:n}),"  ",Object(C.jsx)("p",{className:"traffic-text",children:t}),Object(C.jsx)("p",{className:"traffic-text",children:s}),Object(C.jsx)("p",{className:"traffic-text",children:o})]})};s(55);var Dt=e=>{const{body:t,title:s,memo_id:n}=e;var[o,a]=Object(i.useState)(t),[r,l]=Object(i.useState)(!1);return Object(C.jsxs)("div",{className:"text-container",children:[Object(C.jsx)("input",{value:s,style:{width:"95%",marginBottom:"5px"}}),Object(C.jsx)("textarea",{name:"text",rows:"23",cols:"50",wrap:"soft",placeholder:"text",onChange:e=>a(e.target.value),value:o,className:"admin-memo-body",children:" "}),Object(C.jsx)("div",{className:"is-saving",children:!0===r?Object(C.jsx)("p",{style:{color:"#fff",fontWeight:"600"},children:"sending..."}):Object(C.jsx)("p",{style:{color:"#fff",fontWeight:"600"},onClick:()=>(l(!0),void c.a.post("/api/memo/update",{text:o,memo_id:n}).then(e=>{l(!1)})),children:"save"})})]})};var Et=e=>{const{messagecontent:t,email:s}=e;return Object(C.jsxs)("div",{className:"show-user",children:[Object(C.jsxs)("p",{children:["email",s]}),Object(C.jsx)("p",{className:"admin-a",children:t})]})},Rt=s(19);const At="ws://165.227.102.189:8000";new Rt.w3cwebsocket(At);class Bt extends i.Component{constructor(){super(),this.addGeneral=()=>{const{generalContent:e}=this.state,t=e;c.a.post("/api/docs/post",{content:t,tag:"general"}).then(alert("new content has been added to General Information element")).catch(e=>{console.log("error",e)})},this.addAbout=()=>{const{aboutContent:e}=this.state,t=e;c.a.post("/api/docs/post",{content:t,tag:"about"}).then(alert("new content has been added to About Information element")).catch(e=>{console.log(e)})},this.hideDocGeneral=()=>{const{displayGeneral:e}=this.state,t=e;c.a.post("/api/docs/hide",{content:t,tag:"general"}).then(alert("display changed")).catch(e=>console.log(e))},this.hideMessages=()=>{this.setState({showMessages:!this.state.showMessages})},this.hideDocAbout=()=>{const{displayAbout:e}=this.state,t=e;c.a.post("/api/docs/hide",{content:t,tag:"about"}).then(alert("display changed")).catch(e=>console.log(e))},this.state={users:[],text:"test",generalContent:"",displayGeneral:!0,editGeneral:!1,aboutContent:"",displayAbout:!0,editAbout:!1,editUserInfo:!1,showMessages:!1,userMessages:[],showMemo:!1,memos:[],showTraffic:!1,traffic:[],pototypeBool:!1},this.handleAddText=this.handleAddText.bind(this),this.addGeneral=this.addGeneral.bind(this),this.addAbout=this.addAbout.bind(this),this.hideDocAbout=this.hideDocAbout.bind(this),this.hideDocGeneral=this.hideDocGeneral.bind(this),this.openEditAbout=this.openEditAbout.bind(this),this.openEditGeneral=this.openEditGeneral.bind(this),this.openEditUserInfo=this.openEditUserInfo.bind(this),this.hideMessages=this.hideMessages.bind(this)}componentDidMount(){c.a.get("/api/users/all").then(e=>{this.setState({users:e.data})}),c.a.get("/api/messages/user").then(e=>{this.setState({userMessages:e.data})}),c.a.get("/api/memos/get/all").then(e=>{this.setState({memos:e.data})})}handleAddText(e,t){this.setState({[e]:t})}openEditAbout(){this.setState({editAbout:!this.state.editAbout})}openEditGeneral(){this.setState({editGeneral:!this.state.editGeneral})}openEditUserInfo(){this.setState({editUserInfo:!this.state.editUserInfo})}resetView(){this.setState({showMemo:!1,showTraffic:!1})}changeView(e){switch(this.resetView(),e){case"showTraffic":this.setState({showTraffic:!0});break;case"showMemo":this.setState({showMemo:!0})}}render(){const{test:e,editAbout:t,editGeneral:s,editUserInfo:i,users:n,traffic:o,showMessages:a,userMessages:r,showTraffic:c,showMemo:l,memos:d,pototypeBool:h}=this.state,{photo:p,auth:m,name:u,is_admin:g,is_sudo:x}=this.props.user.user,j=n.map(e=>Object(C.jsx)(Tt,{user_name:e.user_name,first_name:e.first_name,last_name:e.last_name,user_id:e.user_id})),b=o.filter(e=>null!=e.last_visit).map(e=>Object(C.jsx)(Pt,{id:e.browser_id,date_created:e.date_created,unique_id:e.unique_id,remount:e.remount,last_visit:e.last_visit},e.browser_id)),w=r.map(e=>Object(C.jsx)(Et,{messagecontent:e.messagecontent,email:e.email},e.dum_id)),f=d.map(e=>Object(C.jsx)(Dt,{body:e.body,title:e.title,memo_id:e.memo_id},e.memo_id));return Object(C.jsx)("div",{className:"admin-container",children:g?Object(C.jsxs)("div",{children:[Object(C.jsxs)("ul",{className:"admin-header-ul",children:[!0===x?Object(C.jsx)("li",{className:"add-doc-div-closed",onClick:()=>this.changeView("showMemo"),children:Object(C.jsx)("a",{children:"memo"})}):null,s?Object(C.jsxs)("li",{className:"add-doc-div",children:[Object(C.jsx)("a",{onClick:this.openEditGeneral,children:"edit general info"}),Object(C.jsx)("textarea",{onChange:e=>this.handleAddText("generalContent",e.target.value),className:"input",name:"text",rows:"14",cols:"100",wrap:"soft",children:" "}),Object(C.jsx)("button",{className:"text",onClick:this.addGeneral,children:"add to general content"}),Object(C.jsxs)("div",{className:"checkbox",style:{marginTop:"20px"},children:[Object(C.jsx)("input",{type:"checkbox",onChange:e=>this.handleAddText("displayGeneral",!this.state.displayGeneral)}),Object(C.jsx)("p",{style:{color:"#555"},children:"display this document?"}),Object(C.jsx)("button",{onClick:this.hideDocGeneral,children:"change"})]})]}):Object(C.jsx)("li",{className:"add-doc-div-closed",onClick:this.openEditGeneral,children:Object(C.jsx)("a",{children:"edit general info"})}),t?Object(C.jsxs)("li",{className:"add-doc-div",children:[Object(C.jsx)("a",{onClick:this.openEditAbout,className:"admin-a",children:"edit about info"}),Object(C.jsx)("textarea",{onChange:e=>this.handleAddText("aboutContent",e.target.value),className:"input",name:"text",rows:"14",cols:"100",wrap:"soft",children:" "}),Object(C.jsx)("button",{className:"text",onClick:this.addAbout,children:"add to about content"}),Object(C.jsxs)("div",{className:"checkbox",style:{marginTop:"20px"},children:[Object(C.jsx)("input",{type:"checkbox",onChange:e=>this.handleAddText("displayAbout",!this.state.displayAbout)}),Object(C.jsx)("p",{style:{color:"#555"},children:"display this document?"}),Object(C.jsx)("button",{onClick:this.hideDocAbout,children:"change"})]})]}):Object(C.jsx)("li",{className:"add-doc-div-closed",children:Object(C.jsx)("a",{onClick:this.openEditAbout,children:"edit about info"})}),Object(C.jsx)("li",{className:"add-doc-div-closed",children:Object(C.jsx)("a",{children:"notifications"})}),a?Object(C.jsxs)("li",{className:"add-doc-div",onClick:()=>this.hideMessages(),children:[Object(C.jsx)("a",{children:"messages"}),w]}):Object(C.jsx)("li",{className:"add-doc-div-closed",onClick:()=>this.hideMessages(),children:Object(C.jsx)("a",{children:"messages"})}),i?Object(C.jsxs)("li",{className:"add-doc-div",children:[Object(C.jsx)("a",{onClick:this.openEditUserInfo,className:"admin-a",children:"User Details"}),j]}):Object(C.jsx)("li",{className:"add-doc-div-closed",children:Object(C.jsx)("a",{onClick:this.openEditUserInfo,children:"User Details"})}),Object(C.jsx)("li",{className:"add-doc-div-closed",children:Object(C.jsx)("a",{children:"terms"})}),Object(C.jsx)("li",{className:"add-doc-div-closed",children:Object(C.jsx)("a",{children:"user project details"})}),Object(C.jsx)("li",{className:"add-doc-div-closed",onClick:()=>this.changeView("showTraffic"),children:Object(C.jsx)("a",{children:"show traffic"})})]}),Object(C.jsx)(W.c,{to:"/user",children:Object(C.jsx)("a",{children:"mypage"})}),!0===c?Object(C.jsxs)("div",{className:"display-traffic",children:[Object(C.jsxs)("div",{className:"traffic-display-unit",children:[Object(C.jsx)("p",{className:"traffic-text",children:"Date Created"}),Object(C.jsx)("p",{className:"traffic-text",children:"Browser ID"}),Object(C.jsx)("p",{className:"traffic-text",children:"Unique Id"}),Object(C.jsx)("p",{className:"traffic-text",children:"Re-mounts"}),Object(C.jsx)("p",{className:"traffic-text",children:"Last Visit"})]}),b]}):null,!0===l&&!0===x?f:null,Object(C.jsx)("section",{style:{height:"400px",width:"400px",backgroundColor:"#fff"},children:Object(C.jsx)(he,{params:"large_heart"})})]}):Object(C.jsx)(ae.Route,{path:"/",component:We})})}}var $t=Object(O.b)(function(e){return e},{updateUser:f,getProjects:qe})(Bt);s(125);Ze.firestore();class zt extends i.Component{constructor(e){super(e),this.userInfoFromProps=()=>{const{email:e,photo:t,user:s,background_url:i,name:n,id:o,last_name:a}=this.props.user.user;this.setState({first_name:n,last_name:a,user_name:s,photoUrl:t,background_url:i,email:e,user_id:o})},this.launchNewPass=async()=>{this.setState({setPermission:!0});const{newPassword1:e,newPassword2:t,oldPassword:s}=this.state,{user:i}=this.props.user.user,n=i;e===t&&c.a.post("/auth/password",{newPassword1:e,newPassword2:t,oldPassword:s,user_name:n}).then(e=>{this.openChangePass(),this.props.hideView("showEditUserInfo")})},this.state={user_id:null,user_name:"",last_name:"",first_name:"",user:{},setPermission:!0,openNewPass:!1,oldPassword:"",newPassword1:"",newPassword2:""},this.addToDatabase=this.addToDatabase.bind(this),this.launchNewPass=this.launchNewPass.bind(this)}componentDidMount(){const{email:e,photo:t,user:s,background_url:i,name:n,id:o,last_name:a}=this.props.user.user;this.setState({first_name:n,last_name:a,user_name:s,photoUrl:t,background_url:i,email:e,user_id:o}),this.userInfoFromProps()}componentDidUpdate(){const{setPermission:e}=this.state;!0===e&&(this.props.updateUser(),this.userInfoFromProps(),this.setState({setPermission:!1}))}async addToDatabase(){const{first_name:e,last_name:t,email:s,user_id:i}=this.state;console.log("hit add to db func"),c.a.post(`/api/user/update/info/${i}`,{email:s,last_name:t,first_name:e,user_id:i}),await this.userInfoFromProps()}handleAddText(e,t){this.setState({[e]:t})}openChangePass(){this.setState({openNewPass:!this.state.openNewPass})}render(){const{email:e,name:t,user:s,photo:i}=this.props.user.user,{staticPhoto:n,file:o,openNewPass:a,last_name:r}=this.state;return Object(C.jsxs)("div",{className:"edit-user-info",children:[a?Object(C.jsxs)("div",{className:"change-pass-container",children:[Object(C.jsx)("input",{placeholder:"Old Password",onChange:e=>this.handleAddText("oldPassword",e.target.value)}),Object(C.jsx)("input",{placeholder:"New Password",onChange:e=>this.handleAddText("newPassword1",e.target.value)}),Object(C.jsx)("input",{placeholder:"Verify New Password",onChange:e=>this.handleAddText("newPassword2",e.target.value)}),Object(C.jsxs)("div",{className:"change-pass-button-flex",children:[Object(C.jsx)("button",{onClick:()=>{this.launchNewPass()},children:"submit"}),Object(C.jsx)("button",{onClick:()=>this.setState({openNewPass:!1}),children:"cancel"})]})]}):null,Object(C.jsxs)("section",{className:"edit-user-info-title",children:[Object(C.jsx)("svg",{onClick:()=>this.props.resetView(),className:"close-button",style:{color:"#fff",height:"35px",width:"35px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(C.jsx)("h2",{children:"edit user info"})]}),Object(C.jsx)("section",{className:"",children:Object(C.jsxs)("div",{className:"input-list",children:[Object(C.jsx)("button",{onClick:()=>this.openChangePass(),children:"change password"}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("p",{className:"list-text",children:"First Name"}),Object(C.jsx)("input",{placeholder:t,onChange:e=>this.handleAddText("first_name",e.target.value)})]}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("p",{className:"list-text",children:"Last Name"}),Object(C.jsx)("input",{placeholder:r,onChange:e=>this.handleAddText("last_name",e.target.value)})]}),Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)("p",{className:"list-text",children:"Email Address"}),Object(C.jsx)("input",{placeholder:e,onChange:e=>this.handleAddText("email",e.target.value)})]}),Object(C.jsx)("div",{className:"submit-row",children:Object(C.jsx)("button",{onClick:()=>this.addToDatabase(),className:"li-button",children:"submit"})})]})})]})}}var Vt=Object(O.b)(function(e){return e},{updateUser:f,loginUser:b})(zt);s(56);var Gt=e=>{const{photo_url:t,user_name:s,user_id:n,my_id:o}=e,[a,r]=Object(i.useState)(!1),[c,l]=Object(i.useState)(!1);Object(i.useEffect)(()=>{},[]);return Object(C.jsx)("div",{children:!1===c?Object(C.jsxs)("div",{className:"connection-container",children:[Object(C.jsxs)("div",{className:"photo-name-flex",children:[Object(C.jsx)(W.c,{to:`viewuser/${n}`,children:Object(C.jsx)("img",{src:t,className:"connection-photo"})}),Object(C.jsx)("p",{className:"connection-name",children:s})]}),!0===a?Object(C.jsxs)("ul",{className:"friend-options",children:[Object(C.jsxs)("div",{className:"friend-menu-row",onClick:()=>e.getUserID(n),children:[Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),Object(C.jsx)("p",{className:"friend-menu-text",children:"Game invite"})]}),Object(C.jsxs)("div",{className:"friend-menu-row",children:[Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Object(C.jsx)("p",{className:"friend-menu-text",onClick:()=>((t,s)=>{e.removeConnection(t,s),l(!0)})(n,o),children:"remove friend"})]})]}):null,Object(C.jsx)("svg",{onClick:()=>r(!a),xmlns:"http://www.w3.org/2000/svg",className:"small-icon",style:{marginBottom:"10px",marginRight:"0px",height:"40px",width:"40px",opacity:"60%"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})})]}):null})};var Wt=e=>{const[t,s]=Object(i.useState)(!1),{photo_url:n,user_name:o,user_id:a,my_id:r}=e;return Object(C.jsx)("div",{children:!1===t?Object(C.jsxs)("div",{className:"connection-container",children:[Object(C.jsxs)("div",{className:"photo-name-flex",children:[Object(C.jsx)(W.c,{to:`viewuser/${a}`,children:Object(C.jsx)("img",{src:n,className:"connection-photo"})}),Object(C.jsx)("p",{className:"connection-name",children:o})]}),Object(C.jsxs)("div",{className:"button-row",children:[Object(C.jsx)("p",{className:"connection-buttons",style:{marginBottom:"10px"},onClick:()=>((t,i)=>{e.removeConnection(t,i),s(!0)})(a,r),children:"Remove"}),Object(C.jsx)("p",{className:"connection-buttons-full",style:{marginBottom:"10px",marginRight:"10px"},onClick:()=>((t,i)=>{e.acceptRequest(t,i,n,o),s(!0)})(a,r),children:"Confirm"})]})]}):null})};s(126);const Ht=new Rt.w3cwebsocket(At);class Jt extends i.Component{constructor(){super(),this.sockets=e=>{const{id:t}=this.props;Ht.onopen=()=>{},Ht.onmessage=e=>{const s=JSON.parse(e.data),{fromUser:i,friendObj:n}=s,{newFriends:o,friends:a}=this.state;if("new_friend"===s.type&&parseInt(i.toUser)===t&&(o.push(i),this.setState({newFriends:o})),"acceptedFriend"===s.type&&(parseInt(n.my_id)===t||parseInt(n.user_id)===t)){var r=[...a];r.push(n),this.setState({friends:r})}}},this.newFriendToSocked=e=>{Ht.send(JSON.stringify({type:"acceptedFriend",friendObj:e}))},this.getMyFriends=async()=>{const{id:e}=this.props;await c.a.get(`/api/join/friends/${e}`).then(e=>this.setState({friends:e.data})).catch(e=>console.log(e)),await c.a.get(`/api/get/pending/friends/${e}`).then(e=>this.setState({requests:e.data})).catch(e=>console.log("No pending requests",e)).return},this.startLoading=()=>{this.setState({isLoading:!this.state.isLoading})},this.acceptRequest=async(e,t,s,i)=>{const{friends:n}=this.state;var o={photo_url:s,user_id:e,my_id:t,user_name:i};[...n].push(o),this.newFriendToSocked(o);await c.a.post("/api/accept/connection",{from:e,to:t,yes:!0})},this.removeConnection=async(e,t)=>{console.log("hit remove",e,t),c.a.post("/api/remove/connection",{from:e,to:t})},this.state={requests:[],friends:[],isLoading:!1,newFriends:[],justAdded:[]},this.getMyFriends=this.getMyFriends.bind(this),this.acceptRequest=this.acceptRequest.bind(this),this.startLoading=this.startLoading.bind(this),this.removeConnection=this.removeConnection.bind(this)}componentDidMount(){this.sockets(),this.getMyFriends()}componentDidUpdate(){this.sockets()}pleaeLogin(){alert("please log in")}render(){const{requests:e,friends:t,isLoading:s,newFriends:i}=this.state,{id:n}=this.props,o=t.map(e=>Object(C.jsx)(Gt,{photo_url:e.photo_url,user_id:e.user_id,user_name:e.user_name,my_id:n,removeConnection:this.removeConnection,getUserID:this.props.getUserID},e.user_id)),a=e.map(e=>Object(C.jsx)(Wt,{photo_url:e.photo_url,user_name:e.user_name,user_id:e.user_id,my_id:n,removeConnection:this.removeConnection,acceptRequest:this.acceptRequest},e.user_id)),r=i.map(e=>Object(C.jsx)(Wt,{photo_url:e.photo,user_name:e.user,user_id:e.id,my_id:n,removeConnection:this.removeConnection,acceptRequest:this.acceptRequest},e.id));return Object(C.jsxs)("div",{className:"friend-container",children:[!0===s?Object(C.jsx)(X,{}):null,r,a,o]})}}var qt=Jt;s(127);var Yt=e=>{const{isAccepted:t,photo:s,gameID:n}=e.challengeUser.gameInformation,[o,a]=Object(i.useState)(!1),[r,c]=Object(i.useState)(!1),l=(t,s)=>{e.changeGameID(t,s),c(!r),!0===t&&a(!0)};return Object(C.jsx)("div",{children:!1===r?Object(C.jsxs)("div",{className:"invite",children:[Object(C.jsx)("img",{src:s,className:"invite-photo",onClick:()=>{!1===o?c(!r):e.hideView("showGames")}}),!1===t&&!1===o?Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"game-invite-icon",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}):null]}):Object(C.jsxs)("div",{className:"invite choose-accept",children:[Object(C.jsx)("div",{className:"game-invite-title",children:Object(C.jsx)("p",{className:"game-invite-title-text",children:"Accept Challenge?"})}),Object(C.jsxs)("div",{className:"invite-yes-no",children:[Object(C.jsx)("p",{className:"choose-accept-text",onClick:()=>l(!0,n),children:"yes"}),Object(C.jsx)("p",{className:"choose-accept-text",onClick:()=>l(!1),children:"no"})]})]})})};s(128),s(129);var Xt=e=>{const{image_url:t,user_id:s}=e,[n,o]=Object(i.useState)(!1),a=async i=>{switch(await o(!n),await e.setCurrentImg(null),i){case"delete":await e.removingPhoto(t),await e.getPhotos(s);break;case"update_photo":await c.a.post("/api/users/update/photo/",{image_url:t,user_id:s});break;case"update_background_img":await c.a.post("/api/user/update/background",{image_url:t,user_id:s})}};return Object(C.jsxs)("div",{className:"selected-img",children:[Object(C.jsxs)("header",{className:"selected-img-head",children:[Object(C.jsx)("svg",{onClick:()=>o(!n),xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",style:{position:"absolute",left:"0px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:!1===n?Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"}):Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),!0===n?Object(C.jsxs)("ul",{className:"friend-options",style:{width:"200px",height:"130px",left:"0px",top:"30px"},children:[Object(C.jsx)("li",{className:"friend-menu-row",style:{width:"200px"},onClick:()=>a("update_photo"),children:"Use as Profile Picture"}),Object(C.jsx)("li",{onClick:()=>a("update_background_img"),className:"friend-menu-row",style:{width:"200px"},children:"Use as Background"}),Object(C.jsx)("li",{onClick:()=>a("delete"),className:"friend-menu-row",style:{width:"200px"},children:"Delete Photo"})]}):null,Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",style:{position:"absolute",right:"0px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,onClick:()=>e.setCurrentImg(null),children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]}),Object(C.jsx)("img",{src:t,className:"prev-im-size"})]})};Ze.firestore();var Zt=Object(O.b)(function(e){return e},{addNewModel:it})(e=>{const[t,s]=Object(i.useState)([]),[n,o]=Object(i.useState)([]),[a,r]=Object(i.useState)("photos"),[l,d]=Object(i.useState)(!1),[h,p]=Object(i.useState)(null),[m,u]=Object(i.useState)(null),[g,x]=Object(i.useState)({previewImageFile:null}),{id:j}=e,b=j;Object(i.useEffect)(()=>{c.a.get(`/api/photos/albums/${b}`).then(e=>{s(e.data)}),w(b)},[]);const w=async e=>{await c.a.get(`/api/user/photos/get/${e}`).then(e=>{o(e.data)})},f=async e=>{var t=!1;if(e.target.files[0]&&(t=!0),t)try{Xe.a.imageFileResizer(e.target.files[0],400,267,"JPEG",100,0,e=>{console.log(e,"uri");const t=URL.createObjectURL(e);x({previewImageFile:t}),u(e)},"file",298,191)}catch(s){console.log(s)}},O=t.map(e=>Object(C.jsx)("p",{children:e.title},e.album_id)),v=n.map(e=>Object(C.jsx)("img",{src:e.image_url,style:{height:"75px",width:"75px"},onClick:()=>p(e.image_url)},e.photo_id));return Object(C.jsxs)("div",{className:"album-container",children:["photos"===a?Object(C.jsxs)("header",{className:"album-title-row",children:[Object(C.jsx)("p",{style:{float:"left",fontWeight:"700"},children:"Photos"}),Object(C.jsx)("input",{className:"user-photo-file-input",style:{position:"absolute",top:"5px",right:"10px",width:"20px",height:"20px"},type:"file",accept:"image/png,image/jpeg",onChange:e=>(async e=>{await f(e),await w(b)})(e)}),Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",style:{position:"absolute",top:"4px",right:"0px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})]}):Object(C.jsxs)("header",{className:"album-title-row",children:[Object(C.jsx)("p",{style:{float:"left",fontWeight:"700"},children:"Albums"}),Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"friend-menu-icon",style:{float:"right",marginTop:"5px"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,onClick:()=>d(!l),children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})})]}),Object(C.jsx)("header",{className:"album-title-row-bottom",children:Object(C.jsx)("p",{className:"photo-selector",onClick:()=>r("photos"),children:"Photos"})}),h?Object(C.jsx)(Xt,{image_url:h,setCurrentImg:p,removingPhoto:e.removingPhoto,getPhotos:w,user_id:b}):null,"albums"===a?O:null,"photos"===a?v:null,null!=g.previewImageFile?Object(C.jsx)(at,{previewImageFile:g.previewImageFile,photo_url:m,addPhoto:async()=>{const t=m,{id:s,user:i}=e.user.user;e.setIsLoading();const n=await e.addNewModel(t,`${i}/photos`),o=await n.action.payload.ref.getDownloadURL();await c.a.post("/api/photos/add/new",{album_id:null,id:s,image_url:o}),await w(s),await e.setIsLoading()},handleInput:(e,t)=>{x({[e]:t})}}):null]})});const Kt=new Rt.w3cwebsocket(At);Ze.firestore();class Qt extends i.Component{constructor(e){super(e),this.removingPhoto=async e=>{await this.deleteFromFirebase(e),console.log(" here is url ",e),await c.a.post("/api/photos/delete/",{image_url:e})},this.changeGameID=(e,t)=>{!0===e?this.setState({currentGame:t}):this.setState({challengeUser:null})},this.receiveInvite=()=>{Kt.onopen=()=>{},Kt.onmessage=e=>{const t=JSON.parse(e.data),{id:s}=this.props.user.user;"gameInvite"===t.type&&t.gameInformation.to===s&&this.setState({challengeUser:t})}},this.sendInvite=e=>{Kt.send(JSON.stringify({type:"gameInvite",gameInformation:e}))},this.getUniqueID=()=>{const e=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return e()+e()+"-"+e()},this.getUserID=e=>{const{id:t,photo:s}=this.props.user.user;var{currentGame:i}=this.state,n={to:e,from:t,isAccepted:!1,photo:s,gameID:i};this.sendInvite(n)},this.handleInput=(e,t)=>{this.setState({[e]:t})},this.setIsLoading=()=>{this.setState({isLoading:!this.state.isLoading})},this.state={previewImageFile:null,photo_url:null,photos:[],showPhotos:!1,items:[],user:{},friends:[],requests:[],showUserInfo:!0,showCollections:!0,showAdminPage:!1,showCreateProject:!1,showEditUserInto:!1,showGames:!1,showFriends:!1,profilePic:null,userName:null,isLoading:!1,setPermission:!0,challengeUser:null,currentGame:null},this.handleCollections=this.handleCollections.bind(this),this.hideView=this.hideView.bind(this),this.resetView=this.resetView.bind(this),this.pleaseLogin=this.pleaeLogin.bind(this),this.setIsLoading=this.setIsLoading.bind(this),this.deleteFromFirebase=this.deleteFromFirebase.bind(this),this.getUserID=this.getUserID.bind(this),this.receiveInvite=this.receiveInvite.bind(this)}componentDidMount(){this.receiveInvite(),this.setState({currentGame:this.getUniqueID()})}componentDidUpdate(){const{id:e,photo:t}=this.props.user.user;this.state.friends.length<1&&void 0!=e&&c.a.get(`/api/join/friends/${e}`).then(e=>this.setState({friends:e.data}))}resetView(){this.setState({showCollections:!0,showUserInfo:!1,showEditUserInto:!1,showCreateProject:!1,showGames:!1,showFriends:!1,showPhotos:!1})}handleCollections(){this.setState({isView:"isCollections"})}hideView(e){switch(this.receiveInvite(),this.resetView(),e){case"showUserInfo":this.setState({showUserInfo:!this.state.showUserInfo});break;case"showCollections":this.setState({showCollections:!0});break;case"showAdminPage":this.setState({showAdminPage:!this.state.showAdminPage});break;case"showEditUserInfo":this.setState({showEditUserInto:!0});break;case"showCreateProject":this.setState({showCreateProject:!0});break;case"showGames":this.setState({showGames:!0});break;case"showFriends":this.setState({showFriends:!0,showCollections:!1});case"showPhotos":this.setState({showPhotos:!0,showCollections:!1})}}deleteFromFirebase(e){Ze.storage().refFromURL(e).delete().then(function(e){console.log("image deleted")}).catch(function(e){console.log("there was an error")})}handleFriends(){this.setState({isView:"isFriends"})}pleaeLogin(){alert("please log in")}render(){const{photos:e,previewImageFile:t,photoUrl:s,showCollections:i,showUserInfo:n,items:o,isLoading:a,showCreateProject:r,showEditUserInto:c,showGames:l,showFriends:d,friends:h,requests:p,challengeUser:m,currentGame:u,currentPhoto:g,showPhotos:x}=this.state,{isLoggedIn:j}=this.props.user,{photo:b,auth:w,name:f,is_admin:O,background_url:v,user:y,email:k,id:_}=this.props.user.user;return Object(C.jsx)("div",{children:j?Object(C.jsxs)("div",{className:"user-page",children:[a?Object(C.jsx)(X,{}):null,Object(C.jsxs)("section",{className:"column1",children:[Object(C.jsx)("img",{src:v,className:"background-photo",onClick:()=>this.hideView("showPhotos")}),null===m?null:Object(C.jsx)(Yt,{challengeUser:m,changeGameID:this.changeGameID,hideView:this.hideView}),Object(C.jsxs)("div",{className:"portrait",children:[Object(C.jsx)("img",{className:"profile-photo",src:b,alt:"photo",onClick:()=>this.hideView("showPhotos")}),Object(C.jsx)("h4",{className:"portrait-row",style:{textTransform:"none"},children:this.props.user.user.user}),Object(C.jsxs)("div",{className:"portrait-row",style:{flexWrap:"wrap",justifyContent:"center",width:"300px"},children:[Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showEditUserInfo"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"My Info"})}),Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showCreateProject"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"Create"})}),Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showGames"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"Games"})}),Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showPhotos"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"Photos"})}),Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showFriends"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"Friends"})}),Object(C.jsx)("div",{className:"user-buttons",style:{marginTop:"10px"},onClick:()=>this.hideView("showCollections"),children:Object(C.jsx)("p",{style:{marginTop:"5px"},children:"Collections"})})]}),Object(C.jsxs)("div",{className:"portrait-row",children:[O?Object(C.jsx)(W.c,{to:"/admin",style:{textDecoration:"none"},children:Object(C.jsx)("p",{className:"go-to-admin",children:"admin"})}):null,"  "]})]}),Object(C.jsx)(Mt,{state:this.state,user:y,name:f,email:k,id:_,setIsLoading:this.setIsLoading,deleteFromFirebase:this.deleteFromFirebase})]}),Object(C.jsxs)("section",{className:"column2",children:[c&&Object(C.jsx)(Vt,{setIsLoading:this.setIsLoading,resetView:this.resetView,updateUser:this.props.updateUser}),i&&Object(C.jsx)(kt,{setIsLoading:this.setIsLoading,photo_url:b,resetView:this.resetView,showCreateProject:r}),d&&Object(C.jsx)(qt,{id:_,getUserID:this.getUserID}),x&&Object(C.jsx)(Zt,{id:_,handlePhoto:this.handlePhoto,removingPhoto:this.removingPhoto,setIsLoading:this.setIsLoading})]})]}):Object(C.jsx)(ae.Route,{path:"/",component:We})})}}var es=Object(O.b)(function(e){return e},{getProjects:qe,updateUser:f,addNewModel:it})(Qt);s(130);class ts extends i.Component{constructor(e){super(e),this.handleText=(e,t)=>{this.setState({[e]:t})},this.openSearch=()=>{this.setState({openSearchBar:!this.state.openSearchBar})},this.changeView=e=>{switch(this.resetView(),e){case"3D Models":this.setState({viewModels:!0});break;case"Videos":this.setState({viewVideos:!0})}},this.resetView=()=>{this.setState({viewModels:!1,viewVideos:!1})},this.state={data:[],names:[],videos:[],userId:null,likes:[],projectSearch:"",openSearchBar:!1,isLoading:!1,viewModels:!0,viewVideos:!1},this.addLike=this.addLike.bind(this),this.handleClick=this.handleClick.bind(this),this.updateState=this.updateState.bind(this),this.projectIsLiked=this.projectIsLiked.bind(this),this.handleText=this.handleText.bind(this),this.openSearch=this.openSearch.bind(this),this.setIsLoading=this.setIsLoading.bind(this)}componentDidMount(){this.updateState()}componentDidUpdate(){this.props.updateUser()}setIsLoading(){this.setState({isLoading:!this.state.isLoading})}async updateState(){await this.setIsLoading(),await c.a.get("/api/project/join").then(e=>this.setState({...this.state,data:e.data})),await c.a.get("/api/videos/get").then(e=>{this.setState({videos:e.data})}),await this.setIsLoading()}addLike(e){const{data:t}=this.state,{id:s}=this.props.user.user,i=s;console.log("this is add like()",i);const{userId:n}=this.state;if(void 0!=i){c.a.post("/api/projects/like",{user_id:i,params_id:e}).then(e=>{});for(let s in t)t[s].model_id===e&&console.log(s,t[s],t[s].likes)}else alert("please sign in")}handleClick(){this.addLike()}projectIsLiked(e,t){try{return t.filter(t=>t.model_id===e)[0].model_id===e}catch(s){console.log("user does not like this project",s)}}render(){const{data:e,projectSearch:t,openSearchBar:s,videos:i,isLoading:n}=this.state,{isLoggedIn:o}=this.props.user,{user_likes:a,model_likes:r,id:c}=this.props.user.user,l=e.filter(e=>e.name.toString().includes(t)).map(e=>Object(C.jsx)(ye,{data:e,projectIsLiked:this.projectIsLiked,handleClick:this.handleClick,isLoggedIn:o,likes:e.likes,id:c,user_likes:a},e.model_id)),d=i.map(e=>Object(C.jsx)(Ue,{model_id:e.model_id,video_url:e.video_url,category:e.category,tag:e.tag,firebase_url:e.firebase_url,photo_url:e.photo_url,user_name:e.user_name,name:e.name,video_name:e.video_name},e.video_id));return Object(C.jsxs)("div",{children:[!0===n?Object(C.jsx)(X,{}):null,Object(C.jsxs)("header",{className:"sub-header",children:[Object(C.jsx)("a",{onClick:()=>this.changeView("3D Models"),className:`null ${!this.state.viewModels||"selected"}`,children:"3D Models"}),Object(C.jsx)("a",{onClick:()=>this.changeView("Videos"),className:`null ${!this.state.viewVideos||"selected"}`,children:"Videos"})]}),Object(C.jsxs)("div",{className:"explore-container",style:{paddingTop:"25px"},children:[Object(C.jsxs)("div",{className:`search-menu ${!o||"slide-over"} ${!!s||`search-menu-closed ${!o||"slide-over"}`}`,children:[Object(C.jsx)("svg",{onClick:()=>this.openSearch(),style:{width:"25px",opacity:".5"},xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(C.jsx)("div",{className:`show-bar ${!s&&"dont-show-bar"}`,children:Object(C.jsx)("input",{placeholder:"search",type:"text",style:{height:"25px",width:"100px",borderRadius:"10px",color:"#fff",marginLeft:"10px"},onChange:e=>this.handleText("projectSearch",e.target.value)})})]}),!0===this.state.viewModels?l:null,!0===this.state.viewVideos?d:null]})]})}}var ss=Object(O.b)(function(e){return e},{loginUser:b,updateUser:f})(ts);s(131);var is=e=>{const{content:t,tag:s,display_document:i}=e.data;return Object(C.jsx)("div",{children:i&&Object(C.jsxs)("div",{className:"doc-containers",children:[Object(C.jsx)("h4",{className:"about-h4",children:s}),Object(C.jsx)("span",{className:"h4-border"}),Object(C.jsx)("p",{className:"long-text",children:t})]})})};var ns=e=>{const{link_text:t,link_to:s,description:i}=e;return Object(C.jsx)("div",{children:Object(C.jsx)("a",{href:`${s}`,style:{textDecoration:"none"},children:Object(C.jsx)("h4",{style:{textDecoration:"none",color:"blue"},children:t})})})};class os extends i.Component{constructor(){super(),this.state={link:"blender.org",linkText:"Blender",links:[]}}componentDidMount(){c.a.get("/api/links/get").then(e=>{this.setState({links:e.data})})}render(){const{links:e}=this.state,t=e.map(e=>Object(C.jsx)(ns,{link_to:e.link_to,link_id:e.link_id,link_text:e.link_text,description:e.description}));return Object(C.jsx)("div",{className:"doc-containers",children:t})}}s(132);class as extends i.Component{constructor(){super(),this.changeView=e=>{this.setState({currentView:e})},this.state={currentView:"main",about:[],general:[]}}componentDidMount(){c.a.get("/api/documents/about").then(e=>{this.setState({about:e.data})}),c.a.get("/api/documents/general").then(e=>{this.setState({general:e.data})})}render(){const{about:e,general:t,currentView:s}=this.state,i=e.map(e=>Object(C.jsx)(is,{data:e},e.doc_id)),n=t.map(e=>Object(C.jsx)(is,{data:e},e.doc_id));return Object(C.jsxs)("div",{className:"about-container",children:[Object(C.jsxs)("header",{className:"sub-header",style:{position:"relative"},children:[Object(C.jsx)("a",{onClick:()=>this.changeView("main"),className:`${"main"===s?"selected":null}`,children:"main"}),Object(C.jsx)("a",{onClick:()=>this.changeView("links"),className:`${"links"===s?"selected":null}`,children:"links"})]}),Object(C.jsxs)("section",{children:["main"===s?Object(C.jsx)("div",{children:i}):null,"main"===s?Object(C.jsx)("div",{children:n}):null,"links"===s?Object(C.jsx)(os,{}):null]})]})}}var rs=Object(O.b)(function(e){return e},{updateUser:f})(as);var cs=e=>Object(C.jsx)("div",{children:Object(C.jsx)("h3",{})});var ls=Object(O.b)(function(e){return e},{registerUser:w})(e=>{const[t,s]=Object(i.useState)(""),[n,o]=Object(i.useState)(""),[a,r]=Object(i.useState)(""),[c,l]=Object(i.useState)(""),[d,h]=Object(i.useState)(""),[p,m]=Object(i.useState)(""),[u]=Object(i.useState)(!1),[g]=Object(i.useState)(!1),[x,j]=Object(i.useState)(!1),[b,w]=Object(i.useState)(!1);function f(){w(!b)}return Object(i.useEffect)(()=>{console.log("props from Register",e)},[]),Object(C.jsx)("div",{className:"signup-menu",children:b?Object(C.jsx)(J,{handleOpenIAgree:f}):Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{style:{color:"#555"},children:"Register"}),Object(C.jsxs)("div",{className:"one-line",children:[Object(C.jsx)("p",{className:"text",children:"Username"}),Object(C.jsx)("input",{value:t,onChange:e=>s(e.target.value)})]}),Object(C.jsxs)("div",{className:"one-line",children:[Object(C.jsx)("p",{className:"text",children:"Password"}),Object(C.jsx)("input",{className:"text-bar",value:n,onChange:e=>o(e.target.value)})]}),Object(C.jsxs)("div",{className:"one-line",children:[Object(C.jsx)("p",{className:"text",children:"Email"}),Object(C.jsx)("input",{value:a,onChange:e=>r(e.target.value)})]}),Object(C.jsxs)("div",{className:"one-line",children:[Object(C.jsx)("p",{className:"text",children:"First Name"}),Object(C.jsx)("input",{value:c,onChange:e=>l(e.target.value)})]}),Object(C.jsxs)("div",{className:"one-line",children:[Object(C.jsx)("p",{className:"text",children:"Last Name"}),Object(C.jsx)("input",{value:c,onChange:e=>l(e.target.value)})]}),Object(C.jsxs)("div",{className:"agreement-check",children:[Object(C.jsx)("input",{type:"checkbox",style:{marginRight:"20px",marginTop:"5px"},onChange:e=>j(!x)}),Object(C.jsx)("h5",{style:{color:"blue",fontWeight:"200"},onClick:f,children:"terms of use"})]}),x?Object(C.jsx)("div",{className:"register-link",onClick:function(){e.registerUser(t,n,a,c,u,g)},children:Object(C.jsx)("h4",{children:"signup now"})}):Object(C.jsx)("div",{className:"register-link",onClick:function(){alert("please agree to conditions")},children:Object(C.jsx)("h4",{children:"signup now"})})]})})});const ds=()=>Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}),hs=()=>Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"}),ps=e=>{let{openMenu:t,setOpenMenu:s}=e;return Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"edit-photo-button",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,onClick:()=>s(!t),children:!1===t?Object(C.jsx)(hs,{}):Object(C.jsx)(ds,{})})},ms=v.c.section`
    position:relative;
`,us=v.c.div`
    position: absolute;
    height: 90px;
    width: 150px;
    right: 0px;
    top: 50px;
    border-radius: 5px;
    background-color: #6495ed;
    z-index: 1;
    text-align: left;
`,gs=v.c.div`
    height: 40px;
    width: 250px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    p {font-size:16px;}
`,xs=v.c.img`
    width:100%;
    height:auto;
    margin:0px;
    
    @media (max-width:680px) {
        width:100%;
    }
`;var js=Object(O.b)(e=>e)(e=>{const{url:t,maker_id:s,id:n,model_id:o,getImages:a,main_image_url:r,stateHandler:l}=e,[d,h]=Object(i.useState)(!1);return Object(C.jsxs)(ms,{children:[s===n&&null!=t&&Object(C.jsx)(ps,{openMenu:d,setOpenMenu:h}),!0===d&&s===n?Object(C.jsxs)(us,{style:{top:"3  0px",left:"15px",height:"85px",width:"210px"},children:[Object(C.jsxs)(gs,{onClick:()=>(h(!d),void c.a.post("/api/projects/photos/change/main/",{model_id:o,url:t})),children:[Object(C.jsx)(T,{}),Object(C.jsx)("p",{children:"Display As Main Photo"})]}),Object(C.jsxs)(gs,{onClick:()=>(async e=>{try{await st(e)}catch(s){const e=null;c.a.post("/api/projects/photos/change/main/",{model_id:o,gone:e})}const t=await c.a.post("/api/projects/photos/delete/",{url:e,main_image_url:r,model_id:o}).then(e=>{l("selectedPhoto",null)});return await a(),h(!d),t})(t),children:[Object(C.jsx)(M,{}),Object(C.jsx)("p",{children:"Delete This Photo"})]})]}):null,Object(C.jsx)(xs,{src:t})]})});s(57);const bs=v.c.div`
    position: relative;
    height: 120px;
    width: 90%;
    margin: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    border-bottom: solid 1px #95b3ec;
`,ws=v.c.img`
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
    margin-left: 10px;
    border-radius: 5px;
`,fs=v.c.section`
    width: 500px;
    height: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: baseline;
    overflow: scroll;
`,Os=v.c.div`
    height: 85%;
    width: 100%;
    text-align: left;
    color: #555;
    font-size: 18px;
    font-weight: 200;
    letter-spacing: 1px;
    line-height: calc(1ex / 0.32);
    text-shadow:0 0 0 #000, 0 0 1px transparent;
`;var vs=Object(O.b)(function(e){return e},{updateUser:f})(e=>{const{content:t,photo_url:s,user_id:n,comment_id:o}=e,{id:a}=e.user.user,[r,l]=Object(i.useState)(!1);return Object(C.jsxs)(bs,{children:[Object(C.jsx)(ws,{src:s}),Object(C.jsxs)(fs,{children:[Object(C.jsx)(Os,{children:Object(C.jsx)("p",{children:t})}),void 0!=a&&a===n&&Object(C.jsx)(S,{onClick:()=>l(!r)}),r&&Object(C.jsx)("ul",{className:"friend-options",style:{width:"130px",height:"40px"},children:Object(C.jsxs)("li",{className:"friend-menu-row",onClick:()=>(async()=>{n===a&&await c.a.delete(`/api/comments/user/delete/${o}`).then(()=>{e.getComments()})})(),children:[Object(C.jsx)(M,{}),Object(C.jsx)("p",{className:"friend-menu-text",children:"Delete post"})]})})]})]})});class ys extends i.Component{constructor(){super(),this.state={text:""},this.handleText=this.handleText.bind(this),this.sendPost=this.sendPost.bind(this)}sendPost(e){const{text:t}=this.state,{id:s,model_id:i,user:n}=this.props;!0===e?c.a.post("/api/comments/create",{id:s,model_id:i,user:n,text:t}).then(this.props.getComments):this.props.plsSignIn()}handleText(e,t){this.setState({[e]:t})}render(){const{isLoggedIn:e}=this.props;return Object(C.jsxs)("div",{className:"create-post",style:{minHeight:"100px"},children:[Object(C.jsx)("textarea",{className:"comment-text-input post-input",value:this.state.text,name:"text",rows:"5",cols:"50",wrap:"soft",onChange:e=>this.handleText("text",e.target.value),children:" "}),Object(C.jsx)("a",{className:"add-button",onClick:()=>this.sendPost(e),style:{marginLeft:"200px"},children:"send"})]})}}var ks=e=>{const{url:t,isLoggedIn:s}=e;return Object(C.jsx)("div",{children:s?Object(C.jsx)("a",{className:"dark-text",href:t,target:"_blank",rel:"noopener noreferrer",children:"Download"}):Object(C.jsx)("a",{className:"dark-text",onClick:e.plsSignIn,children:"Download"})})};const _s=v.c.div`
    height: 70px;
    width: 680px;
    background-color: #fff;
    display: flex;
    align-items: center;

    h4 {
        width:100%;
        font-size:12px;
    }

    a{
        font-style: italic;
        text-decoration:none;
        font-size:10px;
    }
    
    img {
        height: 95%;
        with:auto;
        border-radius: 50%;
        margin:10px;
    }

    @media (max-width:680px) {
        width: 100%;
`;var Ls=e=>{const{info:t,userInfo:s}=e,{user_name:i,photo_url:n}=s;return Object(C.jsxs)(_s,{children:[Object(C.jsx)("img",{src:n}),Object(C.jsxs)("h4",{children:[t.name,Object(C.jsx)("br",{style:{paddingBottom:"10px"}}),Object(C.jsxs)(W.c,{to:`/viewuser/${s.user_id}`,children:["by ",i]})]})]})};const Ns=v.c.h4`
    padding-top: 15px;
    padding-bottom: 5px;
    color: ${e=>{let{viewFiles:t}=e;return t?"#fff":"#555"}};
    margin-left: 10px;
`,Cs=v.c.p`
    margin:auto;
    margin-left:0px;
    color:${e=>{let{condition:t}=e;return t?"#fff":"#555"}};
`,Is={backgroundColor:"#3c598e"};var Ss=e=>{const{state:t,isLoggedIn:s,authorized:i,clickLike:n,changeView:o}=e,{viewFiles:a,myLike:r,viewComments:c,viewEditProject:l,addedToFavorites:d,viewInfo:h}=t;return Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{style:a?Is:null,onClick:()=>o("viewFiles"),children:Object(C.jsx)(Ns,{viewFiles:a,children:"Download Files"})}),Object(C.jsxs)("li",{onClick:n,children:[!0===s&&!0===r?Object(C.jsx)(U,{}):Object(C.jsx)(F,{}),Object(C.jsx)(Cs,{children:"Like"})]}),Object(C.jsxs)("li",{style:c?Is:null,onClick:()=>o("viewComments"),children:[Object(C.jsx)(he,{params:"comments"}),Object(C.jsx)(Cs,{condition:c,children:"Comments"})]}),Object(C.jsxs)("li",{style:l||d?Is:null,onClick:()=>o(!0===i()?"viewEditProject":"viewInfo"),children:[!0===i()?Object(C.jsx)(he,{params:"edit_project",fill:"none",stroke:"currentColor"}):Object(C.jsx)(he,{params:"folder",fill:"none",stroke:"currentColor"}),Object(C.jsx)(Cs,{condition:l||d,children:i()?"Edit Project":"Add to Favorites"})]}),Object(C.jsxs)("li",{style:h?Is:null,onClick:()=>o("viewInfo"),children:[Object(C.jsx)(he,{params:"info",fill:"none",stroke:"currentColor"}),Object(C.jsx)(Cs,{condition:h,children:"Info"})]})]})};const Ms=v.c.section`
    margin: none;
    min-height: 90vh;
    min-width: 100vw;
    // min-width:100px;
    background-size: cover; 
    background-position: center bottom;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: right top;

        section {
            margin: auto;
            margin-bottom: 0px;
            margin-top: 0px;
            width: 660px;
            display: flex;
            justify-content: center;

            @media (max-width:680px) {
                width:300px;
            }
    }
`,Us=v.c.div`
    min-height:45px;
    width:100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;

    div {
        height: 50px;
        width:50px;
        overflow:hidden;

        img {
            height: 50px;
            width:auto;
        }
    }

    @media (max-width:680px) {
        width: 100%;
    }
`,Fs=v.c.section`
    margin: 0px;
    width: 660px;
    display: flex;
    justify-content: center;

    section {
        width: 440px;
        min-height: 100px;
        margin: 0px;
        display: flex;

        @media (max-width:680px) {
            width:300px;
        }
    }

    ul {
        width: 220px;

        li {
            background-color: #fff;
            display: flex;
            height: 59px;
            width: 100%;
            border:solid 1px rgb(85, 85, 85,.3) ;
        }
        
        @media (max-width:680px) {
            width:100%;
        }
    }

    @media (max-width:680px) {
        min-height: 200px;
        flex-direction: column;
        width: 300px;
        
        img {
        }
    }
`,Ts=v.c.div`
    margin: auto;
    margin-top: 0px;
    min-height: 300px;
    width: 660px;
    border-radius: .1%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width:680px) {
        width:300px;
    }
`,Ps=v.c.header`
    background-color: #6495ed;
    opacity: .8;
    height: 32px;
    width: 100%;

    @media (max-width:680px) {
        width:300px;
    }
`,Ds=v.c.p`
    padding: 5px;
    color: #222; 
    background: #fff;
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin-bottom: 1em to 1.5em;
    font-family: 'Inter', sans-serif;

    @media (max-width: 680px) {
        width: 100%;
    }
`;class Es extends i.Component{constructor(){super(),this.changeView=e=>{window.scrollTo({top:1200,behavior:"smooth"}),this.resetView(),this.setState({[e]:!0})},this.plsSignIn=()=>{window.scrollTo(0,0),this.props.remoteLogin(!0)},this.likeFunc=async()=>{const{id:e}=this.props.user.user,{model_id:t}=this.state,s=e;await c.a.post("/api/projects/like",{user_id:s,model_id:t}),this.setState({myLike:!this.state.myLike})},this.clickLike=()=>{const{isLoggedIn:e,loginOpen:t}=this.props.user;!0===e?this.likeFunc():(window.scrollTo(0,0),this.props.remoteLogin(!t))},this.setIsDeleted=()=>{this.setState({isDeleted:!this.state.isDeleted})},this.stateHandler=(e,t)=>{this.setState({[e]:t})},this.highLightedPhoto=e=>{this.setState({selectedPhoto:e})},this.state={maker_id:null,model_id:null,dlUrl:"",info:[],userInfo:[],comments:[],files:[],viewFiles:!0,viewComments:!1,viewDetails:!1,viewEditProject:!1,viewInfo:!1,addedToFavorites:!1,myLike:!1,allLikes:[],modelImages:[],isDeleted:!1,selectedPhoto:null},this.changeView=this.changeView.bind(this),this.getDetails=this.getDetails.bind(this),this.plsSignIn=this.plsSignIn.bind(this),this.getComments=this.getComments.bind(this),this.likeFunc=this.likeFunc.bind(this),this.clickLike=this.clickLike.bind(this),this.setIsDeleted=this.setIsDeleted.bind(this),this.getImages=this.getImages.bind(this),this.highLightedPhoto=this.highLightedPhoto.bind(this),this.stateHandler=this.stateHandler.bind(this)}componentDidMount(){this.getDetails().then(e=>console.log(e)),this.getImages(),this.getComments()}componentDidUpdate(e){const{model_id:t}=this.props.match.params;e.match.params.model_id!==t&&(this.getDetails(),this.getImages())}async getImages(){const{model_id:e}=this.props.match.params;c.a.get(`/api/project/photos/get/${e}`).then(e=>{this.setState({modelImages:e.data})})}async getDetails(){const{model_id:e}=this.props.match.params;await c.a.get(`/api/projects/id/${e}`).then(t=>{const{user_id:s}=t.data[0];c.a.get(`/api/users/${s}`).then(i=>{const{id:n}=this.props.user.user,{isLoggedIn:o}=this.props.user;c.a.get(`/api/project/photos/get/${e}`).then(n=>{this.setState({maker_id:s,model_id:e,dlUrl:t.data.firebase_url,info:t.data[0],userInfo:i.data[0],modelImages:n.data,selectedPhoto:t.data[0].firebase_url01})}),!0===o&&c.a.post("/api/project/getLike",{id:n,model_id:e}).then(e=>{null!=e.data.user_id&&this.setState({myLike:!0})})})}).catch(e=>{this.props.history.push("/404")}),await c.a.get("")}async getComments(){const{model_id:e}=this.props.match.params;c.a.get(`/api/comments/id/${e}`).then(e=>{this.setState({comments:e.data})})}resetView(){this.setState({viewFiles:!1,viewComments:!1,viewDetails:!1,viewEditProject:!1,viewInfo:!1,addedToFavorites:!1})}render(){const{comments:e,model_id:t,maker_id:s,myLike:i}=this.state,{info:n,userInfo:o,viewComments:a,viewFiles:r,viewInfo:c,viewEditProject:l,modelImages:d,isDeleted:h,selectedPhoto:p,addedToFavorites:m}=this.state,{isLoggedIn:u}=this.props.user,{user:g,id:x}=this.props.user.user,j=()=>{if(u&&x===s)return!0},b=e.map(e=>Object(C.jsx)(vs,{content:e.text,model_id:e.model_id,date_created:e.date_created,photo_url:e.photo_url,comment_id:e.comment_id,user_id:e.user_id,user_name:e.user_name,getComments:this.getComments},e.comment_id)),w=d.map((e,t)=>Object(C.jsx)("div",{onClick:()=>this.highLightedPhoto(e.photo_url),children:Object(C.jsx)("img",{src:e.photo_url})},t));return Object(C.jsx)(C.Fragment,{children:h?Object(C.jsx)(ae.Route,{path:"/",component:We}):Object(C.jsxs)(Ms,{children:[Object(C.jsx)("section",{children:Object(C.jsx)(Ls,{userInfo:o,info:n,maker_id:s})}),Object(C.jsx)("section",{children:Object(C.jsx)(Us,{children:w})}),Object(C.jsxs)(Fs,{children:[Object(C.jsx)(js,{model_id:t,url:p,maker_id:s,id:x,getImages:this.getImages,main_image_url:this.state.info.firebase_url01,stateHandler:this.stateHandler}),Object(C.jsx)(Ss,{state:this.state,authorized:j,isLoggedIn:u,clickLike:this.clickLike,changeView:this.changeView})]}),Object(C.jsxs)(Ts,{children:[Object(C.jsx)(Ps,{children:Object(C.jsxs)("h3",{children:[a&&"Comments",r&&"Download File",c&&"Information",l&&"Edit Project"]})}),a&&Object(C.jsx)(ys,{user:g,id:x,isLoggedIn:u,model_id:t,plsSignIn:this.plsSignIn,getComments:this.getComments},x),a&&b,r&&Object(C.jsx)(ks,{url:n.firebase_url,isLoggedIn:u,plsSignIn:this.plsSignIn}),l&&j()&&Object(C.jsx)(ct,{info:n,model_id:t,user_id:x,user_name:g,modelImages:d,getDetails:this.getDetails,setIsDeleted:this.setIsDeleted,getImages:this.getImages},t),c&&Object(C.jsx)(Ds,{children:n.description})]})]})})}}var Rs=Object(O.b)(function(e){return e},{loginUser:b,updateUser:f,remoteLogin:j})(Es),As=s(64),Bs=s.n(As);s(133),s(58),s(32),s(134);var $s=e=>{Object(i.useEffect)(()=>{o===a&&s(!0)},[]);const[t,s]=Object(i.useState)(!1);const{content:n,loggedInUser:o,user_id:a,photo_url:r,date_created:c}=e,l=c.split("T"),d=l[0].split("-"),h=l[1].split(":");return Object(C.jsxs)("div",{className:`over-flow ${o===a||"user-over-flow"}`,style:{},children:[Object(C.jsxs)("div",{className:`my-message-container ${o===a||"user-message-container"}`,children:[Object(C.jsx)("p",{className:"time-stamp",style:{textTransform:"none",fontSize:"xx-small"},children:["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(d[1])-1]+" "+d[2]+" "+d[0]}),Object(C.jsx)("p",{style:{textTransform:"none"},children:n}),Object(C.jsx)("p",{style:{textTransform:"none",fontSize:"xx-small"},children:(p=h,p[0]>12?p[0]-12+":"+p[1]+" pm":p[0]+":"+p[1]+" am")})]}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:r,className:`my-message-photo ${!!t||"my-message-photo"}`})})]});var p};const zs=new Rt.w3cwebsocket(At);class Vs extends i.Component{constructor(){super(),this.getConnected=async e=>{const{user_id:t,conversation_id:s}=this.props,{id:i}=this.props.user.user;zs.onopen=()=>{console.log("WebSocket Client Connected")},zs.onmessage=e=>{const n=JSON.parse(e.data),{from:o,to:a}=n;"message"===n.type&&n.conversation_id===s&&this.props.checkForExistingMessage(i,t)}},this.sendToSockets=(e,t,s)=>{const{messages:i,loggedInUser:n}=this.state,{user:o,photo:a,id:r}=this.props.user.user;zs.send(JSON.stringify({type:"message",conversation_id:t,msg:e,to:s,user:o,from:r,photo:a}))},this.executeSendMessage=async()=>{const{text:e}=this.state,{id:t,photo:s}=this.props.user.user,i=this.props.user_id,n=t,{isLoggedIn:o}=this.props.user,{currentUserMessage:a}=this.props;if(0!=o&&void 0!=t)if(null===a)await c.a.post("/api/conversation/new",{user_id:n,to_user:i,text:e}).then(t=>{this.sendToSockets(e,t.data.conversation_id,i)});else{const t=a[0].conversation_id;await c.a.post("/api/conversation/user/new",{conversation_id:t,user_id:n,text:e,to_user:i}),this.sendToSockets(e,t,i,n),this.setState({text:""})}},this.processMessages=()=>{const{currentUserMessage:e,user_id:t}=this.props;if(null!=e){return e.map(e=>Object(C.jsx)($s,{loggedInUser:t,content:e.content,user_id:e.user_id,photo_url:e.photo_url,user_name:e.user_name,date_created:e.date_created},e.message_id))}},this.state={currentConversationId:null,newMessages:[],text:""},this.handleText=this.handleText.bind(this),this.executeSendMessage=this.executeSendMessage.bind(this)}componentDidMount(){const{currentUserMessage:e}=this.props;this.getConnected()}handleText(e,t){this.setState({[e]:t})}render(){const{user_name:e}=this.props;return Object(C.jsxs)("div",{className:"create-message-container",children:[Object(C.jsxs)("h4",{className:"message-board-title",style:{width:"105%",left:"-5px",textTransform:"none"},children:[e,Object(C.jsx)("div",{style:{position:"absolute",right:"0px",top:"0px"},onClick:()=>this.props.openMessageBox(),children:Object(C.jsx)(he,{params:"largeX",fill:"#fff"})})]}),Object(C.jsxs)("section",{className:"create-message-input",children:[Object(C.jsx)("textarea",{className:"message-input",style:{width:"250px",marginLeft:"10px",maxHeight:"50px"},value:this.state.text,name:"text",rows:"5",cols:"50",wrap:"soft",onChange:e=>this.handleText("text",e.target.value),children:" "}),Object(C.jsx)("button",{style:{position:"relative",width:"50px"},onClick:()=>this.executeSendMessage(),children:Object(C.jsx)("div",{children:Object(C.jsx)(he,{params:"send",fill:"none",stroke:"#fff",style:{position:"absolute",top:"-10",left:"-10"}})})})]}),Object(C.jsx)("section",{className:"thread-layout",children:Object(C.jsx)("div",{children:this.processMessages()})})]})}}var Gs=Object(O.b)(function(e){return e},{updateUser:f})(Vs);const{largeWidth:Ws,medWidth:Hs,smallWidth:Js}=pe,qs=v.b`
    @media(max-width:1100px) {
        width:${Hs}px;
    }
`,Ys=v.b`
    @media (max-width:650px) {
        width:${Js}px;
    }
`,Xs=v.c.section`
    // position:relative;
    min-height: 87vh;
    /* min-width: 300px; */
    min-width:100vw;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url(white-backround1.jpg);
    background-size: cover; 
    background-position: center bottom;
    display: flex;
    flex-direction:column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: center;

    ${qs}
    ${Ys}
`,Zs=(v.c.section`
    position: relative;
    // width: 300px;
    width:${Ws}px;
    min-height: 400px;
    float: left;
    overflow-y:auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin:auto;
        overflow: visible;

    ${qs}
    ${Ys}
    `,v.c.div`
    // position:absolute;
    height: 200px;
    width: 100%;
    color: black;
    // border-radius: 5px;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
    overflow-y: none;
    box-shadow: 0 0 25px rgba(0, 0,  0, 0.1);
            background-color: rgb(253, 249, 249);
    // background-color: #fff;
`),Ks=v.c.img`
    width:100%;
    // margin-top:0px;
`,Qs=v.c.img`
    position: relative;
    top: -50px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border:solid 8px #fff;
    text-align: center;

    @media (max-width:650px) {
        width:100px;
        height:100px;
    }
`,ei=v.c.div`
    position: relative;
    top: -50px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
`,ti=(v.c.section`
    position:relative;
    border-radius: 5px;
    min-height: 70vh;
    width: ${Ws}px;
    float: left;
    overflow-y:auto;
    display: flex;
    flex-direction: row;
    
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgb(253, 249, 249);
    // background-color: #6495ed;

    ${qs}
    ${Ys}
`,v.c.section`
    min-height: 100px;
    width:${Ws}px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y:auto;
    // background-color:blue;

    // @media(max-width:1100px) {
    width:100%;
    }
    `),si=new Rt.w3cwebsocket(At);class ii extends i.Component{constructor(e){super(e),this.getConnectionStatus=async()=>{const{id:e}=this.props.user.user,{isLoggedIn:t}=this.props.user,{user_id:s}=this.props.match.params;void 0!=e&&!0===t&&(await c.a.post("/api/get/friend/status",{id:e,user_id:s}).then(e=>this.setState({friendShipInfo:e.data})).catch(e=>{console.log("no connection yet",e)}),this.checkForExistingMessage(e,s))},this.checkForExistingMessage=async(e,t)=>{await c.a.post("/api/conversation/exists",{id:e,user_id:t}).then(e=>{const{messages:t,conversation_id:s}=e.data;this.setState({currentUserMessage:t,conversation_id:s})}).catch(e=>console.log("there are no conversations yet",e))},this.openMessageBox=()=>{const{isLoggedIn:e}=this.props.user,{id:t}=this.props.user.user;void 0!=t&&!0===e?this.setState({openMessageBox:!this.state.openMessageBox}):this.props.remoteLogin(!0)},this.sendConnectInvite=()=>{const{id:e}=this.props.user.user,{isLoggedIn:t}=this.props.user,{user_id:s}=this.state.user[0],i=s;this.setState({friendShipInfo:!0}),void 0!=e&&!0===t?(c.a.post("/api/friends/add",{id:e,friend_id:i,no:false}).then().catch(e=>console.log(e)),this.sendToSocket()):this.props.remoteLogin()},this.sendToSocket=()=>{const{user_id:e}=this.props.match.params,{id:t,photo:s,user:i}=this.props.user.user,n={toUser:e,id:t,photo:s,user:i};si.send(JSON.stringify({type:"new_friend",fromUser:n}))},this.setIsLoading=()=>{this.setState({isLoading:!this.state.isLoading})},this.state={currentUserMessage:null,conversation_id:null,items:[],user:[],showUserInfo:!0,showCollections:!1,showAdminPage:!1,showCreateProject:!1,showEditUserInto:!1,profilePic:null,userName:null,user_id:null,isLoading:!1,setPermission:!0,openMessageBox:!1,friendShipInfo:null},this.setIsLoading=this.setIsLoading.bind(this),this.openMessageBox=this.openMessageBox.bind(this),this.checkForExistingMessage=this.checkForExistingMessage.bind(this),this.getUserAndProjects=this.getUserAndProjects.bind(this)}componentDidMount(){const{user_id:e}=this.props.match.params;this.props.updateUser(),this.getUserAndProjects(e),c.a.get(`/api/users/${e}`).then(e=>this.setState({user:e.data,userBio:e.data[0].bio}))}componentDidUpdate(){!1===this.props.user.isLoggedIn&&null!=this.state.conversation_id&&this.setState({currentUserMessage:null,conversation_id:null,friendShipInfo:null}),null===this.state.friendShipInfo&&this.getConnectionStatus()}getUserAndProjects(e){c.a.get(`/api/user/projects/get/${e}`).then(e=>{this.setState({...this.state,items:e.data})})}projectIsLiked(e,t){try{return t.filter(t=>t.model_id===e)[0].model_id===e}catch(s){}}handleFriends(){this.setState({isView:"isFriends"})}render(){const{items:e,isLoading:t,user:s,currentUserMessage:i,conversation_id:n,userBio:o}=this.state,{id:a}=this.props.user.user,{isLoggedIn:r}=this.props.user,{user_id:c}=this.props.match.params,l=s.map(e=>Object(C.jsx)(Gs,{user_id:e.user_id,user_name:e.user_name,conversation_id:n,currentUserMessage:i,pleaeLogin:this.pleaseLogin,openMessageBox:this.openMessageBox,sendToSocket:this.sendToSocket,checkForExistingMessage:this.checkForExistingMessage},e.user_id)),d=s.map(e=>Object(C.jsx)("h4",{className:"portrait-row",style:{textTransform:"none"},children:e.user_name},e.user_id)),h=s.map(e=>Object(C.jsx)(Ks,{src:e.background_url,className:"background-photo"},e.user_id)),p=s.map(e=>Object(C.jsx)(Qs,{src:e.photo_url,alt:"photo"},e.user_id)),m=e.map(e=>Object(C.jsx)(ye,{model_id:e.model_id,data:e,projectIsLiked:this.projectIsLiked},e.model_id));return Object(C.jsxs)(Xs,{children:[this.state.openMessageBox&&r?l:null,t?Object(C.jsx)(X,{}):null,h,Object(C.jsxs)(Zs,{children:[p,d,Object(C.jsxs)(ei,{children:[parseInt(c)===a||Object(C.jsx)("p",{className:"user-buttons",style:{marginTop:"30px",paddingTop:"3px"},onClick:()=>this.openMessageBox(),children:"Message"}),!0===this.props.user.isLoggedIn&&1!=this.state.friendShipInfo?Object(C.jsx)("p",{className:"user-buttons",style:{marginTop:"30px",paddingTop:"3px"},onClick:()=>this.sendConnectInvite(),children:"Connect"}):null]})]}),Object(C.jsx)(Mt,{state:this.state}),Object(C.jsx)(ti,{children:m})]})}}var ni=Object(O.b)(function(e){return e},{updateUser:f,remoteLogin:j})(ii);var oi=e=>{Object(i.useEffect)(()=>{o===a&&s(!0)},[]);const[t,s]=Object(i.useState)(!1);const{content:n,loggedInUser:o,user_id:a,photo_url:r,date_created:c}=e,l=c.split("T"),d=l[0].split("-"),h=l[1].split(":");return Object(C.jsxs)("div",{className:`over-flow ${o===a||"user-over-flow"}`,children:[Object(C.jsxs)("div",{className:`my-message-container ${o===a||"user-message-container"}`,children:[Object(C.jsx)("p",{className:"time-stamp",style:{textTransform:"none",fontSize:"xx-small"},children:["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(d[1])-1]+" "+d[2]+" "+d[0]}),Object(C.jsx)("p",{style:{textTransform:"none"},children:n}),Object(C.jsx)("p",{style:{textTransform:"none",fontSize:"xx-small"},children:(p=h,p[0]>12?p[0]-12+":"+p[1]+" pm":p[0]+":"+p[1]+" am")})]}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:r,className:`my-message-photo ${!!t||"my-message-photo"}`})})]});var p};class ai extends i.Component{constructor(e){super(e),this.executeSendMessage=async()=>{const{text:e}=this.state,{user_id:t,conversation_id:s,to_user:i}=this.props;await c.a.post("/api/conversation/user/new",{conversation_id:s,user_id:t,text:e,to_user:i}),await this.props.sendToSockets(e,s,i),this.setState({text:""})},this.state={text:""},this.handleText=this.handleText.bind(this),this.executeSendMessage=this.executeSendMessage.bind(this)}handleText(e,t){this.setState({[e]:t})}render(){const{isLoggedIn:e,conversation_id:t}=this.props;return Object(C.jsx)("div",{children:null!=t?Object(C.jsxs)("div",{className:"input-background",style:{maxHeight:"50px"},children:[Object(C.jsx)("textarea",{className:" message-input",style:{minHeight:"45px"},value:this.state.text,name:"text",rows:"5",cols:"50",wrap:"soft",onChange:e=>this.handleText("text",e.target.value),children:" "}),Object(C.jsx)("div",{className:"send-message-button",onClick:()=>this.executeSendMessage(),style:{position:"absolute",height:"30px",width:"30px"},children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})})})]}):null})}}s(135);var ri=e=>{const{photo_url:t,conversation_id:s,selectedMessage:n,user_name:o,read_by:a,id:r,to_user:l}=e,[d,h]=Object(i.useState)(!1);Object(i.useEffect)(()=>{},[]);return Object(C.jsxs)("div",{className:`selected-message-container ${n!=s||"selected-message-selected"}`,onClick:()=>(t=>{e.openMessage(t,l),c.a.post("api/messages/read/",{cancel:null,conversation_id:s}),h(!0)})(s),children:[Object(C.jsx)("img",{className:"senders-photo",src:t}),a===r&&!1===d?Object(C.jsx)("p",{className:"new-message",children:"new!"}):null,Object(C.jsx)("p",{className:"display-name-message",children:o})]})};const ci=new Rt.w3cwebsocket(At);class li extends i.Component{constructor(){super(),this.getConnected=e=>{const{conversation_id:t}=this.state;ci.onopen=()=>{},ci.onmessage=s=>{const i=JSON.parse(s.data);i.to===this.state.loggedInUser&&this.setState({gotNewMessage:!0}),"message"===i.type&&e===t&&(this.openMessage(t),this.setState(e=>({newMessages:[...this.state.newMessages,{msg:i.msg,user:i.user}]})))}},this.sendToSockets=(e,t,s)=>{const{messages:i,loggedInUser:n}=this.state,{user:o}=this.props.user.user;ci.send(JSON.stringify({type:"message",conversation_id:t,msg:e,to:s}))},this.getMessages=()=>{const{id:e}=this.props.user.user,t=e;c.a.get(`/api/conversations/${t}`).then(t=>{this.setState({messages:t.data,loggedInUser:e})})},this.openMessage=async(e,t)=>{await c.a.get(`/api/conversation/messages/get/${e}`).then(s=>{this.setState({thread:s.data,conversation_id:e,openContacts:!1,to_user:t})}),await this.getConnected(e)},this.expandMessageBoard=()=>{this.setState({expand:!this.state.expand,gotNewMessage:!1})},this.setOpenContacts=()=>{this.setState({openContacts:!this.state.openContacts})},this.state={messages:[],newMessages:[],thread:[],conversation_id:null,gotMessages:!1,expand:!1,openContacts:!0,challengeUser:null,gotNewMessage:!1},this.getMessages=this.getMessages.bind(this),this.openMessage=this.openMessage.bind(this),this.expandMessageBoard=this.expandMessageBoard.bind(this),this.setOpenContacts=this.setOpenContacts.bind(this),this.sendToSockets=this.sendToSockets.bind(this),this.getConnected=this.getConnected.bind(this)}componentDidMount(){this.props.updateUser(),this.getConnected()}componentDidUpdate(e,t){const{gotMessages:s}=this.state,{id:i}=this.props.user.user,{isLoggedIn:n}=this.props.user;!1===s&&void 0!=i&&(this.setState({gotMessages:!0}),this.getMessages()),!1===n&&!0===s&&this.setState({messages:[],thread:[],conversation_id:null,gotMessages:!1,expand:!1})}render(){const{messages:e,thread:t,selectedMessage:s,conversation_id:i,expand:n,gotMessages:o,openContacts:a,newMessages:r,to_user:c}=this.state,{id:l}=this.props.user.user,{isLoggedIn:d}=this.props.user,h=l,p=e.map(e=>Object(C.jsx)(ri,{selectedMessage:i,conversation_name:e.conversation_name,conversation_id:e.conversation_id,to_user:e.to_user,openMessage:this.openMessage,photo_url:e.photo_url,user_name:e.user_name,read_by:e.read_by,id:l,getConnected:this.getConnected},e.conversation_id)),m=t.map(e=>Object(C.jsx)(oi,{loggedInUser:h,content:e.content,user_id:e.user_id,photo_url:e.photo_url,user_name:e.user_name,date_created:e.date_created},e.message_id));return Object(C.jsx)("div",{children:d?n?Object(C.jsxs)("div",{className:"message-board ",children:[Object(C.jsxs)("div",{className:"message-board-title",children:[Object(C.jsx)("svg",{className:"close-message-box",onClick:()=>this.expandMessageBoard(),style:{color:"#fff",height:"35px",width:"35px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(C.jsx)("h2",{className:"hide-message-h2",style:{textTransform:"none"},children:"Messages"}),Object(C.jsx)("svg",{className:`toggle-contacts ${!!a||"toggle-contacts-rotated"}`,style:{height:"35px",width:"35px",opacity:"60%",marginTop:"2px",marginBottom:"2px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",onClick:()=>this.setOpenContacts(),children:Object(C.jsx)("path",{d:"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"})})]}),Object(C.jsx)("section",{children:Object(C.jsx)("div",{className:"dash",children:p})}),Object(C.jsx)("section",{className:`mobile-dash ${!a&&"mobile-dash-closed"}`,children:Object(C.jsx)("div",{children:!0===a?p:null})}),Object(C.jsx)("section",{className:" board",children:Object(C.jsx)("div",{children:m})}),Object(C.jsx)("section",{children:Object(C.jsx)("div",{className:"text-input-container",children:Object(C.jsx)(ai,{id:"EndOfMessages",conversation_id:this.state.conversation_id,user_id:h,to_user:c,openMessage:this.openMessage,sendToSockets:this.sendToSockets})})})]}):Object(C.jsxs)("div",{className:"message-board-closed",onClick:()=>this.expandMessageBoard(),children:[!0===this.state.gotNewMessage?Object(C.jsx)("p",{className:"new-message",children:"new!"}):null,Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",opacity:".5"},className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(C.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})]}):null})}}var di=Object(O.b)(function(e){return e},{updateUser:f})(li),hi=Object(C.jsxs)(ae.Switch,{children:[Object(C.jsx)(ae.Route,{exact:!0,path:"/",component:We}),Object(C.jsx)(ae.Route,{path:"/viewuser/:user_id",component:ni}),Object(C.jsx)(ae.Route,{path:"/explore",component:ss}),Object(C.jsx)(ae.Route,{path:"/group",component:He}),Object(C.jsx)(ae.Route,{path:"/user",component:es}),Object(C.jsx)(ae.Route,{path:"/about",component:rs}),Object(C.jsx)(ae.Route,{path:"/sites",component:cs}),Object(C.jsx)(ae.Route,{path:"/register",component:ls}),Object(C.jsx)(ae.Route,{path:"/projectdetails/:model_id",component:Rs}),Object(C.jsx)(ae.Route,{path:"/securitytest",component:Ft}),Object(C.jsx)(ae.Route,{path:"/header",component:oe}),Object(C.jsx)(ae.Route,{path:"/agreement",component:J}),Object(C.jsx)(ae.Route,{path:"/admin",component:$t}),Object(C.jsx)(ae.Route,{path:"/messages/:user_id",component:Bs.a}),Object(C.jsx)(ae.Route,{path:"/usermessages",component:di})]});s(136),s.p;class pi extends i.Component{constructor(){super(),this.inputHandler=(e,t)=>{this.setState({[e]:t})},this.sendMessageToAdmin=()=>{const{messageContent:e,email:t,visited:s}=this.state;c.a.post("/api/messages/user/add",{messageContent:e,email:t,visited:s}),this.setContactAdmin(),this.showGreeting()},this.state={showActualMessage:!0,contactAdmin:!1,messageContent:"Enter Message",email:"email address",name:"your name",welcomeGreeting:"Welcome to MadModels3d. Click here if you have questions or comments",responseGreeting:"Your message has been sent. I'll get back to you asap"},this.hideGreeting=this.hideGreeting.bind(this)}componentDidMount(){void 0!==localStorage.visited&&this.setState({visited:localStorage.visited})}showGreeting(){const{responseGreeting:e}=this.state;this.setState({showActualMessage:!0,welcomeGreeting:e})}hideGreeting(){this.setState({showActualMessage:!1})}setContactAdmin(){this.setState({contactAdmin:!this.state.contactAdmin})}render(){const{showActualMessage:e,contactAdmin:t,messageContent:s,email:i,welcomeGreeting:n,responseGreeting:o,name:a}=this.state;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"messages-container",children:[!1===t?Object(C.jsxs)("div",{onMouseEnter:this.hideGreeting,onClick:this.hideGreeting,className:`actual-message ${!!e||"hidden"}`,children:[Object(C.jsx)("p",{className:"contact-admin-text",children:n}),Object(C.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Fc_demontigny?alt=media&token=782d914e-3cda-4402-bd68-aa30ed57b6bd",className:"admin-message-photo"})]}):null,!1===t?Object(C.jsx)("svg",{onClick:()=>this.setContactAdmin(),xmlns:"http://www.w3.org/2000/svg",class:"admin-message-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",children:Object(C.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}):null]}),!0===t?Object(C.jsx)("div",{className:"send-message",children:Object(C.jsxs)("div",{className:"send-message-title",children:[Object(C.jsx)("h2",{style:{textTransform:"none"},children:"Contact"}),Object(C.jsx)("svg",{onClick:()=>this.setContactAdmin(),className:"contact-admin-close-button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(C.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),Object(C.jsx)("textarea",{onChange:e=>this.inputHandler("name",e.target.value),style:{minHeight:"25px",marginTop:"40px"},name:"text",rows:"0",cols:"35",wrap:"soft",placeholder:a}),Object(C.jsx)("textarea",{onChange:e=>this.inputHandler("email",e.target.value),style:{minHeight:"25px",marginTop:"10px"},name:"text",rows:"0",cols:"35",wrap:"soft",placeholder:i}),Object(C.jsx)("textarea",{onChange:e=>this.inputHandler("messageContent",e.target.value),style:{minHeight:"45px",marginTop:"10px"},name:"text",rows:"5",cols:"35",wrap:"soft",placeholder:s}),Object(C.jsx)("div",{className:"contact-admin-send-button",children:Object(C.jsx)("p",{style:{color:"#fff"},onClick:()=>this.sendMessageToAdmin(),children:"send"})})]})}):null]})}}var mi=pi;var ui=function(){return Object(C.jsx)(W.b,{children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(oe,{}),Object(C.jsx)(mi,{}),hi]})})};var gi=e=>{e&&e instanceof Function&&s.e(17).then(s.bind(null,155)).then(t=>{let{getCLS:s,getFID:i,getFCP:n,getLCP:o,getTTFB:a}=t;s(e),i(e),n(e),o(e),a(e)})},xi=s(27),ji=s(65),bi=s(66);const wi=Object(xi.combineReducers)({user:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{...e,loginOpen:t.payload};case u+"_PENDING":return{...e,isLoading:!0};case u+"_FULFILLED":return{...e,user:t.payload.data};case u+"_REJECTED":return{...e,isLoading:!1,loginError:!0};case d+"_PENDING":return{...e,isLoading:!0};case d+"_FULFILLED":return{...e,user:t.payload.data,isLoggedIn:!0,isLoading:!1};case d+"_REJECTED":return alert("Your username or password is incorrect"),{...e,loginError:!0,isLoading:!1};case h+"_FULFILLED":return{...e,user:t.payload.data,isLoggedIn:!1};case p+"_PENDING":return{...e,isLoading:!0};case p+"_FULFILLED":return{...e,user:t.payload.data,isLoggedIn:!0,isLoading:!1};case p+"_REJECTED":return alert("Either the username you have chosen is already being used or consists of more than 12 characters. Please choose a defferent username"),{...e,isLoggedIn:!1,isLoading:!1};case m+"_FULFILLED":return{...e,user:t.payload.data,isLoggedIn:!0};case m+"_REJECTED":return{...e,isLoggedIn:!1};case g+"_PENDING":return{...e,isLoading:!0};case g+"_FULFILLED":return{...e,user:t.payload.data,isLoggedIn:!0,isLoading:!1};case g+"_REJECTED":return{...e,loginError:!0,isLoading:!1};default:return e}},models:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce+"_PENDING":return{...e,isloading:!0};case ce+"_FULFILLED":return{...e,isloading:!1,models:t.payload.data};case ce+"_REJECTED":return{...e,isloading:!1};case le+"_PENDING":return{...e,isloading:!0};case le+"_FULFILLED":return{...e,isloading:!1,featured:t.payload.data};case le+"_REJECTED":return{...e,isloading:!1};default:return e}},firebase:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt+"_PENDING":return{...e,isLoading:!0};case tt+"_FULFILLED":return{...e,isLoading:!1,url:t.payload};case tt+"_REJECTED":return{...e,isLoading:!1,error:!0};case Qe+"_PENDING":return{...e,isLoading:!0};case Qe+"_FULFILLED":return{...e,isLoading:!1};case Qe+"_REJECTED":return{...e,isLoading:!1,error:!0};case et+"_PENDING":return{...e,isLoading:!0};case et+"_FULFILLED":return{...e,isLoading:!1,url:t.payload};case et+"_REJECTED":return{...e,isLoading:!1,error:!0};default:return e}}});var fi=Object(xi.createStore)(wi,Object(bi.composeWithDevTools)(Object(xi.applyMiddleware)(ji.a)));const Oi=W.a;a.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(Oi,{children:Object(C.jsx)(O.a,{store:fi,children:Object(C.jsx)(v.a,{theme:{colors:{colorTier_1:"#6495ed",colorTier_2:"#5a86d5",colorTier_3:"#5077be",colorTier_4:"#4668a6",colorTier_5:"#3c598e",colorTier_6:"#324b77",colorTier_7:"#283c5f",colorTier_8:"#1e2d47",colorTier_9:"#141e2f",colorTier_10:"#0a0f18"}},children:Object(C.jsx)(ui,{})})})})}),document.getElementById("root")),gi()}]),[[137,15,16]]]);
//# sourceMappingURL=main.45648bd3.chunk.js.map