import { Publisher } from "./Publisher";
import { Report } from "./Report";
import { Chart, elements } from "../node_modules/chart.js/auto/auto";

export class ViewModel {

    reportForm: HTMLFormElement = document.forms[0];
    totalsTable = document.getElementById('totals-table');

    setUpReportFormView(publishers: Publisher[]) {
        const selectDropdown: HTMLSelectElement = this.reportForm['publisher-name'];
        publishers.forEach(publisher => {
            let option: HTMLElement = document.createElement('OPTION');
            let value = document.createTextNode(publisher.publisherName);
            selectDropdown.appendChild(option);
            option.appendChild(value);
        });
    }

    setUpReportsTableView(reports: Report[]) {
        const table = document.getElementById('totals-table');
        let tableBody = document.createElement('TBODY');
        let tableBodyId = document.createAttribute('id');
        tableBodyId.value = 'totals-table-body';
        tableBody.setAttributeNode(tableBodyId);
        table?.appendChild(tableBody);

        reports.forEach(report => {
            let tableRow = document.createElement('TR');
            tableBody.appendChild(tableRow);
            let count: number = 1;
            let reportObjAsArray = Object.values(report);

            while (count < reportObjAsArray.length) {
                let tableData = document.createElement('TD');
                let value = document.createTextNode(reportObjAsArray[count]);
                tableData.appendChild(value);
                tableRow.appendChild(tableData);
                count++;
            }
        });
    }

    setUpStrengthIndexChartView(reports: Report[]) {
        const ctx: any = document.getElementById('reports-chart');
        let index = 0;
        let tempReportsArrayForReordered: number[][] = [];
        
        let filteredReportsArray = reports.map((report) => {
            return Object.values(report).filter((value, index) => { return index > 1; }).map(value => { return parseInt(value); });
        })
        
        filteredReportsArray[0].forEach(val => {
            let filteredReportsArrayReorderedByIndex = filteredReportsArray.map(elementArray => {
                    return elementArray[index];
                });
            tempReportsArrayForReordered.push(filteredReportsArrayReorderedByIndex);
            index++;
        });

        let sortedReportsDataForChart = tempReportsArrayForReordered.map(val => {
            return val.reduce((a, b) => a + b)
        });

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Placement', 'Video', 'Hour', 'Return Visit', 'Bible Study'],
                datasets: [{
                    label: 'Strength Index',
                    data: sortedReportsDataForChart,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                animation: {
                    loop: false
                }
            }
        });
    }
}