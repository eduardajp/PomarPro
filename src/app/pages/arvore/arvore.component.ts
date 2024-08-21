import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArvoreService } from '../../services/arvore.service';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrl: './arvore.component.scss'
})
export class arvoreComponent {
  
  constructor(
 private ArvoreService:ArvoreService,
 private snackbar:MatSnackBar
    
  ){
    this.buscaArvore()
  }
  arvore:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    defensivo:new FormControl('', Validators.required),
    fertilizante:new FormControl('', Validators.required),
    ultima_verif:new FormControl('',Validators.required ),
    tb_tipo_id:new FormControl('', Validators.required),
    tb_situacao_id:new FormControl('', Validators.required),
   
  })
  onIncluir(){
    this.Arvore.reset();
    this.Arvore.enable();
  }

  onSalvar(){
    let info = this.arvore.value;
    if(info.id == null){
      this.ArvoreService.addarvore(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "Á rvore adicionado com sucesso",
            "OK",{
              verticalPosition:'top',
              horizontalPosition:'end',
              duration:3000
            }
          )
          this.onCancelar()
        },
        error:(erro)=>{
          console.log(erro)
          this.snackbar.open(
            "Erro ao adicionar Árvore",
            "OK",{
              verticalPosition:'top',
              horizontalPosition:'end',
              duration:3000
            }
          )
          
        }
      })
    }else{
    }
  }

  onCancelar(){
    this.arvore.reset();
    this.arvore.disable();
  }

  relatorio:any[] = [];

  buscaarvore(){
    this.ArvoreService.getarvore().subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro)
    }
    })
  }}