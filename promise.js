const posts =[

    {   title:'Post one', body: 'This is post one', createdAt: new Date().getTime()},

    {   title:'Post two', body: 'This is post two', createdAt: new Date().getTime() }

];

let intervalId =0;



function getPosts()

{

    clearInterval(intervalId);

    intervalId = setInterval(()=>

    {

        let output = '';

        for(let i = 0; i<posts.length; i++)

    {

    output += '<li>${posts[i].title} - last updated ${(new Date().getTime{} - posts[i].createdAt)} </li> '

    }

    console.log('timer runnig id =', intervalId)

    document.body.innerHTML = output;

    } ,1000)



}

function createPost( post){

    return new Promise( (resolve , reject) => {
        setTimeout(() => {

            posts.push(post);
            
            const error = false;
            
            if(!error){
                resolve();
            }
            else
            {
                reject('Error : something went wrong');
            }
     

     
         }, 2000);

    });

   

}
createPost({title: 'Post Three' , body: 'This is post three'})
.then(() => {
    getPosts()
    deletePost().then(()=>{
        
    })
})
.catch(err => console.log(err));

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));
Promise.all({promise1, promise2, promise3}).then(values => console.log(values));