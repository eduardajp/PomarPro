import { Component } from '@angular/core';
import { PomarcadService } from '../service/pomarcad.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-pomarcad',
  templateUrl: './pomarcad.component.html',
  styleUrl: './pomarcad.component.scss'
})
export class PomarcadComponent {
  constructor(
    private PomarcadService:PomarcadService,
    private snackbar:MatSnackBar
  ){
    this.buscaPomar()
  }

  formulario:FormGroup = new FormGroup ({
    id:new FormControl(null),
    nome:new FormControl('',Validators.required),
    num_linhas:new FormControl('',Validators.required),
    num_colunas:new FormControl('',Validators.required),
  })
  
  
  onIncluir(){
  this.formulario.reset();
  this.formulario.enable();
  }
  
  onSalvar(){
  
  let info = this.formulario.value;
  
  if(info.id == null){
  
  this.PomarcadService.addPomar(info).subscribe({
    next:(resposta)=>{
      console.log(resposta)
      
    },
    error:(erro)=>{
      console.log(erro)
    }
  })
  
  }else{
  
  }
  }
  onCancelar(){
  this.formulario.reset();
  this.formulario.disable();
  }
  Pomar:any[] = [];
  
  buscaPomar(){
  this.PomarcadService.getPomar().subscribe({
  next:(resposta)=>{
    console.log(resposta);
    this.formulario = resposta.body;
  },
  error:(erro)=>{
    console.log(erro);
  }
  })
  }






}
