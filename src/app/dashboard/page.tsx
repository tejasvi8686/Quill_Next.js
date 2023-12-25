import {getKindeServerSession} from "@kinde-0ss/kinde-oss/kinde-auth-nextjs/server"

const page = () => {
    const {} = getkindeServerSession()
}

export default page