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
    hourTic;
    clockHourData = [];
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
        if (n > 12) {
            n = (n - 12) * 30;
            this.hours = n;
            this.hourHand.style.transform = `rotate(${this.hours}deg)`
        } else {
            n = n * 30;
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
        //console.log(this.clockHourData)


    }
      
    myVar = setInterval(this.myClock.bind(this), 1000);
    connectedCallback() {
        console.log('clockHours', clockData)
        //clockData.forEach(this.myFunction);

        clockData.forEach(x => {
            x.style = "transform:rotate(" + x.hour * 30 + "deg)"
            this.clockHourData.push(x)
        })
        // .then(results => {
        //     //this.clockHourData = results
        //     console.log(results)
        // })
    }
    renderedCallback() {

        //console.log("In connected Callback")
        //console.log('clockHours', this.clockHourData)
        this.secondHand = this.template.querySelector(".second-hand");
        this.minuteHand = this.template.querySelector(".minute-hand");
        this.hourHand = this.template.querySelector(".hour-hand");
        this.hourTic = this.template.querySelector(".hourTic");


        //console.log("renderedCallback", this.secondHand) 
    }

}
