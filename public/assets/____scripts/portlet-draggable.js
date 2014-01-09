
var PortletDraggable = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            $(".sorter").sortable({
                connectWith: ".connectedSortable",
                items: "",
                opacity: 0.8,
                coneHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: "pointer"
            });
            
			
            $(".column").disableSelection();
           
			
        }

    };

}();