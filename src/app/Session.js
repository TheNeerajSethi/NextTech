"use client"

import {SessionProvider} from "next-auth/react";

export const NextWrapper = ({children})=>{
    return <SessionProvider>{children}</SessionProvider>
}