import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit{

  listProductos: producto[] = [];  
  
  constructor(private _productoService: ProductoServiceService) { }


  ngOnInit(): void{
    this.obtenerProductos(); 
  }


  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos = data; 
    },error =>{
      console.log('Error');
    })
    
  }

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      console.log('Eliminado');
      this.obtenerProductos();
    },error =>{
      console.log(error);
    })

  }



}
