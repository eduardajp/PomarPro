import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialService } from '../../service/material.service';



@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {
  
  constructor(
    private materialservice:MaterialService,
    private snackbar:MatSnackBar
    
  ){
    this.buscaMateriais()
  }



  material:FormGroup = new FormGroup({ 
    id:new FormControl(null),
    nome:new FormControl('', Validators.required),
    tipo:new FormControl('', Validators.required),
    valor:new FormControl('',Validators.required ),
    fornecedor:new FormControl('',Validators.required),
    
   


  })
  onIncluir(){
    this.material.reset();
    this.material.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.material.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.materialservice.addmaterial(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "Material adicionado com sucesso",
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
            "Erro ao adicionar Material",
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
    this.material.reset();
    this.material.disable();
  }

  relatorio:any[] = [];


  buscaMateriais(){
    this.materialservice.getMaterial().subscribe({
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



