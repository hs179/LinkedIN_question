import 'zone.js';
import {Component, inject} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:[ReactiveFormsModule, CommonModule],
  standalone: true,
  template: `
   <h4>Reactive Form</h4>
  <form [formGroup] = form>
    <div>
      <label>
      Name:
      <input type="text" formControlName="name" placeholder="Enter Name">
      </label>
      </div>
      <div>
      <label>
      Email:
      <input type="text" formControlName="email" placeholder="Enter Email">
      </label>
    </div>
    <div formArrayName="skills">
      <label>skills:
     <div *ngFor="let skill of skills.controls; let i = index">
      <input type='text' [formControlName]= i placeholder="enter skills">
      <button (click)="remove(i)">Remove</button>
     </div>
     <button (click)="addskills()">Add skills</button>
    </label>
    </div>
    <button (click)='submit()'>submit</button>
  <form>
   
  `,
})
export class App {
 private fb = inject(FormBuilder)

 form:FormGroup= this.fb.group({
   name:["",[Validators.required]],
   email:["",[Validators.email, Validators.required]],
   skills: this.fb.array([])
 })

 get skills(): FormArray{
   return this.form.get("skills") as FormArray;
 }

 addskills(){
   this.skills.push(this.fb.control(''))
 }

 remove(i:number){
   this.skills.removeAt(i)
 }

 submit(){
   console.log(this.form.value)
 }



}

bootstrapApplication(App);
