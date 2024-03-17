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
    res.status(404).json({mensaje: 'No se encontro la tarea solicitada'})
  }
 }