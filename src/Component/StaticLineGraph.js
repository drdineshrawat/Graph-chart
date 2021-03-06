import React from 'react'
import {Line} from 'react-chartjs-2'

function StaticLineGraph() {

    const dataRecord={
        // x-axis data
        labels:['Jan','Feb','Mar','Apr','May'],
        // y-axis data
        datasets:[
        {
            label:'Sales for 2020',
            data:[3,2,2,1,5],
            borderColor:['rgba(255,206,86,0.2)'],
            pointBorderColor:['rgba(255,206,86,0.2)'],
            // backgroundColor:['rgba(255,206,86,0.2)'],
            backgroundColor:"white",
            pointBackgroundColor:['rgba(255,206,86,0.2)'], 
        },
        {
            label:"Sales for 2019",
            data:[7,5,8,3,9],
            borderColor:['rgba(54,162,235,0.2)'],
            // backgroundColor:['rgba(54,162,235,0.2)'],
            backgroundColor:"white",
            pointBackgroundColor:['rgba(54,162,235,0.2)'],
            pointBorderColor:['rgba(54,162,235,0.2)'],
           
        }]
    }

    const optionOnYAxis={
        title:{
            display:true,
            text:"Dinesh Line Chart"
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0,
                    max:10,
                    stepSize:1
                },
                gridLines:{
                    display:false
                }
            }],
            xAxes:[{
                gridLines:{
                    display:false
                }
            }]
        }
    }

    return (
        <div>
            <Line 
            data={dataRecord}
            // y-axis distance 
            options={optionOnYAxis}
            />
        </div>
    )
}

export default StaticLineGraph



