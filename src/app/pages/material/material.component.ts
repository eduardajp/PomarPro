import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialService } from '../../service/material.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {
  constructor( 
    private materialService:MaterialService,
    private snackbar:MatSnackBar
  ){
    this.buscaMaterial()
  }
  material:FormGroup = new FormGroup ({
    id:new FormControl(null),
    nome:new FormControl('',Validators.required),
    tipo:new FormControl('',Validators.required),
    valor:new FormControl('',Validators.required),
    fornecedor:new FormControl('',Validators.required),
  })
  
onIncluir(){
  this.material.reset();
  this.material.enable();
}
onSalvar(){
  let info = this.material.value;
  if(info.id == null){
    this.materialService.addMaterial(info).subscribe({
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
  this.material.reset();
  this.material.disable();
}

relatorio:any[] = [];

buscaMaterial(){
  this.materialService.getMaterial().subscribe({
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



