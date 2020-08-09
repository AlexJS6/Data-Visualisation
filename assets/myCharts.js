let myTHead = document.getElementsByTagName("h3")[0];
let newCanvas = document.createElement("canvas");
newCanvas.id = "myChart";
newCanvas.style.width = "400px";
newCanvas.style.height = "400px";
newCanvas.classList.remove("chartjs-render-monitor");
myTHead.appendChild(newCanvas);

let myTHead2 = document.getElementsByTagName("h4")[2];
let newCanvas2 = document.createElement("canvas");
newCanvas2.id = "myChart2";
newCanvas2.style.width = "400px";
newCanvas2.style.height = "400px";
newCanvas2.classList.remove("chartjs-render-monitor");
myTHead2.appendChild(newCanvas2);

let newArr = [];
let myArr = [];
let jj = 12;
let j = 0;
for (let i = 0; i < 35; i++) {
    for (j; j < jj; j++) {
        newArr.push(parseInt(document.getElementsByTagName("td")[j].innerHTML));
    }
    myArr.push(newArr);
    newArr = [];
    if (jj < 430) {
        jj += 12;
    }
}

/*
* MY CHART1 **************
*/
for (let k = 0; k < 35; k++) {
    myArr[k].shift();
}



let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            label: 'Belgium',
            data: myArr[0],
            borderColor: [
                '#0048BA',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: 'Bulgaria',
            data: myArr[1],
            borderColor: [
                '#B0BF1A',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Czech Republic",
            data: myArr[2],
            borderColor: [
                '#7CB9E8',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Denmark",
            data: myArr[3],
            borderColor: [
                '#C0E8D5',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Germany",
            data: myArr[4],
            borderColor: [
                '#B284BE',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Estonia",
            data: myArr[5],
            borderColor: [
                '#72A0C1',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Ireland",
            data: myArr[6],
            borderColor: [
                '#EDEAE0',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Greece",
            data: myArr[7],
            borderColor: [
                '#C46210',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Spain",
            data: myArr[8],
            borderColor: [
                '#E52B50',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "France",
            data: myArr[9],
            borderColor: [
                '#3B7A57',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Croatia",
            data: myArr[10],
            borderColor: [
                '#FF7E00',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Italy",
            data: myArr[11],
            borderColor: [
                '#9966CC',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Cyprus",
            data: myArr[12],
            borderColor: [
                '#A4C639',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Latvia",
            data: myArr[13],
            borderColor: [
                '#CD9575',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Lithuania",
            data: myArr[14],
            borderColor: [
                '#665D1E',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Luxembourg",
            data: myArr[15],
            borderColor: [
                '#915C83',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Hungary",
            data: myArr[16],
            borderColor: [
                '#00FFFF',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Malta",
            data: myArr[17],
            borderColor: [
                '#D0FF14',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "The Netherlands",
            data: myArr[18],
            borderColor: [
                '#B2BEB5',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Austria",
            data: myArr[19],
            borderColor: [
                '#4B5320',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Poland",
            data: myArr[20],
            borderColor: [
                '#FF9966',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Portugal",
            data: myArr[21],
            borderColor: [
                '#007FFF',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Romania",
            data: myArr[22],
            borderColor: [
                '#F4C2C2',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Slovenia",
            data: myArr[23],
            borderColor: [
                '#FF91AF',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Slovakia",
            data: myArr[24],
            borderColor: [
                '#FAE7B5',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Finland",
            data: myArr[25],
            borderColor: [
                '#FE6F5E',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Sweden",
            data: myArr[26],
            borderColor: [
                '#A57164',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Iceland",
            data: myArr[27],
            borderColor: [
                '#8A2BE2',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Liechtenstein",
            data: myArr[28],
            borderColor: [
                '#C32148',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Norway",
            data: myArr[29],
            borderColor: [
                '#5F9EA0',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Switzerland",
            data: myArr[30],
            borderColor: [
                '#FFF600',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Montenegro",
            data: myArr[31],
            borderColor: [
                '#FF0800',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Macedonia",
            data: myArr[32],
            borderColor: [
                '#00BFFF',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Serbia",
            data: myArr[33],
            borderColor: [
                '#ED9121',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Turkey",
            data: myArr[34],
            borderColor: [
                '#ACE1AF',
            ],
            borderWidth: 2,
            fill: false
        },
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Offences recorded by the police (in thousands).'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


/* 
* Graph 2
*/
console.log(document.getElementsByTagName("td")[441].innerHTML)
let newArr2 = [];
let myArr2 = [];
let myLabels2 = [];
jj -= 9;
for (let i = 0; i < 31; i++) {
    for (j; j < jj; j++) {
        if (j == 420 || j == 423 || j == 426 || j == 429 || j == 432 || j == 435 || j == 438 || j == 441 || j == 444 || j == 447 || j == 450 || j == 453 || j == 456 || j == 459 || j == 462 || j == 465 || j == 468 || j == 471 || j == 474 || j == 477 || j == 480 || j == 483 || j == 486 || j == 489 || j == 492 || j == 495 || j == 498 || j == 501 || j == 504 || j == 507) {
            if (j === 441) {
                myLabels2.push('England and Wales(UK)')
            }
            else {
                myLabels2.push(document.getElementsByTagName("td")[j].innerHTML);
            }
        }
        else {
            newArr2.push(parseInt(document.getElementsByTagName("td")[j].innerHTML));
        }
    }
    if (jj < 508) {
        jj += 3;
    }
    myArr2.push(newArr2);
    newArr2 = [];
}

console.log(myLabels2);
console.log(myArr2);
let myFirst = [];
let mySecond = [];
for (let j = 0; j < 30; j++) {
    for (let i = 0; i < 2; i++) {
        if (i % 2 === 0) {
            myFirst.push(myArr2[j][i]);
        }
        else if (i % 2 !== 0) {
            mySecond.push(myArr2[j][i]);
        }
    }
    i = 0;
}

console.log(myFirst);
console.log(mySecond);

/*let theFirst = {
    label: "2007-09",
    data: [myFirst],
    backgroundColor: [
        '#0048BA',
    ],
    borderColor: [
        '#0048BA',
    ],
    yAxisID: "y-axis-first"
};
let theSecond = {
    label: "2010-12",
    data: [mySecond],
    backgroundColor: [
        '#0048BA',
    ],
    borderColor: [
        '#0048BA',
    ],
    yAxisID: "y-axis-second"
};
let myData = {
    labels: myLabels2,
    datasets: [theFirst, theSecond]
};
var myOptions = {
    scales: {
      xAxes: [{
        barPercentage: 1,
        categoryPercentage: 0.6
      }],
      yAxes: [{
        id: "y-axis-first"
      }, {
        id: "y-axis-second"
      }]
    }
  };*/

/*let ctc = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctc, {
    type: 'bar',
    data: myData,
    options: myOptions
});*/
let ctc = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctc, {
    type: 'bar',
    data: {
        labels: myLabels2,
        datasets: [{
            label: "2007-09",
            data: myFirst,
            borderColor: [
                '#0048BA',
            ],
            backgroundColor: [
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
                '#5DADEC',
            ],
            yAxisID: "y-axis-first"
        },
        {
            label: "2010-12",
            data: mySecond,
            borderColor: [
                '#008000',
            ],
            backgroundColor: [
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
                '#8DB600',
            ],
            yAxisID: "y-axis-second"
        },
        ],

    },
    options: {
        title: {
            display: true,
            text: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)'
        },
        scales: {
            /*xAxes: [{
              barPercentage: 1,
              categoryPercentage: 0.6
            }],*/
            yAxes: [{
                id: "y-axis-first"
            }, {
                id: "y-axis-second"
            }]
        }
    }
});
/*let ctc = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctc, {
    type: 'bar',
    data: {
        labels: myLabels2,
        datasets: [{
            label: "2007-09",
            data: [myArr2[0][0]],
            borderColor: [
                '#0048BA',
            ],
            backgroundColor: [
                '#0048BA',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "2010-12",
            data: [myArr2[0][1]],
            borderColor: [
                '#0048BA',
            ],
            backgroundColor: [
                '#0048BA',
            ],
            borderWidth: 2,
            fill: false
        },
        ],
        
        
    },
    options: {
        title: {
            display: true,
            text: 'Offences recorded by the police (in thousands).'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});*/





/*jj -= 9
let newArr2 = [];
let myArr2 = [];
for (let i=0; i<30; i++) {
    for(j; j<jj; j++) {
        newArr2.push(document.getElementsByTagName("td")[j].innerHTML);
    }
    jj+=3;
    myArr2.push(newArr2);
    newArr2 = [];
}*/
// splice(1,2)
//console.log(myArr2);
/*for (let kk=0; kk<31; kk++) {
    myArr2[kk].splice(1,2);
}*/
//console.log(myLabels);
/*for (let k=0; k<31; k++) {
    myArr2[k].shift();
}*/
/*let myLabels = [];
for (let ll=0; ll<30; ll++) {
    myLabels.push(myArr2[ll].splice(0,1));
}
console.log(myArr2);
console.log(myLabels);
*/





















/*
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            label: 'Belgium',
            data: myArr[0],
            borderColor: [
                '#0048BA',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: 'Bulgaria',
            data: myArr[1],
            borderColor: [
                '#B0BF1A',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Czech Republic",
            data: myArr[2],
            borderColor: [
                '#7CB9E8',
            ],
            borderWidth: 2,
            fill: false
        },
        {
            label: "Denmark",
            data: myArr[3],
            borderColor: [
                '#C0E8D5',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Germany",
            data: myArr[4],
            borderColor: [
                '#B284BE',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Estonia",
            data: myArr[5],
            borderColor: [
                '#72A0C1',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Ireland",
            data: myArr[6],
            borderColor: [
                '#EDEAE0',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Greece",
            data: myArr[7],
            borderColor: [
                '#C46210',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Spain",
            data: myArr[8],
            borderColor: [
                '#E52B50',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "France",
            data: myArr[9],
            borderColor: [
                '#3B7A57',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Croatia",
            data: myArr[10],
            borderColor: [
                '#FF7E00',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Italy",
            data: myArr[11],
            borderColor: [
                '#9966CC',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Cyprus",
            data: myArr[12],
            borderColor: [
                '#A4C639',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Latvia",
            data: myArr[13],
            borderColor: [
                '#CD9575',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Lithuania",
            data: myArr[14],
            borderColor: [
                '#665D1E',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Luxembourg",
            data: myArr[15],
            borderColor: [
                '#915C83',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Hungary",
            data: myArr[16],
            borderColor: [
                '#00FFFF',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Malta",
            data: myArr[17],
            borderColor: [
                '#D0FF14',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "The Netherlands",
            data: myArr[18],
            borderColor: [
                '#B2BEB5',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Austria",
            data: myArr[19],
            borderColor: [
                '#4B5320',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Poland",
            data: myArr[20],
            borderColor: [
                '#FF9966',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Portugal",
            data: myArr[21],
            borderColor: [
                '#007FFF',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Romania",
            data: myArr[22],
            borderColor: [
                '#F4C2C2',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Slovenia",
            data: myArr[23],
            borderColor: [
                '#FF91AF',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Slovakia",
            data: myArr[24],
            borderColor: [
                '#FAE7B5',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Finland",
            data: myArr[25],
            borderColor: [
                '#FE6F5E',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Sweden",
            data: myArr[26],
            borderColor: [
                '#A57164',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Iceland",
            data: myArr[27],
            borderColor: [
                '#8A2BE2',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Liechtenstein",
            data: myArr[28],
            borderColor: [
                '#C32148',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Norway",
            data: myArr[29],
            borderColor: [
                '#5F9EA0',
            ],
            borderWidth: 2,
            fill: false
        },   
        {
            label: "Switzerland",
            data: myArr[30],
            borderColor: [
                '#FFF600',
            ],
            borderWidth: 2,
            fill: false
        },  
        {
            label: "Montenegro",
            data: myArr[31],
            borderColor: [
                '#FF0800',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Macedonia",
            data: myArr[32],
            borderColor: [
                '#00BFFF',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Serbia",
            data: myArr[33],
            borderColor: [
                '#ED9121',
            ],
            borderWidth: 2,
            fill: false
        }, 
        {
            label: "Turkey",
            data: myArr[34],
            borderColor: [
                '#ACE1AF',
            ],
            borderWidth: 2,
            fill: false
        },  
        ],
    },
    options: {
        title: {
            display: true,
            text: 'Offences recorded by the police (in thousands).'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
*/




const apiUrl = 'https://canvasjs.com/services/data/datapoints.php';

function myJSONFunc() {
    let myLabels3 = [];
    let myJsonData = [];
    async function getData() {
        //response = "";
        //data = "";
        response = await fetch(apiUrl);
        data = await response.json();
        console.log(data);
        for (let x = 0; x < 11; x++) {
            for (let c = 0; c < 2; c++) {
                if (c % 2 === 0) {
                    myLabels3.push(data[x][c]);
                }
                else if (c % 2 !== 0) {
                    myJsonData.push(data[x][c]);
                }
            }
            c = 0;
            console.log(myLabels3);
            console.log(myJsonData);
        }
    }

    //getData();
    let myChart3;
    let ctl;
    console.log(myLabels3);
    console.log(myJsonData);

    /*setInterval(() => {
        myChart3 = 1;
        ctl = 1;*/
    getData();
    ctl = document.getElementById('myChart3').getContext('2d');
    myChart3 = new Chart(ctl, {
        type: 'bar',
        data: {
            labels: myLabels3,
            datasets: [{
                hidden: true, 
                label: "JsonData",
                data: myJsonData,
                borderColor: [
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                ],
                backgroundColor: [
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                ],
            },
            ],

        },
        options: {
            title: {
                display: true,
                text: 'JSON Data'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
    let myThead3 = document.getElementsByTagName("h1")[0];
    let newCanvas3 = document.createElement("canvas");
    newCanvas3.id = "myChart3";
    newCanvas3.style.width = "400px";
    newCanvas3.style.width = "400px";
    myThead3.appendChild(newCanvas3);
    myJSONFunc();

setInterval(() => {
    document.getElementById("myChart3").remove();
    let newCanvas3 = document.createElement("canvas");
    newCanvas3.id = "myChart3";
    newCanvas3.style.width = "400px";
    newCanvas3.style.width = "400px";
    myThead3.appendChild(newCanvas3);

    myJSONFunc()
}, 3000);







/*const apiUrl = 'https://canvasjs.com/services/data/datapoints.php';



let myThead3 = document.getElementsByTagName("h1")[0];
let newCanvas3 = document.createElement("canvas");
newCanvas3.id = "myChart3";
newCanvas3.style.width = "400px";
newCanvas3.style.width = "400px";
newCanvas2.classList.remove("chartjs-render-monitor");
myThead3.appendChild(newCanvas3);


let myLabels3 = [];
let myJsonData = [];
async function getData() {
    myLabels3 = [];
    myJsonData = [];
    response = "";
    data = "";
    response = await fetch(apiUrl);
    data = await response.json();
    console.log(data);
    for (let x = 0; x < 11; x++) {
        for (let c = 0; c < 2; c++) {
            if (c % 2 === 0) {
                myLabels3.push(data[x][c]);
            }
            else if (c % 2 !== 0) {
                myJsonData.push(data[x][c]);
            }
        }
        c = 0;
        console.log(myLabels3);
        console.log(myJsonData);
    }
}

//getData();
let myChart3;
let ctl;
console.log(myLabels3);
console.log(myJsonData);

//setInterval(() => {
  //  myChart3 = 1;
    //ctl = 1;
    getData();
    ctl = document.getElementById('myChart3').getContext('2d');
    myChart3 = new Chart(ctl, {
        type: 'bar',
        data: {
            labels: myLabels3,
            datasets: [{
                label: "JsonData",
                data: myJsonData,
                borderColor: [
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                    '#0048BA',
                ],
                backgroundColor: [
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                    '#5DADEC',
                ],
            },
            ],

        },
        options: {
            title: {
                display: true,
                text: 'JSON Data'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

//}, 1000);
*/