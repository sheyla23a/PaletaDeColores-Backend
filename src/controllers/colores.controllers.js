import Color from "../database/model/color.js";

export  const listarColores=(req,res)=>{
    console.log('desde listar colores');
    res.send('Enviar lista de colores...')
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