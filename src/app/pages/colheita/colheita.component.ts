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
    private colheitaService:ColheitaService,
    private snackbar:MatSnackBar
    
  ){
    this.buscaColheita()
  }
  colheita:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    quantidade:new FormControl('', Validators.required),
    dt_colheita:new FormControl('', Validators.required),
    td_arvore_id:new FormControl('',Validators.required ),
  })
  onIncluir(){
    this.colheita.reset();
    this.colheita.enable();
  }
 
  onSalvar(){
    let info = this.colheita.value;
    if(info.id == null){
      this.ColheitaService.addColheita(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "Colheita adicionado com sucesso",
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
            "Erro ao adicionar Colheita",
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
    this.colheita.reset();
    this.colheita.disable();
  }

  relatorio:any[] = [];

  buscaColheita(){
    this.ColheitaService.getColheita().subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro)
    }
    })
  }}
