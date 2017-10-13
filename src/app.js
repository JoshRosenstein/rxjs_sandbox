import $ from 'jquery';
import Rx from 'rxjs/Rx';


// Merge Map, COncat Map and Switch Map
// Stop us from having to Nest subscribe


// Dont do this, if putting this into a variable, may have issues

/*
Rx.Observable.of('Hello')
.subscribe(v=> {
    Rx.Observable.of(v + ' Everyone')
        .subscribe(x=> console.log(x));
});
*/

// Merge Map
/*
Rx.Observable.of('Hello')
.mergeMap(v => {
    return Rx.Observable.of(v + ' Everyone2');
})
.subscribe(x=> console.log(x));
*/


// Switch Map, Better way to it compared to exercise  # 4

function getGithubUser(username) {
    return $.ajax({
        url: 'https://api.github.com/users/'+username,
        dataType:'jsonp'
    }).promise();
}

const inputSource$= Rx.Observable.fromEvent($('#input'),'keyup')
    .map(e => e.target.value)
    .switchMap(v => {
        return Rx.Observable.fromPromise(getGithubUser(v));
    });
inputSource$.subscribe(
    x=>{
        //console.log(x);
        $('#name').text(x.data.name);
        $('#blog').text(x.data.blog);
        $('#repos').text('Public Repos: '+x.data.public_repos);
    });
