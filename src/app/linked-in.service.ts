import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkedIn, LinkedInComments, LinkedInLike, LinkedInList } from './models/linkedin';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
  private readonly baseUrl : string = "https://localhost:44368/api/LinkedIns"
  formData: LinkedIn = new LinkedIn();
  list: LinkedIn[] | undefined;

  constructor( private readonly http:HttpClient) 
  { }

 //[+][post data]
  // postData() 
  // {
  //  return this.http.post(this.baseUrl,this.formData); 
  // }
  postData(formData: FormData):Observable<Array<LinkedIn>>{
    return this.http.post<Array<LinkedIn>>(`${this.baseUrl}`,formData);
  }
  //[-][post data]
//-------------------------------------------------------------------------------
//[+][save like]
  // saveLikedPost(id:number | undefined,linkedinlikeData : LinkedInLike) 
  // {
  //   return this.http.post(`${this.baseUrl}/like/${id}`, linkedinlikeData);

  // }

  saveLikedPost(id:number |undefined,data:LinkedInLike):Observable<Array<LinkedInLike>>{
    return this.http.post<Array<LinkedInLike>>(`${this.baseUrl}/like/${id}`,data);
  }
  //[-][save like]
//-------------------------------------------------------------------------------
  //[+][save comments]
  // saveCommentPost(id:number | undefined,linkedinCommentData : LinkedInComments) 
  // {
  //   return this.http.post(`${this.baseUrl}/comments/${id}`, linkedinCommentData);
  // }
  saveCommentPost(id:number|undefined,data:LinkedInComments):Observable<Array<LinkedInComments>>{
    return this.http.post<Array<LinkedInComments>>(`${this.baseUrl}/comments/${id}`,data);
  }
  //[-][save comments]
  //-------------------------------------------------------------------------------
 
  getAllList(): Observable<Array<LinkedInList>>{
    return this.http.get<Array<LinkedInList>>(`${this.baseUrl}`);
   }

   //using promise
  //  async getAllListAnsyc(): Promise<Array<LinkedInList>>{
  //   return await this.http.get<Array<LinkedInList>>(`${this.baseUrl}`).toPromise();
  //  }
 //using promise

}
