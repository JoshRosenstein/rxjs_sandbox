import $ from 'jquery';
import Rx from 'rxjs/Rx';

//Interval Timer and Range

/*
const source$= Rx.Observable.interval(100)
    .take(5); //Tells It when to stop

source$.subscribe(
    x => {
        console.log(x)
    },
    err=> {
        console.log(err)
    },
    complete=> {
        console.log('Completed');
    }
);
*/

// Timer
/*
const source$= Rx.Observable.timer(5000,2000) //(time starts, Time Between Interval) if both parameters are equsl, equvalent to range func
    .take(5); //Tells It when to stop

source$.subscribe(
    x => {
        console.log(x)
    },
    err=> {
        console.log(err)
    },
    complete=> {
        console.log('Completed');
    }
);
*/

// Range

const source$= Rx.Observable.range(10,25) //all gets emited at once Start at first argument, than increments arg2 times


source$.subscribe(
    x => {
        console.log(x)
    },
    err=> {
        console.log(err)
    },
    complete=> {
        console.log('Completed');
    }
);