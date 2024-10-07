class LeafletMap {
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;
        this.loggedData = [];

        this.initializeElements();
        this.bindEventListeners();
    }

    initializeElements() {
        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountBA');
        this.logCount2Element = document.getElementById('logCountCCS');
        this.idContainer = document.getElementById('logContainer');
    }

    bindEventListeners() {
        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBa());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }

    initTileLayer() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
        }).addTo(this.map);
    }

    addMarker(lat, long, message) {
        const marker = L.marker([lat, long]).addTo(this.map)
            .bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error("Error Loading markers:", error));
    }

    clearLogs() {
        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;
        this.loggedData = [];
        this.updateLogDisplay();
    }

    displayLogCount() {
        this.logCountElement.innerHTML = `SC Building Attendance: ${this.attendanceCountSC}`;
        this.logCount1Element.innerHTML = `BA Building Attendance: ${this.attendanceCountBA}`;
        this.logCount2Element.innerHTML = `CCS Laboratory Attendance: ${this.attendanceCountLab}`;
    }

    dataSc() {
        this.addMarker(8.360238, 124.867470, 'SC building');
        this.attendanceCountSC++;
        this.updateLogDisplay();
    }

    dataBa() {
        this.addMarker(8.359134, 124.868537, 'BA building');
        this.attendanceCountBA++;
        this.updateLogDisplay();
    }

    dataLab() {
        this.addMarker(8.359639, 124.869179, 'CCS Laboratory 1');
        this.attendanceCountLab++;
        this.updateLogDisplay();
    }

    updateLogDisplay() {
        this.idContainer.innerHTML = ''; 
        this.loggedData.forEach(data => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item';
            this.idContainer.appendChild(logItem);
        });
        this.displayLogCount();
    }
}

const myMap = new LeafletMap('map', [8.359735, 124.869206], 18);
myMap.loadMarkersFromJson('applet-2.json');

document.addEventListener('DOMContentLoaded', () => {
    myMap.displayLogCount();
});
