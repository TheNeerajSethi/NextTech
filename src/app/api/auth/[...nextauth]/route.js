import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';


const authOptions = {
    Providers:[
        GoogleProvider({
            clientSecret:process.env.GCLIENT_SECRET,
            clientId:process.env.GCLIENT_ID
        })
    ]
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};