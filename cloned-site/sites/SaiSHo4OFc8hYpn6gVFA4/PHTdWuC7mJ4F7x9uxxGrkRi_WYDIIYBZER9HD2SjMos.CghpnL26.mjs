import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{A as t,C as n,L as r,_ as i,b as a,j as o,l as s,o as c,p as l,s as u,w as d,y as f,z as p}from"./react.ChbYa_hz.mjs";import{O as ee,a as te,r as ne,t as m}from"./motion.bft5jKLe.mjs";import{Et as re,G as h,L as g,N as _,P as v,Pt as y,St as b,Tt as x,b as S,bt as C,c as w,et as T,g as E,gt as D,o as O,s as ie,yt as ae}from"./framer.D__idx_Y.mjs";import{h as k,o as oe,p as A,t as se}from"./OIjZRBmWDcIE2B6qgG1j.OAuxHjmB.mjs";import ce,{t as le}from"./81VcVOBK0Pqrs6TdlUIPDBHC4ztz66ar_wVjQ6fjoWA.CXYURUw9.mjs";var ue=e((()=>{se()}));function j({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?c(fe,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?c(M,{html:n,style:o}):c(de,{style:o})}function de({style:e}){return c(`div`,{style:{minHeight:z(e),...k,overflow:`hidden`,...e},children:c(`div`,{style:H,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function fe({url:e,zoom:t,radius:n,border:r,style:a}){let o=!a.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let s=oe(),[l,u]=i(s?void 0:!1);return f(()=>{if(!s)return;let t=!0;u(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&u(e)}else{let e=await n.text();console.error(e),u(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),u(e)}),()=>{t=!1}},[e]),s&&o?c(R,{message:`URL embeds do not support auto height.`,style:a}):e.startsWith(`https://`)?l===void 0?c(L,{}):l instanceof Error?c(R,{message:l.message,style:a}):l===!0?c(R,{message:`Can’t embed ${e} due to its content security policy.`,style:a}):c(`iframe`,{src:e,style:{...B,...a,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:s?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:pe(s)}):c(R,{message:`Unsupported protocol.`,style:a})}function pe(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function M({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return c(n||r?P:N,{html:e,...t})}return c(F,{html:e,...t})}function N({html:e,style:t}){let n=a(),[r,o]=i(0);f(()=>{let e=n.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&o(r)}return p.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{p.removeEventListener(`message`,t)}},[]);let s=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,l={...B,...t};return t.height||(l.height=r+`px`),c(`iframe`,{ref:n,style:l,srcDoc:s})}function P({html:e,style:t}){let n=a();return f(()=>{let t=n.current;if(t)return t.innerHTML=e,I(t),()=>{t.innerHTML=``}},[e]),c(`div`,{ref:n,style:{...V,...t}})}function F({html:e,style:t}){return c(`div`,{style:{...V,...t},dangerouslySetInnerHTML:{__html:e}})}function I(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)I(t)}function L(){return c(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...A,overflow:`hidden`},children:c(`div`,{style:H,children:`Loading…`})})}function R({message:e,style:t}){return c(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:z(t),...A,overflow:`hidden`,...t},children:c(`div`,{style:H,children:e})})}function z(e){if(!e.height)return 200}var B,V,H,me=e((()=>{r(),u(),d(),T(),ue(),v(j,{type:{type:w.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:w.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:w.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:w.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:w.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:w.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),B={width:`100%`,height:`100%`,border:`none`},V={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},H={textAlign:`center`,minWidth:140}}));function he(e,t){for(;t;){let n=U[t.id];if(n){let t=n.read()[e];if(t)return t}t=t.fallback}}function ge(e){let t=[];for(;e;){let n=U[e.id];if(n){let e=n.preload();e&&t.push(e)}e=e.fallback}if(t.length>0)return Promise.all(t)}function _e(e){let t=ge(e);if(t)throw t}var U,ve=e((()=>{T(),U={buyKBVWzl:new S(()=>import(`./fw4ho2Vh9-0.BA_W9bEr.mjs`))}})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{u(),T(),m(),d(),me(),ve(),le(),W=h(j),G={},K=[],q=`framer-CWhgK`,J={rmEEhA6G1:`framer-v-d2wg5`},Y=(e,t,n)=>e&&t?`position`:n,X=({value:e})=>b()?null:c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),Z=({height:e,id:t,width:n,...r})=>({...r}),Q=y(l(function(e,r){let i=a(null),l=r??i,u=n(),{activeLocale:d,setLocale:f}=x();D();let{style:p,className:m,layoutId:h,variant:_,...v}=Z(e);re(o(()=>ce({},d),[d]));let[y,b]=C(_,G,!1),S=g(q),w=t(E)?.isLayoutTemplate,T=!!t(te)?.transition?.layout,k=Y(w,T);return _e(d),ae({}),c(E.Provider,{value:{activeVariantId:y,primaryVariantId:`rmEEhA6G1`,variantClassNames:J},children:s(ne,{id:h??u,children:[c(X,{value:`html body { background: rgb(0, 0, 0); }`}),c(ee.div,{...v,className:g(S,`framer-d2wg5`,m),ref:l,style:{...p},children:c(O,{children:c(ie,{className:`framer-1yerrwr-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:k,nodeId:`NMdYv5K8F`,scopeId:`fw4ho2Vh9`,children:c(j,{height:`100%`,html:he(`v0`,d)??`<style>
.applyButton.brandColoredButton {
  border-radius: 12px !important;
}
</style>`,id:`NMdYv5K8F`,layoutId:`NMdYv5K8F`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})}),c(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-CWhgK.framer-1fj5wn2, .framer-CWhgK .framer-1fj5wn2 { display: block; }`,`.framer-CWhgK.framer-d2wg5 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-CWhgK .framer-1yerrwr-container { flex: none; height: 400px; position: relative; width: 600px; }`],`framer-CWhgK`),Q.displayName=`Page`,Q.defaultProps={height:1080,width:1200},_(Q,[{explicitInter:!0,fonts:[]},...W],{supportsExplicitInterCodegen:!0}),$={exports:{default:{type:`reactComponent`,name:`Framerfw4ho2Vh9`,slots:[],annotations:{framerImmutableVariables:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerAcceptsLayoutTemplate:`true`,framerDisplayContentsDiv:`false`,framerContractVersion:`1`,framerLayoutTemplateFlowEffect:`true`,framerColorSyntax:`true`,framerIntrinsicHeight:`1080`,framerScrollSections:`false`,framerResponsiveScreen:`true`,framerIntrinsicWidth:`1200`,framerAutoSizeImages:`true`,framerComponentViewportWidth:`true`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{$ as __FramerMetadata__,Q as default,K as queryParamNames};
//# sourceMappingURL=PHTdWuC7mJ4F7x9uxxGrkRi_WYDIIYBZER9HD2SjMos.CghpnL26.mjs.map