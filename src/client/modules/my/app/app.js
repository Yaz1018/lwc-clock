import { LightningElement } from 'lwc';
import { clockData } from './clockData';
export default class App extends LightningElement {
    secs = new Date().getSeconds() * 6;
    mins = new Date().getMinutes() * 6;
    hours = new Date().getHours() * 30;
    testStyle = "transform:rotate(60deg)"
    secondHand;
    minuteHand;
    hourHand;
    clockHourData = [];
    isTrueTemplate = false;
    seconds(d) {
        var n = d.getSeconds() * 6;
        this.secs = n;
        this.secondHand.style.transform = `rotate(${this.secs}deg)`
        //console.log(this.secondHand)  
    }
    minutes(d) {
        var n = d.getMinutes() * 6;
        this.mins = n;
        this.minuteHand.style.transform = `rotate(${this.mins}deg)`
        //console.log(this.minuteHand)  
    }
    clockHours(d) {
        var n = d.getHours();
        var m = d.getMinutes()
        if (n > 12) {
            n = (n - 12) * 30 + (m/2);
            this.hours = n;
            this.hourHand.style.transform = `rotate(${this.hours}deg)`
        } else {
            n = n * 30 + (m/2);
            this.hours = n;
            this.hourHand.style.transform = `rotate(${this.hours}deg)`
        }
        //console.log(this.hourHand)  
    }

    myClock() {
        var d = new Date();

        this.seconds(d)
        this.minutes(d)
        this.clockHours(d)

    }
      
    myVar = setInterval(this.myClock.bind(this), 1000);
    connectedCallback() {

        clockData.forEach(x => {
            x.style = "transform:rotate(" + x.hour * 30 + "deg)"
            this.clockHourData.push(x)
        })
    }
    renderedCallback() {

        this.secondHand = this.template.querySelector(".second-hand");
        this.minuteHand = this.template.querySelector(".minute-hand");
        this.hourHand = this.template.querySelector(".hour-hand");

    }

}
