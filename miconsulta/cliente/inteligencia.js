function createChart() {
    $("#grid").kendoGrid({
        dataSource: {
            type: "json",
            transport: {
                read: "http://localhost/miconsulta/ojala.php"
            },
            pageSize: 5
        },
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            field: 'nombres',
            title: "nombres"
        }, {
            field: 'apellidos',
            title: "apellidos"
        }, {
            field: 'id',
            title: "id"
        }]
    });
/*
    $("#chart").kendoChart({
        dataSource: {
            transport: {
                read: {
                    url: "http://localhost/miconsulta/ws/",
                    dataType: "json"
                }
            },
            sort: {
                field: "cuantos",
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
            field: "cuantos",
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
    */
}

$(document).ready(function(){
    createChart();
});