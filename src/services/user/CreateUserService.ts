import prismaClient from '../../prisma'
import{hash} from 'bcryptjs'


interface UserRequest{
    name: string;
    email: string;
    password: string;
  }
  
  class CreateUserService{
    async execute({name, email, password}: UserRequest){
  
// verificar se ele enviou um email
  
if(!email){
throw new Error("Email incorreto")

}

//verfiicar se o email ja tem acesso 

const userAlreadyExists = await prismaClient.user.findFirst({
    where:{
        email: email

    }
})
if(userAlreadyExists){
    throw new Error("email ja utilizado")
}
const passwordHash = await hash(password,8)
const user = await prismaClient.user.create({
data:{
   name: name,
   email: email,
   Password:passwordHash,

},

select:{
    id:true,
    name:true,
    email:true,
}

})

      return user
    }
  }
  
  export { CreateUserService }