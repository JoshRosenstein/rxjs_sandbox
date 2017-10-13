import $ from 'jquery';
import Rx from 'rxjs/Rx';

//Creating Observable from scratch


const source$= new Rx.Observable(observer => {
    console.log('Creating Observable');

    observer.next('Hello World');
    observer.next('Another Value');

    observer.error(new Error('Error: Something went wrong'));

    setTimeout(() =>{
        observer.next('Yet Another value');
        observer.complete();
    },3000);
});

source$
    .catch(err=> Rx.Observable.of(err))
    .subscribe(
    x => {
        console.log(x);
        },
err => {
        console.log(err)
    },
    complete => {
        console.log('completed');
    });