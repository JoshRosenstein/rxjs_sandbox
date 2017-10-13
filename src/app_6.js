

import $ from 'jquery';
import Rx from 'rxjs/Rx';

//Map & Pluck
// Take any data thats emited and mainuplate it

/*
 const source$ = Rx.Observable.interval(1000)
 .take(10)
 .map(v => v *2 );

 source$.subscribe(
 v=> console.log(v)
 );
 */

// Manipulating Streams String
/*
 const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
 .map(v => v.toUpperCase())
 .map(v => 'I am ' + v);

 source$.subscribe(
 v => console.log(v)
 );
 */


/*
 function getGithubUser(username) {
 return $.ajax({
 url: 'https://api.github.com/users/'+username,
 dataType:'jsonp'
 }).promise();
 }


 Rx.Observable.fromPromise(getGithubUser('bradtraversy'))
 //.map(user=> user.data)  //Just get the data object
 .map(user=> user.data.name)
 //.subscribe(user=>{
 //console.log(user);});

 .subscribe(name=>{
 console.log(name);

 });
 */

const users=[
    {name:'Will', age: 34},
    {name:'Mike', age: 33},
    {name:'Paul', age: 35}
];

const users$ =Rx.Observable.from(users)
    .pluck('name');

users$.subscribe(x=>console.log(x))
