const userModel=require("../model/userModel");
const locacaoArmarioModel=require("../model/locarModel");



exports.get= async (headers,idCurso)=>{
  auth=userModel.verifyJWT(headers['x-access-token']);
  if(auth.idUser){
    if(headers.iduser==auth.idUser){
      resp=await locacaoArmarioModel.get(idCurso);
    }else{ 
      resp= {"status":"null", auth}
    }
  }else{
    resp= {"status":"null", auth}
  }
  console.log(resp);
  return resp;
}