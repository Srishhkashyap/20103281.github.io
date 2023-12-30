document.addEventListener("DOMContentLoaded", function () {
 
    var locationData = {
      labels: ["Everette", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"],
      datasets: [
        {
          label: "Revenue for November 2019",  
          backgroundColor: "rgba(81, 184, 167, 1)",
          borderColor: "rgb(81, 184, 167)",
          borderWidth: 1,
          data: [85000, 80000, 49000, 47000, 46000, 34000],
        },
      ],
    };
  
    var jobTypeData = {
      labels: ["Servie Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Work Plumbing", "HWT Replacement", "Maintenance", "Material Sale"],
      datasets: [
        {
          label: "Revenue for November 2019",   
          backgroundColor: "rgba(81, 184, 167, 1)",
          borderColor: "rgb(81, 184, 167)",
          borderWidth: 1,
          data: [185000, 130000, 80000, 79000, 44000, 42000, 21000],
        },
      ],
    };
  
 
    var locationChartCanvas = document.getElementById("revenueByLocationChart").getContext("2d");
    var jobTypeChartCanvas = document.getElementById("revenueByJobTypeChart").getContext("2d");
  
  
    var locationChart = new Chart(locationChartCanvas, {
      type: "bar",
      data: locationData,
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: false,
            grid: {
                display: false, 
              },
          },
          x: {
            beginAtZero: true,            
          },
        },
      },
    });
  
    var jobTypeChart = new Chart(jobTypeChartCanvas, {
      type: "bar",
      data: jobTypeData,
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: false,
            grid: {
                display: false, 
              },
          },
          x: {
            beginAtZero: false,
            stepsize: 20000,
          },
        },
      },
    });
  });
  