import $ from 'jquery';
import Rx from 'rxjs/Rx';

//Observables From a Promise

const myPromise= new Promise((resolve, reject)=>{
    console.log('Creating Promise');
    setTimeout(()=>{
        resolve('Hello From Promise');
    },3000);
});


//Basic Promise
/*
myPromise.then(x=>{
console.log(x);

});

*/
// As an observerable
/*
const source$= Rx.Observable.fromPromise(myPromise);
source$.subscribe(x=> console.log(x));
 */

function getGithubUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType:'jsonp'
    }).promise();
}

const inputSource$= Rx.Observable.fromEvent($('#input'),'keyup');

// Notes Generally you wouldnt want to have embeded subscription, use merge map or switch map
inputSource$.subscribe(e=>{
    Rx.Observable.fromPromise(getGithubUser(e.target.value))
        .subscribe(x=>{
            //console.log(x);
            $('#name').text(x.data.name);
            $('#blog').text(x.data.blog);
            $('#repos').text('Public Repos: '+x.data.public_repos);
        });

});

/*
Rx.Observable.fromPromise(getGithubUser('WaitNKill'))
    .subscribe(x=>{
        //console.log(x);
        $('#name').text(x.data.name);
        $('#blog').text(x.data.blog);
        $('#repos').text('Public Repos: '+x.data.public_repos);
    });
*/
