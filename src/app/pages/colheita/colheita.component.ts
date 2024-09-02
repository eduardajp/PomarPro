import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColheitaService } from '../../services/colheita.service';



@Component({
  selector: 'app-colheita',
  templateUrl: './colheita.component.html',
  styleUrl: './colheita.component.scss'
})
export class colheitaComponent {
  
  constructor(
    private ColheitaService:ColheitaService,
    private snackbar:MatSnackBar
    
  ){
    this.buscaMateriais()
  }



  colheita:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    quantidade:new FormControl('', Validators.required),
    dt_colheita:new FormControl('', Validators.required),
    arvore:new FormControl('',Validators.required ),
    
    
   


  })
  onIncluir(){
    this.colheita.reset();
    this.colheita.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.colheita.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.ColheitaService.addcolheita(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "colheita adicionado com sucesso",
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
            "Erro ao adicionar colheita",
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
    this.colheita.reset();
    this.colheita.disable();
  }

  relatorio:any[] = [];


  buscaMateriais(){
    this.ColheitaService.getcolheita().subscribe({
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



