// Display gallons value beside input
function display() {
    var gallons = document.getElementById("gallons").value;
    document.getElementById("gallonsDisplay").innerHTML = gallons;
}

// Convert between gallons and litres
function convert() {
    var amount = parseFloat(document.getElementById("fluidAmount").value);
    var convertTo = document.querySelector('input[name="convertType"]:checked').value;
    var resultElement = document.getElementById("result");

    if (isNaN(amount) || amount < 0) {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    if (convertTo === "toLitres") {
        if (amount > 1000) {
            resultElement.innerHTML = "Maximum is 1000 gallons.";
            return;
        }
        var litres = amount * 3.78541;
        resultElement.innerHTML = litres.toFixed(2) + " litres";
    } else {
        if (amount > 4000) {
            resultElement.innerHTML = "Maximum is 4000 litres.";
            return;
        }
        var gallons = amount / 3.78541;
        resultElement.innerHTML = gallons.toFixed(2) + " gallons";
    }
}

// Draw the cylinder on canvas
function drawCylinder() {
    var canvas = document.getElementById("cylinderCanvas");
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");

        // Top ellipse
        ctx.beginPath();
        ctx.ellipse(150, 60, 100, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = "lightgreen";
        ctx.fill();
        ctx.stroke();

        // Side lines
        ctx.beginPath();
        ctx.moveTo(50, 60);
        ctx.lineTo(50, 240);
        ctx.moveTo(250, 60);
        ctx.lineTo(250, 240);
        ctx.stroke();

        // Bottom ellipse
        ctx.beginPath();
        ctx.ellipse(150, 240, 100, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.stroke();
    }
}

// Run when page loads
window.onload = function () {
    drawCylinder();
};

// Final velocity and graphing logic
function calculateFinalVelocity() {
    var u = parseFloat(document.getElementById("initialVelocity").value);
    var a = parseFloat(document.getElementById("acceleration").value);
    var t = parseFloat(document.getElementById("time").value);
    var output = document.getElementById("output");

    if (isNaN(u) || isNaN(a) || isNaN(t)) {
        output.innerHTML = "Please enter all values correctly.";
        return;
    }

    var v = u + a * t;
    output.innerHTML = "Final velocity (v) = " + v.toFixed(2) + " m/s";

    drawDistanceTimeGraph(u, a, t);
    drawHeightTimeGraph(u, a, t);
    drawVelocityTimeGraph(u, a, t);
    drawVerticalVelocityGraph(u, a, t);
    drawVerticalVelocityHeightGraph(u, a, t);
    drawVerticalVelocityDistanceGraph(u, a, t);
}

// Graph: Distance vs Time
function drawDistanceTimeGraph(u, a, totalTime) {
    var times = [], distances = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        times.push(t.toFixed(1));
        distances.push((u * t + 0.5 * a * t * t).toFixed(2));
    }

    RGraph.clear(document.getElementById("distanceTimeCanvas"));
    new RGraph.Line({
        id: "distanceTimeCanvas",
        data: distances,
        options: {
            xaxisLabels: times,
            title: "Distance vs Time",
            xaxisTitle: "Time (s)",
            yaxisTitle: "Distance (m)",
            colors: ["blue"]
        }
    }).draw();
}

// Graph: Height vs Time
function drawHeightTimeGraph(u, a, totalTime) {
    var times = [], heights = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        times.push(t.toFixed(1));
        heights.push((u * t + 0.5 * a * t * t).toFixed(2));
    }

    RGraph.clear(document.getElementById("heightTimeCanvas"));
    new RGraph.Line({
        id: "heightTimeCanvas",
        data: heights,
        options: {
            xaxisLabels: times,
            title: "Height vs Time",
            xaxisTitle: "Time (s)",
            yaxisTitle: "Height (m)",
            colors: ["green"]
        }
    }).draw();
}

// Graph: Velocity vs Time
function drawVelocityTimeGraph(u, a, totalTime) {
    var times = [], velocities = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        times.push(t.toFixed(1));
        velocities.push((u + a * t).toFixed(2));
    }

    RGraph.clear(document.getElementById("velocityTimeCanvas"));
    new RGraph.Line({
        id: "velocityTimeCanvas",
        data: velocities,
        options: {
            xaxisLabels: times,
            title: "Velocity vs Time",
            xaxisTitle: "Time (s)",
            yaxisTitle: "Velocity (m/s)",
            colors: ["red"]
        }

    }).draw();

}

//Graph: Distance vs Time 
function drawDistanceTimeGraph(u, a, totalTime) {
    var times = [], distances = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {

    }

    RGraph.clear(document.getElementById("distanceTimeCanvas"));
    new RGraph,Line({
    id: "distanceTimeCanvas",
    data: distances,
    options: {
        xaxisLabels: times,
        title: "Distance vs Time",
        xaxisTitle: "Time (s)",
        yaxisTitle: "Distance (m)",
        colors: ["blue"]
    }

}).draw();

}

// Function to draw Height vs. Time graph
function drawHeightTimeGraph(u, a, totalTime) {
    var times = [];
    var heights = [];
    var interval = totalTime / 50;

    for (var t = 0; t <= totalTime; t += interval) {
        times.push(t.toFixed(1));
        var height = u * t + 0.5 * a * t * t;
        heights.push(height.toFixed(2));
    }

    // Clear the canvas before drawing
    RGraph.clear(document.getElementById("heightTimeCanvas"));

    // Create the Height vs. Time graph
    new RGraph.Line({
        id: "heightTimeCanvas",
        data: heights,
        options: {
            xaxisLabels: times,
            title: "Height vs. Time",
            xaxisTitle: "Time (s)",
            yaxisTitle: "Height (m)",
            colors: ["green"]
        }
    }).draw();
}

//Graph: Vertical Velocity vs Time
function drawVerticalVelocityGraph(u, a, totalTime) {
    var time = [], velocities = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        times.push(t.toFixed(1));
        var verticalVelocity = u + a * t;
        velocities.push(verticalVelocity.toFixed(2));
    }

    RGraph.clear(document.getElementById("verticalVelocityCanvas"));
    new RGraph.Line({
        id: "verticalVelocityCanvas",
        data: velocities,
        options: {
            xaxisLabels: times,
            title: "Vertical Velocity vs Time",
            xaxisTitle: "time (s)",
            yaxisTitle: "Velocity (m/s)",
            colors: ["orange"]
        }
    }).draw();

}

// Graph: Vertical Velocity vs Height
function drawVerticalVelocityHeightGraph(u, a, totalTime) {
    var heights = [], velocities = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        var h = u * t + 0.5 * a * t * t;
        var v = u + a * t;

        heights.push(h.toFixed(2));
        velocities.push(v.toFixed(2));
    }

    RGraph.clear(document.getElementById("velocityHeightCanvas"));
    new RGraph.Line({
        id: "velocityHeightCanvas",
        data: velocities,
        options: {
            xaxisLabels: heights,
            title: "Velocity vs Height",
            xaxisTitle: "Height (m)",
            yaxisTitle: "Velocity (m/s)",
            colors: ["orange"]
        }

    }).draw();

}

// Graph: Vertical Velocity vs Distance
function drawVerticalVelocityDistanceGraph(u, a, totalTime) {
    var distances = [], velocities = [], interval = totalTime / 50;
    for (var t = 0; t <= totalTime; t += interval) {
        var s = u * t + 0.5 * a * t * t;
        var v = u + a * t;

        distances.push(s.toFixed(2));
        velocities.push(v.toFixed(2));
    }

    RGraph.clear(document.getElementById("velocityDistanceCanvas"));
    new RGraph.Line({
        id: "velocityDistanceCanvas",
        data: velocities,
        options: {
            xaxisLabels: distances,
            title: "Velocity vs Distance",
            xaxisTitle: "Distance (m)",
            yaxisTitle: "Velocity (m/s)",
            colors: ["purple"]
        }

    }).draw();

}