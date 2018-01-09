
import React from 'react'
import dva, { connect } from 'dva';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';


// import {AgGrid} from 'tf-ag-grid';
var AgGrid = require("tf-ag-grid");
import {AgGridReact} from 'tf-ag-grid-react';

import '../../../node_modules/tf-ag-grid/dist/styles/ag-grid.css';
import '../../../node_modules/tf-ag-grid/dist/styles/theme-fresh.css';



const code = [
`
npm install react-dom-factories --save
npm install tf-ag-grid --save
npm install tf-ag-grid-react --save

`,

];



var gridOptions = {
    // define grid columns
    columnDefs: [
        // using default ColDef
        {headerName: '名字', field: 'athlete'},
        {headerName: '运动', field: 'sport'},

        // using number column type
        {headerName: '年龄', field: 'age', type: 'numberColumn'},
        {headerName: '年份', field: 'year', type: 'numberColumn'},

        // using date and non-editable column types
		{headerName: '日期', field: 'date', type: ['dateColumn', 'nonEditableColumn'], width: 200 },

        {
            headerName: '一级title',
            groupId: '11111',
            children: [
                // using medal column type
                {headerName: '1', field: 'gold', type: 'medalColumn'},
                {headerName: '2', field: 'silver', type: 'medalColumn'},
                {headerName: '3', field: 'bronze', type: 'medalColumn'}
            ]
        }
    ],

    // default ColDef, gets applied to every column
    defaultColDef: {
        // set the default column width
        width: 150,
        // make every column editable
        editable: true,
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter'
    },

    // default ColGroupDef, get applied to every column group
    defaultColGroupDef: {
        marryChildren: true
    },

	// enableFilter: false,

    // define specific column types
    columnTypes: {
        numberColumn: {width: 83, filter: 'agNumberColumnFilter'},
        medalColumn: {width: 100, columnGroupShow: 'open', suppressFilter: true},
        nonEditableColumn: {editable: false},
        dateColumn: {
            // specify we want to use the date filter
            filter: 'agDateColumnFilter',

            // add extra parameters for the date filter
            filterParams: {
                // provide comparator function
                comparator: function(filterLocalDateAtMidnight, cellValue) {
                    // In the example application, dates are stored as dd/mm/yyyy
                    // We create a Date object for comparison against the filter date
                    var dateParts = cellValue.split('/');
                    var day = Number(dateParts[2]);
                    var month = Number(dateParts[1]) - 1;
                    var year = Number(dateParts[0]);
                    var cellDate = new Date(day, month, year);

                    // Now that both parameters are Date objects, we can compare
                    if (cellDate < filterLocalDateAtMidnight) {
                        return -1;
                    } else if (cellDate > filterLocalDateAtMidnight) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        }
    },

    rowData: null,
    enableFilter: true,
    floatingFilter: true
};




function TfAgGridReact ({ modelsTfAgGridReact, dispatch }) {

	const onGridReady = function (params) {


		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;

		const httpRequest = new XMLHttpRequest();

		const updateData = data => {
			params.api.setRowData(data);
		};

		httpRequest.open(
			"GET",
			"https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json"
		);
		httpRequest.send();
		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === 4 && httpRequest.status === 200) {
				updateData(JSON.parse(httpRequest.responseText));
			}
		};


	}


	return (
		<div>
			<h1>一个ag-Grid React Component的栗子</h1>
			<SyntaxHighlighter language='javascript' style={dark}>{ code[0] }</SyntaxHighlighter>

			<div style={{'height': 300}} className="ag-fresh">
				<AgGridReact
					{...gridOptions}
					onGridReady={ onGridReady }
				>
				</AgGridReact>
			</div>


		</div>
	);


}

export default connect(({modelsTfAgGridReact}) => ({modelsTfAgGridReact}))(TfAgGridReact);
