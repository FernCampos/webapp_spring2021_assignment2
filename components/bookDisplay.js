app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
    /*html*/
    `<ul class="col-sm-12 col-md-6 col-xl-4">
    <a class="list-group-item list-group-item-action active" href="this.bookObj.selfLink" v-show = "bookObj.volumeInfo.title != undefined">{{this.bookObj.volumeInfo.title}}</a>
    <li class="list-group-item" v-show = "bookObj.volumeInfo.authors != undefined"><li class="list-group-item" v-for="author in bookObj.volumeInfo.authors">{{author}}</li></li>
    <li class="list-group-item" v-show = "bookObj.volumeInfo.publisher != undefined && bookObj.volumeInfo.publishedDate != undefined">{{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
    </ul>`,
    computed:{
        bookObj(){
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }
})