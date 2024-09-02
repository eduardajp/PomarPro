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
    this.buscaarvore()
  }



  arvore:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    defensivo:new FormControl('', Validators.required),
    fertilizante:new FormControl('', Validators.required),
    ultima_verif:new FormControl('',Validators.required ),
    tb_tipo_id:new FormControl('', Validators.required),
    tb_situacao_id:new FormControl('', Validators.required),
    linha:new FormControl('',Validators.required),
    coluna:new FormControl('',Validators.required),
    pomar:new FormControl('',Validators.required),

  })
  onIncluir(){
    this.arvore.reset();
    this.arvore.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.arvore.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.ArvoreService.addarvore(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "arvore adicionado com sucesso",
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
            "Erro ao adicionar arvore",
            "OK",{
              verticalPosition:'top',
              horizontalPosition:'end',
              duration:3000
            }
          )
          
        }
      })
    }else{
      //ira alterar o usuario no banco de dados

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
  }

  }



