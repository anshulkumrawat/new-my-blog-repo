import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import Blog from '../Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  blogs: Blog[];
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BlogService, private  router: Router) {
      this.createForm();

   }

   createForm(){
     this.angForm = this.fb.group({
       person_name: ['', Validators.required],
       datetime: ['', Validators.required],
       person_comments: ['', Validators.required]
     });
   }

   addBlog(person_name, datetime, person_comments){
     this.bs.addBlog(person_name, datetime, person_comments);

   }

  ngOnInit() {
    this.bs
      .getBlogs()
      .subscribe((data: Blog[]) => {
        this.blogs = data;
      });
      this.angForm.reset('/blogs/create');

  }
}




 //fileData: File = null;
  //private http: HttpClient

  // fileProgress(fileInput: any){
  //   this.fileData = <File>fileInput.target.files[0];
  // }

  // onSubmit(){
  //   const formData = new FormData();
  //   formData.append('file',this.fileData);
  //   this.http.post('url/to/your/api', formData)
  //   .subscribe(res=>{
  //     console.log(res);
  //     alert('Success !!');
  //   })
  // }

