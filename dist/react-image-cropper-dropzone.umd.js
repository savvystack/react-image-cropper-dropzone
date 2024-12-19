"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-dropzone"),r=require("react-cropper"),o=function(){return o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n=function(t){var r=t.isOpen,n=t.onClose,s=t.title,u=t.children,c=t.styles,p=e.useRef(null),l=e.useState(r),d=l[0],m=l[1];return e.useEffect((function(){r?m(!0):setTimeout((function(){return m(!1)}),200)}),[r]),e.useEffect((function(){var e=function(e){p.current&&!p.current.contains(e.target)&&n()};return r&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[r,n]),d?e.createElement("div",{style:o(o({},i),c.overlay)},e.createElement("div",{ref:p,style:o(o(o({},a),c.modal),{opacity:r?1:0})},e.createElement("h2",null,s),u)):null},i={position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, .7)",display:"grid",placeItems:"center"},a={backgroundColor:"#FFF",padding:"20px",borderRadius:"10px",maxWidth:"500px",margin:"0 auto",transition:"opacity 0.2s ease-in-out"},s=e.forwardRef((function(t,n){var i=t.cropper,a=t.output,s=t.styles,u=t.src,c=e.useRef(null),p=e.useState(),l=p[0],d=p[1],m=a.width,f=a.height,g=a.maxWidth,b=a.maxHeight,v=a.format,h=a.compression;return e.useImperativeHandle(n,(function(){return{getCropData:function(){return void 0!==l?l.getCroppedCanvas({width:m,height:f,maxWidth:g,maxHeight:b}).toDataURL(v,h):""}}})),e.createElement(r,o({src:u,ref:c,onInitialized:function(e){d(e)}},i,{style:s.cropper}))}));s.displayName="ImgCropper";var u=function(t){var r=t.open,i=t.onClose,a=t.img,u=t.afterCrop,p=t.cropper,l=t.output,d=t.ui,m=t.styles,f=e.useRef(null);return e.createElement(n,{isOpen:r,onClose:i,title:d.title,styles:m},e.createElement(s,{src:a,ref:f,cropper:p,output:l,styles:m}),e.createElement("button",{type:"button",style:o(o({},c),m.saveButton),onClick:function(){i(),f.current&&u(f.current.getCropData())}},d.save))},c={display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",backgroundColor:"transparent",border:0,cursor:"pointer",textDecoration:"none",fontWeight:600,fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',fontSize:"0.875rem",lineHeight:"1.75",minWidth:64,borderRadius:8,transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, borderColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",textTransform:"none",padding:"9px 16px"},p=function(r){var n=r.children,i=r.afterCrop,a=r.cropper,s=void 0===a?{background:!0,autoCropArea:.8,scalable:!0,movable:!0,zoomable:!0,zoomOnTouch:!0}:a,c=r.dropzone,p=void 0===c?{}:c,l=r.ui,d=void 0===l?{title:"Crop your picture",save:"Save"}:l,m=r.styles,f=void 0===m?{cropper:{height:600,width:"100%"}}:m,g=r.output,b=void 0===g?{format:"image/jpeg",compression:.9}:g,v=e.useState(!1),h=v[0],y=v[1],C=e.useState(""),x=C[0],E=C[1],z=e.useCallback((function(e){if(0!==e.length){var t=new FileReader;t.onabort=function(){return console.log("[ReactImageCropperDropzone]: File reading was aborted")},t.onerror=function(){return console.log("[ReactImageCropperDropzone]: File reading has failed")},t.onload=function(){t.result&&(E(t.result),y(!0))},t.readAsDataURL(e[0])}}),[]),S=t.useDropzone(o(o({maxFiles:1,maxSize:4e6,minSize:0,accept:{"image/jpeg":[".jpeg",".jpg"],"image/png":[".png"]}},p),{onDrop:z})),R=S.getRootProps,I=S.getInputProps;return e.createElement(e.Fragment,null,e.createElement("div",o({},R()),e.createElement("input",o({},I())),n),e.createElement(u,{open:h,onClose:function(){y(!1)},img:x,afterCrop:i,cropper:s,output:b,ui:d,styles:f}))};exports.ReactImageCropperDropzone=p,exports.default=p;
