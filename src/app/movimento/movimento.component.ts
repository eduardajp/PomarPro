import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovimentoService } from '../service/movimento.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrl: './movimento.component.scss'
})
export class MovimentoComponent {
  constructor( 
    private MovimentoService:MovimentoService,
    private snackbar:MatSnackBar
  ){
    this.buscaMovimento()
  }
  movimento:FormGroup = new FormGroup ({
    quantidade:new FormControl('',Validators.required),
    produto:new FormControl('',Validators.required),
    tipo:new FormControl('',Validators.required),
  })

onIncluir(){
  this.movimento.reset();
  this.movimento.enable();
}
onSalvar(){
  let info = this.movimento.value;
  if(info.id == null){
    this.MovimentoService.addMovimento(info).subscribe({
      next:(resposta)=>{
        console.log(resposta)
        this.snackbar.open(
          "Movimento adicionado com sucesso!",
          "Ok",{
            verticalPosition:'top',
            horizontalPosition:'end',
            duration:2000
          }
        )
        this.onCancelar
      },
      error:(erro)=>{
        console.log(erro)
        this.snackbar.open(
          "Erro ao adicionar Movimento",
          "Ok",{
            verticalPosition:'top',
            horizontalPosition:'end',
            duration:2000
          }
        )
      }
    })

  }else{
    
  }
}
onCancelar(){
  this.movimento.reset();
  this.movimento.disable();
}

relatorio:any[] = [];

buscaMovimento(){
  this.MovimentoService.getMovimento().subscribe({
    next:(resposta)=>{
      console.log(resposta);
      this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro);
    }
  })
}}