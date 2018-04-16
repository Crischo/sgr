function createChart() {
    $("#grid").kendoGrid({
        dataSource: {
      
            type: "json",
            transport: {
                read: "http://localhost/miconsulta/ws/consulta1.php"
            },
            pageSize: 5
        },
        
        height: 475,
        filterable: true,
        toolbar: ['excel','pdf'],
        excel: {
          allPages: true,
          fileName: "Ppdi_ciudads.xlsx"
        },
         pdf: {
         fileName: "Kendo UI Grid Export.pdf",
         allPages: true,
        },
        resizable: true,
        pageable: { refresh: true, pageSizes: true, },
        sortable: false,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            field: 'sera',
            title: "nombres"
        }, {
            field: 'conteo',
            title: "cuantos"
        }]
    });

    $("#chart").kendoChart({
        dataSource: {
            transport: {
                read: {
                    url: "http://localhost/miconsulta/ws/consulta1.php",
                    dataType: "json"
                }
            },
            sort: {
                field: "conteo",
                dir: "asc"
            }
        },
        title: {
            text: "Libros registrados por autor"
        },
        legend: {
            position: "top"
        },
        seriesDefaults: {
            type: "column"
        },
        series:
        [{
            field: "conteo",
            categoryField: "sera",
            name: "Autores"
        }],
        categoryAxis: {
            labels: {
                rotation: -90
            }
        },
        valueAxis: {
            labels: {
                format: "{0:N0}"
            },
            majorUnit: 5
        }
    });
    
}/*
$(document).ready(function(){
    createChart();
});
*/