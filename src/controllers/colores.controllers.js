import Color from "../database/model/color.js";

export  const listarColores=async(req,res)=>{
  try{
    const colores = await Color.find();
    res.status(200).json(colores);
  }catch(error){
   console.log(error)
   res.status(404).json({mensaje: 'No se encontro la lista de colores'})
  }
}

export const crearColor = async (req,res)=>{
  try{
    const colorNuevo= new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({mensaje:'El color fue creado correctamente'})
   }catch(error){
  console.log(error)
  res.status(400).json({mensaje: 'No se pudo procesar la solicitud de crear color'})
  }
}

export const obtenerColor = async (req,res)=>{
  try{
   const colorBuscado = await Color.findById(req.params.id);
   res.status(200).json(colorBuscado);
  }catch(error){
    console.log(error)
    res.status(404).json({mensaje: 'No se encontro el color solicitado'})
  }
 }

 export const editarColor = async(req,res)=>{
  try{
   const buscarColor = await Color.findById(req.params.id);
   if(!buscarColor){
     return res.status(404).json({mensaje:'No se pudo editar el color, el id es incorrecto'})
   }
   await Color.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json({mensaje:'El color fue modificado exitosamente'});
  }catch(error){
      console.error(error)
      res.status(500).json({mensaje:'Ocurrio un error al intentar editar el color'})
  }
  }

  export const borrarColor = async(req,res)=>{
    try{
     const buscarColor = await Color.findById(req.params.id);
     if(!buscarColor){
       return res.status(404).json({mensaje:'No se pudo eliminar el color, el id es incorrecto'})
     }
     await Color.findByIdAndDelete(req.params.id);
     res.status(200).json({mensaje:'El color fue eliminado exitosamente'});
    }catch(error){
        console.error(error)
        res.status(500).json({mensaje:'Ocurrio un error al intentar borrar el color'})
    }
    }