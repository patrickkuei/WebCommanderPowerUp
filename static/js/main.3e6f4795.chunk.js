(this.webpackJsonpwebcommanderpowerup=this.webpackJsonpwebcommanderpowerup||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),i=n(10),l=n.n(i),s=(n(27),n(28),n(2)),o=n(12);function d(){for(var e=[],t=0;t<8;t++)e.push(Object(r.jsx)("div",{className:"col-3 card",children:Object(r.jsxs)("div",{className:"folder__content",children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-folder",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"})}),Object(r.jsx)("div",{className:"folder__content__picture-name card-body text-center",children:Object(r.jsx)("h5",{className:"card-title",children:Object(r.jsx)(o.a,{speed:3,width:150,height:26,viewBox:"0 0 150 26",backgroundColor:"#dedede",foregroundColor:"#7f7d9b",children:Object(r.jsx)("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"150",height:"26"})})})})]})},t));return Object(r.jsx)("div",{className:"folder-list row border-bottom overflow-auto",children:e})}var u=a.a.createContext(),b=a.a.createContext(),j=n(9),h={DATA_LOADING:"data_loading",UPDATE_CURRENT_FOLDER:"update_current_folder",DELETE_FILE:"delete_file"};function f(e,t){switch(t.type){case h.DATA_LOADING:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case h.UPDATE_CURRENT_FOLDER:var n=t.folderData;return{isLoading:!1,id:n.id,children:n.children};case h.DELETE_FILE:var r=t.id;return Object(j.a)(Object(j.a)({},e),{},{children:e.children.filter((function(e){return e.id!==r}))});default:throw new Error("action not defined")}}var p=function(){return Object(c.useContext)(u)},x=function(){return Object(c.useContext)(b)};function m(e){var t=Object(c.useReducer)(f,{isLoading:!0,id:"",children:[]}),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(r.jsx)(u.Provider,{value:{currentFolder:a},children:Object(r.jsx)(b.Provider,{value:{currentFolderDispatch:i},children:e.children})})}var O=a.a.createContext(),v=a.a.createContext(),g=n(6),w={SLICE_PATH:"slice_path",APPEND_FOLDER:"append_folder",GET_NEW_PATH:"get_new_path"};function F(e,t){switch(t.type){case w.SLICE_PATH:var n=t.index;return e.slice(0,n+1);case w.APPEND_FOLDER:var r=t.id,c=t.name;return[].concat(Object(g.a)(e),[{id:r,name:c}]);case w.GET_NEW_PATH:for(var a=t.dataset,i=[],l=a.idpath.split("/"),s=a.namepath.split("/"),o=0;o<l.length;o++)i.push({id:l[o],name:s[o]});return i}}var _=function(){return Object(c.useContext)(v)};function y(e){var t=Object(c.useReducer)(F,[{id:"root",name:"root"}]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(r.jsx)(O.Provider,{value:{pathArray:a},children:Object(r.jsx)(v.Provider,{value:{pathArrayDispatch:i},children:e.children})})}var N=a.a.createContext(),C=a.a.createContext(),D={APPEND_SELECTED_FILE:"append_selected_file",DESELECT_FILE:"deselect_file",RESET:"reset"};function E(e,t){switch(t.type){case D.APPEND_SELECTED_FILE:var n=t.id,r=t.name,c=t.fileType;return[].concat(Object(g.a)(e),[{id:n,name:r,type:c}]);case D.DESELECT_FILE:var a=t.id;return e.filter((function(e){return e.id!==a}));case D.RESET:return[];default:console.log("default")}}var L=function(){return Object(c.useContext)(N)},A=function(){return Object(c.useContext)(C)};function k(e){var t=Object(c.useReducer)(E,[]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(r.jsx)(N.Provider,{value:{selectedFiles:a},children:Object(r.jsx)(C.Provider,{value:{selectedFilesDispatch:i},children:e.children})})}var S={slicePath:function(e){return{type:w.SLICE_PATH,index:e}},appendFolder:function(e,t){return{type:w.APPEND_FOLDER,id:e,name:t}},getNewPathArray:function(e){return{type:w.GET_NEW_PATH,dataset:e}}},P={appendSelectedFile:function(e){return{type:D.APPEND_SELECTED_FILE,id:e.id,name:e.name,fileType:e.fileType}},deselectFile:function(e){return{type:D.DELETE_FILE,id:e}},reset:function(){return{type:D.RESET}}},T=n(3),I=n.n(T),z=n(5),R=n(7),H=n.n(R),B="http://172.16.240.53:45816/web-commander-pro/api/",M={getFolderHierarchy:function(){return H.a.get("".concat(B,"/hierarchy"))},getFilesById:function(e){return H.a.get("".concat(B,"/items/").concat(e))},createFileByData:function(e,t,n){return H.a.post("".concat(B,"/items/"),{payload:{parentItemId:e,items:t,folders:n}})},pasteFilesById:function(e,t){return H.a.post("".concat(B,"/items/"),{payload:{folder:e,files:t}})},deleteFileById:function(e){return H.a.delete("".concat(B,"/items/"),{params:{fileId:e}})}},V={dataLoaing:function(){return{type:h.DATA_LOADING}},updateCurrentFolder:function(e){return{type:h.UPDATE_CURRENT_FOLDER,folderData:e}},deleteFile:function(e){return{type:h.DELETE_FILE,id:e}}},U=function(e){e(P.reset())},G=function(){var e=Object(z.a)(I.a.mark((function e(t,n){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V.dataLoaing()),e.next=3,M.getFilesById(n);case 3:r=e.sent,c=r.data,t(V.updateCurrentFolder(c));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var W=function(e){var t=e.file,n=e.isDetail,c=e.isChecked,a=x().currentFolderDispatch,i=_().pathArrayDispatch,l=A().selectedFilesDispatch,s=function(e){switch(e){case 1:return"folder";case 2:return"doc";case 3:return"media";case 4:return"archive";default:return"file"}}(t.type),o=function(e){switch(e){case"folder":return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-folder",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"})});case"doc":return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-file-text-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"})});case"media":return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-file-earmark-music-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 0 1 .757-.97l1-.25A1 1 0 0 1 11 6.64z"})});case"archive":return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-archive-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"})});case"file":return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100px",height:"100px",fill:"currentColor",className:"folder__content__picture bi bi-file-earmark-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{d:"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"})})}}(s),d=function(e,t){"folder"===s&&(G(a,e),i(S.appendFolder(e,t)))},u=function(e,t,n,r){e.target.checked?l(P.appendSelectedFile({id:t,name:n,type:r})):l(P.deselectFile(t))};return n?Object(r.jsxs)("tr",{onDoubleClick:function(){return d(t.id,t.name)},children:[Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"checkbox",checked:c,onChange:function(e){return u(e,t.id)}})}),Object(r.jsx)("td",{scope:"row",children:t.name}),Object(r.jsx)("td",{children:s.toUpperCase()}),Object(r.jsxs)("td",{children:[t.size.toLocaleString()," KB"]})]}):Object(r.jsxs)("div",{className:"col-3 card",onDoubleClick:function(){return d(t.id,t.name)},children:[Object(r.jsx)("input",{className:"folder__checkbox",type:"checkbox",checked:c,onDoubleClick:function(e){return e.stopPropagation()},onChange:function(e){return u(e,t.id,t.name,t.type)}}),Object(r.jsxs)("div",{className:"folder__content",children:[o,Object(r.jsx)("div",{className:"folder__content__picture-name card-body text-center",children:Object(r.jsx)("h5",{className:"card-title",children:t.name})})]})]})};var J=function(e){var t=e.isDetail,n=p().currentFolder,a=x().currentFolderDispatch,i=L().selectedFiles,l=n.children,s=function(e){for(var t=!1,n=0;n<i.length;n++)if(e===i[n].id){t=!0;break}return t};return Object(c.useEffect)((function(){G(a,"root")}),[]),n.isLoading?Object(r.jsx)(d,{}):Object(r.jsx)("div",{className:"folder-list row border overflow-auto",children:t?Object(r.jsxs)("table",{className:"table table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{scope:"col",children:"name"}),Object(r.jsx)("th",{scope:"col",children:"type"}),Object(r.jsx)("th",{scope:"col",children:"size"})]})}),Object(r.jsx)("tbody",{children:l.map((function(e){var n=s(e.id);return Object(r.jsx)(W,{file:e,isDetail:t,isChecked:n},e.id)}))})]}):l.map((function(e){var n=s(e.id);return Object(r.jsx)(W,{file:e,isDetail:t,isChecked:n},e.id)}))})};function Y(){return Object(r.jsxs)(o.a,{className:"bg-dark",speed:3,width:255,height:505,viewBox:"0 0 255 505",backgroundColor:"#dedede",foregroundColor:"#7f7d9b",children:[Object(r.jsx)("rect",{x:"10",y:"10",rx:"3",ry:"3",width:"50",height:"15"}),Object(r.jsx)("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"50",height:"15"}),Object(r.jsx)("rect",{x:"20",y:"70",rx:"3",ry:"3",width:"120",height:"15"}),Object(r.jsx)("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"50",height:"15"}),Object(r.jsx)("rect",{x:"30",y:"130",rx:"3",ry:"3",width:"70",height:"15"}),Object(r.jsx)("rect",{x:"30",y:"160",rx:"3",ry:"3",width:"70",height:"15"}),Object(r.jsx)("rect",{x:"40",y:"190",rx:"3",ry:"3",width:"120",height:"15"}),Object(r.jsx)("rect",{x:"40",y:"220",rx:"3",ry:"3",width:"120",height:"15"})]})}var K=function(){var e=p().currentFolder,t=x().currentFolderDispatch,n=A().selectedFilesDispatch,a=_().pathArrayDispatch,i=Object(c.useState)({isLoading:!0,root:{}}),l=Object(s.a)(i,2),o=l[0],d=l[1],u=function(){var e=Object(z.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getFolderHierarchy();case 2:t=e.sent,n=t.data,d({isLoading:!1,root:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),o.isLoading?Object(r.jsx)(Y,{}):Object(r.jsx)("nav",{className:"left-bar__navigation navbar navbar-dark bg-dark",children:Object(r.jsx)("div",{className:"container-fluid",children:function c(i,l,s){var o=Object(g.a)(l),d=Object(g.a)(s);return o.push([i.id]),d.push([i.name]),Object(r.jsx)("ul",{className:"navbar-nav",children:Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-dark","data-idpath":o.join("/"),"data-namepath":d.join("/"),onClick:function(e){return function(e,r){G(t,e),a(S.getNewPathArray(r.target.dataset)),U(n)}(i.id,e)},disabled:e.isLoading,children:i.name}),i.children&&i.children.map((function(e){return c(e,o,d)}))]},i.id)},i.id)}(o.root,[],[])})})},q=n(50);function Q(e){var t=e.value,n=t.isFolder,c=t.newFolderState,a=t.updateNewFolderState,i=t.newFiles,l=t.updateNewFiles,s=t.newFilesRef,o=function(e){return e.length>0&&!/.*[\/:*?"<>|].*/.test(e)};return n?Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"new-folder-name",className:"form-label",children:"The Name of New Folder You Want to Create"}),Object(r.jsx)("div",{className:"col-6",children:Object(r.jsx)("input",{type:"text",className:"form-control",id:"newFolderName",value:c.value,onChange:function(e){return function(e){var t=o(e.target.value);a({isValid:t,value:e.target.value})}(e)}})}),c.value.length>0&&!c.isValid?Object(r.jsxs)("p",{className:"text-danger",children:["A file name can't contain any of the following characters:",Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:'\\ / : * ? " <> |'})]}):""]})})}):Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("label",{htmlFor:"new-folder-name",className:"form-label",children:"Choose File(s) You Want to Add"}),0===i.length?Object(r.jsx)("div",{children:"No File Chosen"}):Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:i.map((function(e){return Object(r.jsxs)("li",{children:[e.name," (",e.size," bytes)"]},e.id)}))})}),Object(r.jsx)("input",{multiple:!0,type:"file",className:"form-control-file",onChange:function(e){for(var t=[],n=0;n<e.target.files.length;n++)t.push({id:Object(q.a)(),name:e.target.files[n].name,size:e.target.files[n].size});l(t)},ref:s})]})})})}function X(e){var t=e.value,n=t.isFolder,c=t.toggleIsFolder,a=t.toggleShowDialog,i=t.newFolderState,l=t.newFiles,s=t.newFilesRef,o=t.resetNewFolderState,d=t.resetFile,u=p().currentFolder,b=function(){var e=Object(z.a)(I.a.mark((function e(t,n,r){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.createFileByData(t,n,r);case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"modal-footer",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){n?o():d(),c(),a()},children:"Close"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){if(n)b(u.id,[],[{name:i.value}]),o();else{for(var e=[s.current.files.length,[]],t=e[0],r=e[1],c=0;c<t;c++)r.push({name:s.current.files[c].name,size:s.current.files[c].size});b(u.id,r,[]),d()}},disabled:!i.isValid&&0===l.length,children:"Create Files"})]})}function Z(e){var t=e.value,n=t.isFolder,c=t.toggleIsFolder,a=t.resetNewFolderState,i=t.resetFile;return Object(r.jsx)("div",{className:"modal-header nav-tabs",children:Object(r.jsxs)("ul",{className:"nav nav-tab",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:n?"nav-link active":"nav-link","aria-current":"page",onClick:function(){i(),c()},children:"Folder"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:n?"nav-link":"nav-link active",onClick:function(){a(),c()},children:"File"})})]})})}var $=function(e){var t=e.toggleShowDialog,n=Object(c.useState)(!0),a=Object(s.a)(n,2),i=a[0],l=a[1],o=Object(c.useState)({isValid:!1,value:""}),d=Object(s.a)(o,2),u=d[0],b=d[1],j=Object(c.useState)([]),h=Object(s.a)(j,2),f=h[0],p=h[1],x=Object(c.useRef)(null),m=function(){b({isValid:!1,value:""})},O=function(){p([]),x.current.value=""},v=function(){l((function(e){return!e}))};return Object(r.jsx)("div",{className:"show-modal modal",tabIndex:"-1",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content shadow",children:[Object(r.jsx)("div",{className:"modal-header",children:Object(r.jsx)("h5",{className:"modal-title",children:"Create File"})}),Object(r.jsx)(Z,{value:{isFolder:i,toggleIsFolder:v,resetNewFolderState:m,resetFile:O}}),Object(r.jsx)(Q,{value:{isFolder:i,newFolderState:u,updateNewFolderState:function(e){b(e)},newFiles:f,updateNewFiles:function(e){p(e)},newFilesRef:x}}),Object(r.jsx)(X,{value:{isFolder:i,toggleIsFolder:v,toggleShowDialog:t,newFolderState:u,newFiles:f,newFilesRef:x,resetNewFolderState:m,resetFile:O}})]})})})};function ee(e){var t=e.btnDisabled,n=Object(c.useState)(!1),a=Object(s.a)(n,2),i=a[0],o=a[1],d=function(){o((function(e){return!e}))},u=function(){return i?l.a.createPortal(Object(r.jsx)($,{toggleShowDialog:d}),document.body):null};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{className:"tool-bar__button btn btn-outline-primary btn-sm",disabled:!t,onClick:function(){d()},children:"Create"}),Object(r.jsx)(u,{})]})}function te(e){var t=e.btnDisabled,n=e.updateCopiedFiles,c=e.isCopied,a=L().selectedFiles,i=A().selectedFilesDispatch;return Object(r.jsx)("button",{type:"button",className:c?"tool-bar__button btn btn-primary btn-sm":"tool-bar__button btn btn-outline-primary btn-sm",onClick:function(){var e=a.map((function(e){return e.id}));n(Object(g.a)(e)),U(i)},disabled:t,children:"Copy"})}function ne(e){var t=e.copiedFiles,n=e.isCopied,c=e.resetCopiedFiles,a=p().currentFolder,i=function(){var e=Object(z.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.pasteFilesById(a,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("button",{type:"button",className:"tool-bar__button btn btn-outline-primary btn-sm",onClick:function(){i(t),c()},disabled:!n,children:"Paste"})}function re(e){var t=e.btnDisabled,n=L().selectedFiles,c=A().selectedFilesDispatch,a=x().currentFolderDispatch,i=function(){var e=Object(z.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.deleteFileById(t);case 2:a(V.deleteFile(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("button",{type:"button",className:"tool-bar__button btn btn-outline-primary btn-sm",onClick:function(){1===n.length?i(n[0].id):console.log("can only delete single file"),U(c)},disabled:t,children:"Delete"})}function ce(e){var t=e.btnDisabled,n=A().selectedFilesDispatch;return Object(r.jsx)("button",{type:"button",className:"tool-bar__button btn btn-outline-primary btn-sm",onClick:function(){U(n)},disabled:t,children:"Reset Select"})}var ae=function(e){var t=e.isDetail,n=e.toggleDetailView,a=L().selectedFiles,i=p().currentFolder,l=Object(c.useState)(!0),o=Object(s.a)(l,2),d=o[0],u=o[1],b=Object(c.useState)([]),j=Object(s.a)(b,2),h=j[0],f=j[1],x=Object(c.useState)(!1),m=Object(s.a)(x,2),O=m[0],v=m[1];return Object(c.useEffect)((function(){u(i.isLoading||0===a.length)}),[a.length,i.isLoading]),Object(c.useEffect)((function(){v(h.length>0)}),[h.length]),Object(r.jsx)("div",{className:"tool-bar row",children:Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)(ee,{btnDisabled:d}),Object(r.jsx)(te,{btnDisabled:d,updateCopiedFiles:function(e){f(e)},isCopied:O}),Object(r.jsx)(ne,{isCopied:O,copiedFiles:h,resetCopiedFiles:function(){f([])}}),Object(r.jsx)(re,{btnDisabled:d}),Object(r.jsx)(ce,{btnDisabled:d}),Object(r.jsx)("button",{type:"button",className:t?"tool-bar__button btn-sm btn btn-primary float-right":"tool-bar__button btn-sm btn btn-outline-primary float-right",onClick:function(){n()},disabled:i.isLoading,children:"detail"})]})})};var ie=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(k,{children:Object(r.jsxs)("div",{className:"folder-view row",children:[Object(r.jsx)("div",{className:"left-bar col-2",children:Object(r.jsx)(K,{})}),Object(r.jsxs)("div",{className:"col-10",children:[Object(r.jsx)(ae,{isDetail:n,toggleDetailView:function(){a((function(e){return!e}))}}),Object(r.jsx)(J,{isDetail:n})]})]})})};var le=function(){var e=p().currentFolder,t=x().currentFolderDispatch,n=Object(c.useContext)(O).pathArray,a=_().pathArrayDispatch,i=n.map((function(c,i){return Object(r.jsx)("li",{className:"breadcrumb-item",children:Object(r.jsx)("button",{type:"button",className:"btn btn-outline-dark btn-sm",onClick:function(){return function(e){G(t,n[e].id),a(S.slicePath(e))}(i)},disabled:e.isLoading,children:c.name})},c.id)}));return Object(r.jsx)("div",{className:"breadcrumb-screen row align-items-center justify-content-center border-bottom",children:Object(r.jsx)("div",{className:"breadcrumb-container col-8 border rounded shadow-sm",children:Object(r.jsx)("nav",{"aria-label":"breadcrumb",children:Object(r.jsx)("ol",{className:"breadcrumb-screen__list breadcrumb",children:i})})})})};var se=function(){return Object(r.jsx)(m,{children:Object(r.jsx)(y,{children:Object(r.jsxs)("div",{className:"home-page-container container-fluid border overflow-hidden",children:[Object(r.jsx)(le,{}),Object(r.jsx)(ie,{})]})})})};var oe=function(){return Object(r.jsx)(se,{})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(oe,{})}),document.getElementById("root")),de()}},[[48,1,2]]]);
//# sourceMappingURL=main.3e6f4795.chunk.js.map