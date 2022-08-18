import { Prod } from './../Prod';
import { IProd, IProduit } from './../../../list-products/Produit';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  postId: any;

  produit:IProd =new Prod()

  Image!:File

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  getProduct(registerForm:NgForm){
    console.log("valeurs: ",JSON.stringify(registerForm.value))
  }


  sendProduct(){
    this.http.post<any>('http://127.0.0.1:8000/api/produits', {
      "nom": "",
      "prix": 3,
      "isEtat": true,
      "image": "https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=" 
      }).subscribe(data => {
      this.postId = data.id;
  })
  }

  selectedImage(event:any){
    this.Image=<File>event.target.files[0]
    console.log(this.Image)
  }

  uploadImage(){
    const fd = new FormData()
    fd.append('image',this.Image,this.Image.name)
    this.http.post<any>('http://127.0.0.1:8000/api/produits',fd,{
      reportProgress: true,
      observe:'events'
    }) .subscribe(event=>{
      console.log(event)
    })
  }
}
