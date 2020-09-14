import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

  uri = 'http://localhost:8080/blog';

  constructor(private http: HttpClient) { }

  addBlog(person_name, datetime, person_comments){
    const obj = {
      person_name: person_name,
      datetime: datetime,
      person_comments: person_comments
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
        //alert('succesfully submitted');
  }

  getBlogs(){
    return this
          .http
          .get(`${this.uri}`);
  }

}
