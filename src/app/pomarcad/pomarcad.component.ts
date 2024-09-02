import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {PomarCadService} from '../service/pomarcad.service'



@Component({
  selector: 'app-PomarCad',
  templateUrl: './pomarcad.component.html',
  styleUrl: './pomarcad.component.scss'
})
export class PomarCadComponent {
  
  constructor(
 private PomarCadService:PomarCadService,
 private snackbar:MatSnackBar
    
  ){
    this.buscaPomarCad()
  }



  PomarCad:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    apelido:new FormControl('', Validators.required),
    num_linha:new FormControl('', Validators.required),
    num_coluna:new FormControl('',Validators.required ),

    
   


  })
  onIncluir(){
    this.PomarCad.reset();
    this.PomarCad.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.PomarCad.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.PomarCadService.addmaterial(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "PomarCad adicionado com sucesso",
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
            "Erro ao adicionar PomarCad",
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
    this.PomarCad.reset();
    this.PomarCad.disable();
  }

  relatorio:any[] = [];


  buscaPomarCad(){
    this.PomarCadService.getMaterial().subscribe({
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



