import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  constructor( 
    private produtoService:ProdutoService,
    private snackbar:MatSnackBar
  ){
    this.buscaProduto()
  }
  produto:FormGroup = new FormGroup ({
    id:new FormControl(null),
    valor:new FormControl('',Validators.required),
    descricao:new FormControl('',Validators.required),
    unidade:new FormControl('',Validators.required),
  })
  
onIncluir(){
  this.produto.reset();
  this.produto.enable();
}
onSalvar(){
  let info = this.produto.value;
  if(info.id == null){
    this.produtoService.addProduto(info).subscribe({
      next:(resposta)=>{
        console.log(resposta)
        this.snackbar.open(
          "Material adicionado com sucesso!",
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
          "Erro ao adicionar Material",
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
  this.produto.reset();
  this.produto.disable();
}

relatorio:any[] = [];

buscaProduto(){
  this.produtoService.getProduto().subscribe({
    next:(resposta)=>{
      console.log(resposta);
      this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro);
    }
  })
}

}