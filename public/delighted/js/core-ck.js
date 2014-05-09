function init(){$(".panel-close").on("click",function(e){e.preventDefault();$(this).parent().parent().parent().parent().addClass(" animated fadeOutDown")});$(".finish").click(function(){$(this).parent().toggleClass("finished");$(this).toggleClass("fa-square-o")});$(".progress .progress-bar").progressbar();$(".fa-hover").click(function(e){e.preventDefault();var t=$(this).find("i").attr("class");$(".modal-title").html(t);$(".icon-show").html('<i class="'+t+' fa-5x "></i>&nbsp;&nbsp;<i class="'+t+' fa-4x "></i>&nbsp;&nbsp;<i class="'+t+' fa-3x "></i>&nbsp;&nbsp;<i class="'+t+' fa-2x "></i>&nbsp;&nbsp;<i class="'+t+' "></i>&nbsp;&nbsp;');$(".modal-footer span.icon-code").html('"'+t+'"');$("#myModal").modal("show")});$(".panel-settings").click(function(e){e.preventDefault();var t=$(this).closest(".panel").parent().attr("id"),n=$(this).closest(".panel-title").text();$(".modal-title").html(n);$("#customiseWidget #current-div").val(t);$("#customiseWidget #column-size").val($("#"+t).attr("class"));$("#customiseWidget").modal("show")});$("#customiseWidget #submit").on("click",function(e){e.preventDefault();var t=$("#customiseWidget #color").val(),n=$("#customiseWidget #title").val(),r="#"+$("#customiseWidget #current-div").val(),i=$("#customiseWidget #column-size").val();$(r).find(".panel").attr("class","panel "+t);$(r).attr("class",i);$("#customiseWidget").modal("hide")});$(".panel-minimize").on("click",function(e){e.preventDefault();var t=$(this).parent().parent().parent().next(".panel-body");t.is(":visible")?$("i",$(this)).removeClass("fa-chevron-up").addClass("fa-chevron-down"):$("i",$(this)).removeClass("fa-chevron-down").addClass("fa-chevron-up");t.slideToggle()});$(".panel-refresh").on("click",function(e){e.preventDefault();var t=$(this).parent().parent().parent().next(".panel-body");t.mask('<i class="fa fa-refresh fa-spin"></i> Loading...');setTimeout(function(){t.unmask()},1e3)})}function loadPage(e,t){urlExt=e+".html";$.ajax({type:"GET",url:urlExt,dataType:"html",cache:!1,success:function(){t.mask('<h1><i class="fa  fa-refresh fa-spin"></i> Loading...</h1>');t.load(urlExt,null,function(t){window.location.hash=e;$(".breadcrumb .active").html(e);init();sortablePortlets()}).fadeIn("slow")},error:function(e,n,r){t.load("404.html");setTimeout(function(){loadPage("dashboard",t);$("ul.nav-list li ").removeClass("active");$('ul.nav-list li:has(a[href="dashboard"])').addClass("active").closest(".submenu").addClass("current").find("ul").css("display","block")},3e3)},async:!1})}function randNum(){return(Math.floor(Math.random()*21)+20)*1200}function sortablePortlets(){$(".grid").sortable({revert:"invalid",cursor:"move",placeholder:" col-md-2 well placeholder tile",handle:".panel-heading",forceHelperSize:!0,start:function(e,t){t.placeholder.height(t.helper.height())-15;t.placeholder.width(t.helper.width()-15)},stop:function(e,t){}});$(".grid").on("sortupdate",function(e,t){var n=$(this).sortable("serialize");localStorage.setItem("sorted",n)});if(localStorage.getItem("sorted")!==null){var e=localStorage.getItem("sorted").substring(6).split("&div[]="),t=$(".grid");$items=$(".grid").children();for(var n=e[e.length-1];n>=0;n--)t.prepend($items.get(e[n]-1))}}function displayResult(e,t,n){var r=$(".main-content");if(ajax_version){loadPage(t,r);$(".nav-input-search").val("")}else window.href.location="val"}$(document).ready(function(){ajax_version=!0;$.ajaxSetup({cache:!1});$(".options-toggle").on("click",function(e){e.preventDefault();$(".options-holder").toggleClass("closed")});$(".close-right-user").click(function(){$(".user-details").addClass("user-details-close")});$(".user-menu").on("click",function(e){e.preventDefault();$(".user-details").toggleClass("user-details-close")});$(".user-canvas").easyPieChart({animate:3e3,lineWidth:8,size:110,barColor:"#a0d269",onStep:function(e){this.$el.find("span").text(~~e)}});$(".user-canvas-two").easyPieChart({animate:3e3,lineWidth:8,size:110,barColor:"#df6c6e"});$(".toggle-left-sidebar").on("click",function(e){e.preventDefault();$(".left-sidebar").toggleClass("left-sidebar-open")});$(".minibar-small").click(function(){$(".site-holder").toggleClass("mini-sidebar")});$("ul.nav-list").accordion();$(".refresh-storage").click(function(e){e.preventDefault();var t;t=Messenger().post({message:"Are you sure to clear changes?",type:"info",actions:{success:{label:"Hell yes!!",action:function(){$(this).find(".fa-refresh").addClass("fa-spin");window.localStorage.clear();$(this).find(".fa-refresh").removeClass("fa-spin");return t.update({message:"Successfully Cleared",type:"success",actions:!1})}},cancel:{label:"Not really ",action:function(){return t.update({message:"Storage remains unclear",type:"error",actions:!1})}}}})});init();var e=$(".main-content"),t=window.location.hash.substr(1);localStorage.setItem("working",t);if(ajax_version){setTimeout(function(){loadPage(t,e);$('ul.nav-list li:has(a[href="'+t+'"])').addClass("active").closest(".submenu").addClass("current").find("ul").css("display","block")},2e3);$(".options-holder .fa-links").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(this).attr("target");if(n=="_blank")window.open(t,"_blank");else if(t!="#"){var r=$(".main-content");loadPage(t,r)}});$("ul.nav-list li a").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(this).attr("target");if(n=="_blank")window.open(t,"_blank");else if(t!="#"){var r=$(".main-content");$("ul.nav-list li ").removeClass("active");$(this).parent().addClass("active");$(".user-details").addClass("user-details-close");loadPage(t,r);$(".left-sidebar").hasClass("left-sidebar-open")&&$(".left-sidebar").toggleClass("left-sidebar-open");$(".site-holder").hasClass("mini-sidebar")&&$("ul.nav-list li ul ").css("display","none")}})}$(".nav-input-search").typeahead({source:[{id:"dashboard",name:"dashboard"},{id:"dashboard",name:"Chat"},{id:"gallery",name:"Gallery"},{id:"gallery",name:"Images"},{id:"dashboard",name:"Calendar"},{id:"portlets",name:"Portlets"},{id:"delighted-layouts",name:"Delighted Layouts"},{id:"grids",name:"Grids"},{id:"template",name:"Template Page"},{id:"template",name:"Basic Template"},{id:"inbox",name:"Inbox"},{id:"invoice",name:"Invoice"},{id:"typography",name:"Typography"},{id:"tasks",name:"Taks"},{id:"alerts",name:"Alerts"},{id:"profile",name:"Profile"},{id:"delighted-wiki",name:"Delighted Wiki"},{id:"buttons",name:"Buttons"},{id:"panels",name:"Panels"},{id:"jquery-ui",name:"Sliders"},{id:"maps",name:"Maps"},{id:"timeline",name:"timeline"},{id:"flot-charts",name:"Flot Charts"},{id:"morris-charts",name:"Morris Charts"},{id:"inline-charts",name:"Inline Charts"},{id:"nvd3charts",name:"NVD3 Charts"},{id:"chartjs",name:"Chartjs"},{id:"date-paginator",name:"Date Paginator"},{id:"portlets",name:"Draggable Portlets"},{id:"jq-gridplugin",name:"Jq grid Plugin"},{id:"simple-tables",name:"Simple tables"},{id:"dynamic-tables",name:"Dynamic tables"},{id:"dropzone-file-upload",name:"Dropzone file upload"},{id:"form-input-masks",name:"Form input masks"},{id:"font-awesome",name:"Font Awesome"},{id:"input-groups",name:"Input groups"},{id:"ionicons",name:"Ion Icons"},{id:"inbox",name:"Mail"},{id:"jquery-ui",name:"Color picker"},{id:"social",name:"Social"},{id:"filetypes",name:"File Types"},{id:"glyphicons",name:"Glyphicons"},{id:"editor",name:"Wysiwyg Editor"},{id:"grid",name:"Grid"},{id:"file-manager",name:"File Manager"},{id:"image-crop",name:"Image Crop"},{id:"dropzone",name:"Dropzone"},{id:"bootstrap-editors",name:"Bootstrap Editors"},{id:"wizards",name:"wizards"},{id:"form-elements",name:"Form Validations"},{id:"form-layouts",name:"Form Layouts"},{id:"form-elements",name:"Form Elements"},{id:"dashboard",name:"Docs"},{id:"dashboard",name:"Unlimited Menu"},{id:"general-elements",name:"General Elements"},{id:"tree-view",name:"Tree View"},{id:"jquery-ui",name:"Jquery Ui"},{id:"nestable-lists",name:"Nestabl Lists"},{id:"extended-zoom",name:"Extended Zoom"},{id:"dropzone",name:"Drop Zone"},{id:"editor",name:"Wysiwyg"},{id:"editor",name:"Bootstrap Editor"}],itemSelected:displayResult})});