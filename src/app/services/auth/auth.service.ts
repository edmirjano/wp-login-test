import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly basePath = 'https://test.agrotourism.gov.al/wp-json/api/v1/';

  constructor(
    private http: HttpClient
  ) { }



  async signin(postData: {username: string, password: string }):  Promise<any> {
    this.getPosts();
    return this.http.post(`${this.basePath}token`, postData).subscribe((data: any)=>{
      if(data?.jwt_token){
      return true;
      } else{
        alert(data.error_description);
        return false;
      }
    });
  }

  async getPosts(): Promise<any> {
    return this.http.get(`https://test.agrotourism.gov.al/wp-json/wp/v2/posts`).subscribe((data: any)=>{
      return data;
    }
    );
  }
}
