"use client"

import Image from "next/image"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import ccLogo from "../../images/cclogo.png";

export function CreateAccount() {
  return (
    <Card className="w-full h-max p-2 border-muted-foreground">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl uppercase">Bienvenido</CardTitle>
        <CardDescription>
          Utiliza tu cuenta de Google para iniciar sesión
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-6">
          <Button variant="outline">
            <Icons.google className="mr-2 h-6 w-6" />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Image
        src={ccLogo}
        className="m-auto"
        alt="Bienvenido a CCF"
        width={370}
        height={370}
        />
        {/* <Button className="w-full">Create account</Button> */}
      </CardFooter>
    </Card>
  )
}