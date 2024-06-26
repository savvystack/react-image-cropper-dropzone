import e,{useRef as t,useState as r,useEffect as o,forwardRef as n,useImperativeHandle as i,useCallback as a}from"react";import{useDropzone as c}from"react-dropzone";import p from"react-cropper";var l=function(){return l=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var s=function(n){var i=n.isOpen,a=n.onClose,c=n.title,p=n.children,s=n.styles,d=t(null),g=r(i),f=g[0],b=g[1];return o((function(){i?b(!0):setTimeout((function(){return b(!1)}),200)}),[i]),o((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&a()};return i&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[i,a]),f?e.createElement("div",{style:l(l({},u),s.overlay)},e.createElement("div",{ref:d,style:l(l(l({},m),s.modal),{opacity:i?1:0})},e.createElement("h2",null,c),p)):null},u={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .7)",display:"grid",placeItems:"center"},m={backgroundColor:"#FFF",padding:"20px",borderRadius:"10px",maxWidth:"500px",margin:"0 auto",transition:"opacity 0.2s ease-in-out"},d=n((function(o,n){var a=o.cropper,c=o.output,s=o.styles,u=o.src,m=t(null),d=r(),g=d[0],f=d[1],b=c.width,v=c.height,h=c.maxWidth,y=c.maxHeight,C=c.format,x=c.compression;return i(n,(function(){return{getCropData:function(){return void 0!==g?g.getCroppedCanvas({width:b,height:v,maxWidth:h,maxHeight:y}).toDataURL(C,x):""}}})),e.createElement(p,l({src:u,ref:m,onInitialized:function(e){f(e)}},a,{style:s.cropper}))}));d.displayName="ImgCropper";var g=function(r){var o=r.open,n=r.onClose,i=r.img,a=r.afterCrop,c=r.cropper,p=r.output,u=r.ui,m=r.styles,g=t(null);return e.createElement(s,{isOpen:o,onClose:n,title:u.title,styles:m},e.createElement(d,{src:i,ref:g,cropper:c,output:p,styles:m}),e.createElement("button",{style:l(l({},f),m.saveButton),onClick:function(){n(),g.current&&a(g.current.getCropData())}},u.save))},f={display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",backgroundColor:"transparent",border:0,cursor:"pointer",textDecoration:"none",fontWeight:600,fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',fontSize:"0.875rem",lineHeight:"1.75",minWidth:64,borderRadius:8,transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, borderColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",textTransform:"none",padding:"9px 16px"},b=function(t){var o=t.children,n=t.afterCrop,i=t.cropper,p=void 0===i?{background:!0,autoCropArea:.8,scalable:!0,movable:!0,zoomable:!0,zoomOnTouch:!0}:i,s=t.dropzone,u=void 0===s?{}:s,m=t.ui,d=void 0===m?{title:"Crop your picture",save:"Save"}:m,f=t.styles,b=void 0===f?{cropper:{height:600,width:"100%"}}:f,v=t.output,h=void 0===v?{format:"image/jpeg",compression:.9}:v,y=r(!1),C=y[0],x=y[1],E=r(""),z=E[0],S=E[1],F=a((function(e){if(0!==e.length){var t=new FileReader;t.onabort=function(){return console.log("[ReactImageCropperDropzone]: File reading was aborted")},t.onerror=function(){return console.log("[ReactImageCropperDropzone]: File reading has failed")},t.onload=function(){t.result&&(S(t.result),x(!0))},t.readAsDataURL(e[0])}}),[]),I=c(l(l({maxFiles:1,maxSize:4e6,minSize:0,accept:{"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"]}},u),{onDrop:F})),j=I.getRootProps,w=I.getInputProps;return e.createElement(e.Fragment,null,e.createElement("div",l({},j()),e.createElement("input",l({},w())),o),e.createElement(g,{open:C,onClose:function(){x(!1)},img:z,afterCrop:n,cropper:p,output:h,ui:d,styles:b}))};export{b as ReactImageCropperDropzone,b as default};
