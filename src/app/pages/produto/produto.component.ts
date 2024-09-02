import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { produtoService } from '../../service/produto.service';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss'
})
export class ProdutoComponent {
  
  constructor(
    private produtoservice:produtoService,
    private snackbar:MatSnackBar
    
  ){
    this.buscaproduto()
  }



  produto:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    
    tipo:new FormControl('', Validators.required),
    valor:new FormControl('',Validators.required ),
    descricao:new FormControl('',Validators.required),
    unid_medida:new FormControl('',Validators.required),
    
   


  })
  onIncluir(){
    this.produto.reset();
    this.produto.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.produto.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.produtoservice.addproduto(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "produto adicionado com sucesso",
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
            "Erro ao adicionar produto",
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
    this.produto.reset();
    this.produto.disable();
  }

  relatorio:any[] = [];


  buscaproduto(){
    this.produtoservice.getproduto().subscribe({
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








